const uuidv4 = require("uuid").v4;
const consoleLog = require("../utils/console-log");
const cron = require('node-cron');
const dbConnection = require("../database/db.config");
const searchOnAmazon = require("../modules/amazon/searchItems");
const searchOnimpact = require("../modules/impact");
const searchOnCollective = require("../modules/collective");
const { 
    createPost,
    uploadImage,
    publishPost,
    deletePost,
    downloadImage,
    rm_img
} = require("../modules/wp-module");

let count = 0;


class Bot {
    constructor() {
        consoleLog.info('bot started');
        consoleLog.wait('waiting for scheduled run');
        // this.database();
        this.start(); // for testing
        cron.schedule('*/30 * * * *', () => {
            consoleLog.info(`starting cron job ${count}`);
            this.start();
        });
    }

    async database() {
        await dbConnection();
    }

    async start() {
        consoleLog.info("running bot ...")
        //TODO - add a randomizer to choose between amazon, ebay, impact, collective and others
        switch (Math.floor(Math.random() * 2)) {
            case 0:
                consoleLog.info('searching on collective')
                this.item = await searchOnCollective();
                break;
            case 1:
                consoleLog.info('searching on impact')
                this.item = await searchOnimpact();
                break;
        }

        while (this.item) {
            
            consoleLog.send('Item found: Success');

            try {
                let post_id = await createPost({
                    name: this.item.name,
                    discount: this.item.discount_percentage,
                });

                let img_id = await uuidv4();
        
                let img_file_url = await downloadImage(this.item.image, img_id);
                
                let uploadedImg = await uploadImage(img_id, post_id);
        
                await publishPost({
                    post_id: post_id,
                    imgID: uploadedImg.imgID,
                    title: this.item.name,
                    aff_link: this.item.url,
                    imgUrl: this.item.image,
                    discount: this.item.discount_percentage,
                });
                
                rm_img(img_file_url);

                this.item = null;
                count++;
                consoleLog.info(`product id: ${post_id}`);
                consoleLog.info(`products posted: ${count}`);
                consoleLog.wait('waiting for next scheduled run');
            } catch (err) {
                consoleLog.error(err.message);
                setTimeout(() => {
                    deletePost(post_id);
                    rm_img(img_file_url);
                }, 5000);
            }
        }
    }
}

module.exports = Bot;
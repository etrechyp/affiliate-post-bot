const uuidv4 = require("uuid").v4;
const consoleLog = require("../utils/console-log");
const cron = require('node-cron');
const dbConnection = require("../database/db.config");
const searchOnAmazon = require("../modules/amazon/searchItem");
const searchOnimpact = require("../modules/impact");
const searchOnWalmart = require("../modules/walmart");
const searchOnCollective = require("../modules/colective/searchItem");
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
    
    item = undefined;
    item2 = undefined;
    
    constructor() {
        consoleLog.info('bot started');
        consoleLog.wait('waiting for scheduled run');
        // this.database();
        // this.startWalmart(); // for testing
        cron.schedule(process.env.CRON, () => {
            consoleLog.info(`starting cron job ${count}`);
            this.start();
        });

        cron.schedule((process.env.CRON_WALMART), () => {
            consoleLog.info(`starting cron job ${count}`);
            this.StartWalmart();
        });
    }

    async database() {
        await dbConnection();
    }

    async start() {
        consoleLog.info("running bot ...")

        switch (Math.floor(Math.random() * 2)) {
            case 0:
                consoleLog.info('searching on impact')
                this.item = await searchOnimpact();
                break;
            case 1:
                consoleLog.info('searching on collective')
                await searchOnCollective()
                    .then((item) => {
                        this.item = item;
                    })
                    .catch((err) => {
                        consoleLog.error(err.message);
                    });
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

                this.item = undefined;
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

    async startWalmart() {
        consoleLog.info("running bot ...")
        consoleLog.info('searching on Walmart')
        this.item2 = await searchOnWalmart();

        while (this.item2) {

            consoleLog.send('Item found: Success');

            try {
                let post_id = await createPost({
                    name: this.item2.name,
                    discount: this.item2.discount_percentage,
                });

                let img_id = await uuidv4();

                let img_file_url = await downloadImage(this.item2.image, img_id);

                let uploadedImg = await uploadImage(img_id, post_id);
        
                await publishPost({
                    post_id: post_id,
                    imgID: uploadedImg.imgID,
                    title: this.item2.name,
                    aff_link: this.item2.url,
                    imgUrl: this.item2.image,
                    discount: this.item2.discount_percentage,
                });
                
                rm_img(img_file_url);

                this.item2 = undefined;
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
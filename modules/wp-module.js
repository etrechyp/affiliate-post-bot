const consoleLog = require('../utils/console-log');
const fs = require('fs');
const WPAPI = require('wpapi');
const download = require('image-downloader');
const { product_template } = require('../templates/product_template');

const wp = new WPAPI({
    endpoint: `${process.env.WP_URL}/wp-json`,
    username: process.env.WP_USERNAME,
    password: process.env.WP_PASSWORD,
    auth: true
});

exports.createPost = async (info) =>{
    try {
        let title = info.discount + "% Discount on " + info.name
        let id = await wp.posts()
            .create({
                title: title,
                content: "<h1>Content here.!</h1>>",
                categories: 2706, 
                status: "draft",
                template: "elementor_header_footer",
            })
            .then(res => {
                return res.id
            })
            .catch(err => { 
                consoleLog.error(err);
            })
        return id
    } catch (err) { 
        consoleLog.error(err.message);
    }
}

exports.uploadImage = async (nameImage, post_id) => {
    try {
        let img_info = await wp.media()
            .file( `${__dirname}/../temp/${nameImage}.jpg`)
            .create({
                title: nameImage,
                alt_text: nameImage,
                description: ''
            })
            .then(async res => {
                await wp.media().id(res['id']).update({
                    post: post_id
                })

                return {
                    'imgID': res['id'],
                    'imgURL': res['source_url']
                }
            })
            .then(response => {
                consoleLog.send('Image uploaded: Success')
                return response
            })
            .catch(err => { 
                consoleLog.error(err);
            })
        return img_info
    } catch (err) { 
        consoleLog.error(err);
    }
}

exports.publishPost = async (info) => {
    try {
        let wp_content = product_template(info)
        let res = await wp.posts().id(info.post_id).update({
            content: wp_content,
            featured_media: info.imgID,
            status: 'publish'
        })
            .then(function (response) {
                return response['status']
            })
            .catch(err => { 
                consoleLog.error(err);
            })
        return res
    } catch (err) { 
        consoleLog.error(err);
    }
}

exports.deletePost = async (id) => {
    try {
        await wp.posts().id(id).delete()
            .then(res => consoleLog.info('post:', res.id, res.status))
    } catch (err) { 
        consoleLog.error('error on deleted post')
    }
}

exports.rm_img = (url) => {
    try {
        fs.unlinkSync(url)
        consoleLog.send(`Removed image from temp/: Success`)
    } catch (err) { 
        consoleLog.error(err)
    }
}

exports.downloadImage = async (url, name_img) => {
    try {
        let options = {
            url: url,
            dest: `${__dirname}/../temp/${name_img}.jpg`
        }
        let res_img = await download.image(options)
            .then(({ filename }) => {
                return filename
            })
            .catch(err => {
                consoleLog.error(err)
            })
        consoleLog.send('Download image to temp/: Success')
        return res_img
    } catch (err) {
        consoleLog.error(err)
    }
}

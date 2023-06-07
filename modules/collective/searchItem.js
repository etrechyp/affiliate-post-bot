const axios = require('axios');
const consoleLog = require('../../utils/console-log');
const category = require('./categories')

const startTime = Date.now();
const timeLimit = 60000;

const searchOnCollective = async () => {
    try {
        let sort = ['Recency','Popular']
        let random = Math.floor(Math.random() * category.length)
        let random2 = Math.floor(Math.random() * sort.length)

        const { data } = await axios.get(`http://api.collectivevoice.com/api/v2/lists/search?pid=${process.env.SHOPSTYLE_CLIENT_ID}&limit=1&cat=${category[random]}&sort=${sort[random2]}`);
        
        while (Date.now() - startTime < timeLimit) {

            if (
                data.favorites?.[0]?.product?.currency !== 'USD' ||
                data.favorites?.[0]?.product?.discount < 60 ||
                data.favorites?.[0]?.product?.price > 70 ||
                !data.favorites
            ) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        consoleLog.info('trying again');
                        resolve(searchOnCollective());
                    }, 200);
                });

            } else {
                let product = {
                    name : data.favorites[0].product.brandedName,
                    currency : data.favorites[0].product.currency,
                    price : data.favorites[0].product.price,
                    current_price : data.favorites[0].product.salePrice,
                    discount_percentage : data.favorites[0].product.discount,
                    image :data.favorites[0].product.image.sizes.Best.url,
                    url : data.favorites[0].product.clickUrl,
                    customData : {
                        productId : data.favorites[0].product.id,
                        inStock : data.favorites[0].product.inStock,
                        retailer: data.favorites[0].product.retailer.name,
                        categoryName : data.favorites[0].product.primaryCategoryUrlId,
                        categoryId: data.favorites[0].product.primaryCategoryId,
                        seeMoreLabel: data.favorites[0].product.seeMoreLabel,
                    }
                }

                consoleLog.info('Product found');
                return product
            }
        }

        if (Date.now() - startTime >= timeLimit) {
            consoleLog.wait('Time limit exceeded, trying in next cron job');
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = searchOnCollective;
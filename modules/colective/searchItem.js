const axios = require('axios');
const consoleLog = require('../../utils/console-log');
const category = require('./categories')

const searchOnCollective = async () => {
    try {
        let random = Math.floor(Math.random() * category.length)
        let random2 = Math.floor(Math.random() * 2)
        let sort = ['Recency','Popular','PriceLoHi']

        const { data } = await axios.get(`http://api.collectivevoice.com/api/v2/lists/search?pid=${process.env.SHOPSTYLE_CLIENT_ID}&fl=p10&fl=p20&d30&d50&limit=1&cat=${category[random]}&sort=${sort[random2]}`);
        //TODO: review why sometimes the api doesn't return the product with the query params
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

        console.log(product)
        return product

    } catch (err) {
        consoleLog.error(err.message);
    }
}

module.exports = searchOnCollective;
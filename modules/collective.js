const axios = require('axios');
const consoleLog = require('../utils/console-log');
const keyword = ['dress', 'boots', 'toys', 'kitchen', 'apparel', 'snacks', 'school supplies']
let random = Math.floor(Math.random() * keyword.length);


const searchOnCollective = async () => {
    let product = null;

    while (!product || (product.discount_percentage <= 30 && product.customData.inStock == true && product.current_price >= 30) || product.current_price == undefined) {
        try {
            const response = await axios.get(`http://api.collectivevoice.com/api/v2/lists/search?pid=${process.env.SHOPSTYLE_CLIENT_ID}&limit=50&offset=0&sort=popular&fts=${keyword[random]}&include=products`);

            let rand = Math.floor(Math.random() * response.data.favorites.length);

            product = {
            name : response.data.favorites[rand].product.brandedName,
            currency : response.data.favorites[rand].product.currency,
            price : response.data.favorites[rand].product.price,
            current_price : response.data.favorites[rand].product.salePrice,
            discount_percentage : response.data.favorites[rand].product.discount,
            image : response.data.favorites[rand].product.image.sizes.Best.url,
            url : response.data.favorites[rand].product.clickUrl,
            customData : {
                productId : response.data.favorites[rand].product.id,
                inStock : response.data.favorites[rand].product.inStock,
                retailer: response.data.favorites[rand].product.retailer.name,
                categoryName : response.data.favorites[rand].product.primaryCategoryUrlId,
                categoryId: response.data.favorites[rand].product.primaryCategoryId,
                seeMoreLabel: response.data.favorites[rand].product.seeMoreLabel,
            }
            }
    
            if (!product || (product.discount_percentage <= 30 && product.customData.inStock == true && product.current_price >= 30) || product.current_price == undefined) {
            await new Promise(resolve => setTimeout(resolve, 200));
            } else {
            return product;
            }
        } catch (err) {
            consoleLog.error(err.response.data);
        }
    }
}

module.exports = searchOnCollective;
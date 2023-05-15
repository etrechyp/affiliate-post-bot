const axios = require('axios');
const consoleLog = require('./../utils/console-log');

const catalogId = [
    9671, 9672, 9674, 9742, 9743, 9744,
    9746, 9748, 9749, 9750, 9752, 9752,
    9753, 9754, 9756, 9758, 9760, 9761,
    9763, 9766, 9767, 9768, 9769, 9770,
    9775, 9780, 9783, 9784, 9786, 9788
];

searchOnWalmart = async () => {
    let rnd = Math.floor(Math.random() * catalogId.length);
    let config = {
        headers: { 'Authorization': `Basic ${Buffer.from(`${process.env.IMPACT_CLIENT_ID}:${process.env.IMPACT_CLIENT_SECRET}`).toString('base64')}` },
        params: { Query: "CurrentPrice <= 20 AND DiscountPercentage >= 30 AND StockAvailability='InStock'" }
    };
    try {
        const response = await axios.get(`https://api.impact.com/Mediapartners/${process.env.IMPACT_CLIENT_ID}/Catalogs/${catalogId[rnd]}/Items?IrVersion=12&PageSize=1000`, config);
        let random = Math.floor(Math.random() * response.data.Items.length)
        let product = {
            name: response.data.Items[random]?.Name,
            currency: response.data.Items[random]?.Currency,
            price: response.data.Items[random]?.OriginalPrice,
            current_price: response.data.Items[random]?.CurrentPrice,
            discount_percentage: response.data.Items[random]?.DiscountPercentage,
            image: response.data.Items[random]?.ImageUrl,
            url: response.data.Items[random]?.Url,
            customData: {
                productId: response.data.Items[random]?.Id,
                catalogId: response.data.Items[random]?.CatalogId,
                catalogItemId: response.data.Items[random]?.CatalogItemId,
                campaignId: response.data.Items[random]?.CampaignId,
                campaign: response.data.Items[random]?.CampaignName,
            }
        };

        if (product && (product.price <= 30 && product.discount_percentage >= 30)) {
            return product
        }

        consoleLog.info('searching ...')
        searchOnWalmart();
    } catch (error) {
        consoleLog.error(error)
    }
}

module.exports = searchOnWalmart;

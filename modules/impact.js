const axios = require('axios');

const catalogId = [4657, 8042]

searchOnImpact = async () => {
    let rnd = Math.floor(Math.random() * catalogId.length);
    let config = {
        headers: { 'Authorization': `Basic ${Buffer.from(`${process.env.IMPACT_CLIENT_ID}:${process.env.IMPACT_CLIENT_SECRET}`).toString('base64')}` },
        params: { Query: "CurrentPrice < 30 AND DiscountPercentage > 59 AND StockAvailability='InStock'" }
    };
    try {
        const response = await axios.get(`https://api.impact.com/Mediapartners/${process.env.IMPACT_CLIENT_ID}/Catalogs/${catalogId[rnd]}/Items?IrVersion=12&PageSize=1000`, config);
        let random = Math.floor(Math.random() * response.data.Items.length)
        let product = {
            name: response.data.Items[random].Name,
            currency: response.data.Items[random].Currency,
            price: response.data.Items[random].OriginalPrice,
            current_price: response.data.Items[random].CurrentPrice,
            discount_percentage: response.data.Items[random].DiscountPercentage,
            image: response.data.Items[random].ImageUrl,
            url: response.data.Items[random].Url,
            customData: {
                productId: response.data.Items[random].Id,
                catalogId: response.data.Items[random].CatalogId,
                catalogItemId: response.data.Items[random].CatalogItemId,
                campaignId: response.data.Items[random].CampaignId,
                campaign: response.data.Items[random].CampaignName,
            }
        };
        // console.log(product)
        if (product.name) {
            return product
        }

    } catch (err) { 
        console.log(err);
    }
}

module.exports = searchOnImpact;
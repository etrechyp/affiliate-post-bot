const { send, error } = require("../../utils/console-log");
const ProductAdvertisingAPIv1 = require("./src/index");
const defaultClient = ProductAdvertisingAPIv1.ApiClient.instance;

defaultClient.accessKey = process.env.ACCESS_KEY;
defaultClient.secretKey = process.env.SECRET_KEY;
defaultClient.host = "webservices.amazon.com";
defaultClient.region = "us-east-1";

const api = new ProductAdvertisingAPIv1.DefaultApi();
const searchItemsRequest = new ProductAdvertisingAPIv1.SearchItemsRequest();

searchOnAmazon = (itemCount, Keywords) => {
    for (let i = 0; i <Keywords.length; i++) {
        searchItemsRequest["Keywords"] = Keywords[i];
        searchItemsRequest["PartnerTag"] = process.env.PARTNER_TAG;
        searchItemsRequest["PartnerType"] = "Associates";
        searchItemsRequest["ItemCount"] = 10;
        searchItemsRequest["ItemPage"] = 3;
        searchItemsRequest["MinSavingPercent"] = 60;
        searchItemsRequest["MaxPrice"] = 50000;
        searchItemsRequest["SalesRank"] = 50;
        searchItemsRequest["SortBy"] = "NewestArrivals"; // NewestArrivals, Featured, Price, Price - High to Low, Price + Low to High, Relevance, Review Rank, Sales Rank, Title
        searchItemsRequest["Resources"] = [
            "Images.Primary.Medium",
            "ItemInfo.Title",
            "Offers.Listings.Price",
        ];

    onSuccess = (data) => {
        send("API called successfully");
        let searchItemsResponse = ProductAdvertisingAPIv1.SearchItemsResponse.constructFromObject(data);
        let items = [];
        for (let j = 0; j < searchItemsResponse["SearchResult"]["Items"].length; j++) {
                let item_0 = searchItemsResponse["SearchResult"]["Items"][j];
                if (item_0 !== undefined) {

                    items.push({
                        asin: item_0["ASIN"],
                        url: item_0["DetailPageURL"],
                        title: item_0["ItemInfo"]["Title"]["DisplayValue"],
                        image: item_0["Images"]["Primary"]["Medium"]["URL"],
                        price : item_0["Offers"]["Listings"][0]["Price"]["DisplayAmount"],
                        marketplace: 'https://www.amazon.com/',                 
                        date: new Date()
                    })
                }
        }        

        if (searchItemsResponse["Errors"] !== undefined) {
            console.log("Errors:");
            error(
            "Complete Error Response: " +
                JSON.stringify(searchItemsResponse["Errors"], null, 1)
            );
            console.log("Printing 1st Error:");
            let error_0 = searchItemsResponse["Errors"][0];
            console.log("Error Code: " + error_0["Code"]);
            console.log("Error Message: " + error_0["Message"]);
        }

        console.log({
            itemsFind : searchItemsResponse["SearchResult"]["TotalResultCount"],
            itemsPage : `${searchItemsRequest.ItemPage} of ${Math.floor(searchItemsResponse["SearchResult"]["TotalResultCount"] / 10)}`,
            items
        });

        return ({
            count : items.length,
            items
        });
    };

    onError = (err) => {
        error("Error calling PA-API 5.0!");
        error("Printing Full Error Object:\n" + JSON.stringify(err, null, 1));
        error("Status Code: " + err["status"]);
        if (
            err["response"] !== undefined &&
            err["response"]["text"] !== undefined
        ) {
            error(
            "Error Object: " + JSON.stringify(err["response"]["text"], null, 1)
            );
        }
    };

    api.searchItems(searchItemsRequest).then(
        (data) => {
            onSuccess(data);
        },
            (err) => onError(err)
        );
    }
};

module.exports = searchOnAmazon;

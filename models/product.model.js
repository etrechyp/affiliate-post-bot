const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    aff_link: {
        type: String,
        required: true
    }
    
},
{
    timestamps: true
});

module.exports = Product = mongoose.model('product', ProductSchema);
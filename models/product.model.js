const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    asin: {
        type: String,
        required: true
    },
    published: {
        type: Boolean,
        default: false,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
    
},
{
    timestamps: true
});

module.exports = Product = mongoose.model('product', ProductSchema);
const mongoose = require('mongoose');

const AccessorySchema = new mongoose.Schema({
    name: String,
    cate_id: String,
    brand_id: String,
    promotions: [String],
    quantity: Number,
    price: String,
    salePrice: String,
    origin: String,
    description: String,
    descriptionImages: [String]
})
const Accessory = mongoose.model('Accessory', AccessorySchema, 'Accessorys');

module.exports = Accessory;
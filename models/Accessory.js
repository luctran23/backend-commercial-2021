const mongoose = require('mongoose');

const AccessorySchema = new mongoose.Schema({
    name: String,
    cate_id: String,
    cate_name: String,
    brand_id: String,
    quantity: Number,
    quantityInCart: Number,
    inputPrice: String,
    price: String,
    salePrice: String,
    origin: String,
    description: String,
    descriptionImages: [String]
})
const Accessory = mongoose.model('Accessory', AccessorySchema, 'Accessorys');

module.exports = Accessory;
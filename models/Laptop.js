const mongoose = require('mongoose');

const LaptopSchema = new mongoose.Schema({
    name: String,
    cate_id: String,
    cate_name: String,
    brand_id: String,
    cpu: String,
    inputPrice: String,
    price: String,
    salePrice: String,
    quantity: Number,
    quantityInCart: Number,
    ram: String,
    screen: String,
    graphic: String,
    hardDrive: String,
    weight: String,
    dimensions: String,
    origin: String,
    launched: String,
    description: String,
    descriptionImages: [String]
})
const Laptop = mongoose.model('Laptop', LaptopSchema, 'Laptops');

module.exports = Laptop;
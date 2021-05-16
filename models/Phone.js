const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
    name: String,
    cate_id: String,
    cate_name: String,
    brand_id: String,
    inputPrice: String,
    price: String,
    salePrice: String,
    quantity: Number,
    quantityInCart: Number,
    screen: String,
    camera: String,
    selfieCamera: String,
    ram: String,
    capacity: String,
    cpu: String,
    gpu: String,
    power: String,
    sim: String,
    system: String,
    origin: String,
    launched: String,
    description: String,
    descriptionImages: [String]
})
const Phone = mongoose.model('Phone', PhoneSchema, 'Phones');

module.exports = Phone;
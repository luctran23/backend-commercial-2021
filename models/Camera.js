const mongoose = require('mongoose');

const CameraSchema = new mongoose.Schema({
    name: String,
    cate_id: String,
    brand_id: String,
    quantity: Number,
    price: String,
    salePrice: String,
    origin: String,
    description: String,
    descriptionImages: [String]
})
const Camera = mongoose.model('Camera', CameraSchema, 'Cameras');

module.exports = Camera;
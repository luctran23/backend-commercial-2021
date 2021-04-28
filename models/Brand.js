const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    name: String,
    cate_id: String,
    cate_name: String
}, { versionKey: false })
const Brand = mongoose.model('Brand', BrandSchema, 'Brands');

module.exports = Brand;
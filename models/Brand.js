const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    name: String,
    cate_id: String
})
const Brand = mongoose.model('Brand', BrandSchema, 'Brands');

module.exports = Brand;
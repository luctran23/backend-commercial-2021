const mongoose = require('mongoose');

const PromotionSchema = new mongoose.Schema({
    name: String,
    prod_id: String
})
const Promotion = mongoose.model('Promotion', PromotionSchema, 'Promotions');

module.exports = Promotion;
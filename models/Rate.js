const mongoose = require('mongoose');

const RateSchema = new mongoose.Schema({
    prod_id: String,
    ratedValue: String,
    content: String
})
const Rate = mongoose.model('Rate', RateSchema, 'Rates');

module.exports = Rate;
const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
    date: String,
    user_id: String,
    products: [String]
})
const Bill = mongoose.model('Bill', BillSchema, 'Bills');

module.exports = Bill;
const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    user_id: String,
    user_name: String,
    prod_Ids: [String]
}, { versionKey: false })
const Bill = mongoose.model('Bill', BillSchema, 'Bills');

module.exports = Bill;
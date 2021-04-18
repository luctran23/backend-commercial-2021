const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    username: String,
    password: String
})
const Account = mongoose.model('Account', AccountSchema, 'Accounts');

module.exports = Account;
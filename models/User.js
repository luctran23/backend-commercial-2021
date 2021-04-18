const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phone: String
})
const User = mongoose.model('User', UserSchema, 'Users');

module.exports = User;
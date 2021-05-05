const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    prod_id: String,
    content: String,
    parent_id: String,
    time: Date,
    user_name: String,
    isAdmin: String
})
const Comment = mongoose.model('Comment', CommentSchema, 'Comments');

module.exports = Comment;
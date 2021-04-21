const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    prod_id: String,
    content: String,
    parent_id: String,
    time: {
        type: Date,
        default: Date.now
    }
})
const Comment = mongoose.model('Comment', CommentSchema, 'Comments');

module.exports = Comment;
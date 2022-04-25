const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: String,
    content: String,
    time: Date,
    image: [String]
})
const News = mongoose.model('News', NewsSchema, 'Newss');

module.exports = News;
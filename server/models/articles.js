const mongoose = require('mongoose');
const art = new mongoose.Schema({
    title: String,
    content: String,
    published_date: Date,
    author: {type: String, ref: 'Author'}
})


module.exports = art;
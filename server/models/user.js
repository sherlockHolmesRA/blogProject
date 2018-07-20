const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {type: String, unique: true, required: true},
    password: String,
    username: {type: String, unique: true, required: true},
    userarticles: [{type: String, ref: 'articleId'}]
})



module.exports = user;
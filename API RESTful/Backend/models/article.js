'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const squeme = Schema({
    title: String,
    content: String,
    date: {type:Date, default: Date.now},
    img: String,
})
module.exports = mongoose.model('Articlee', squeme);

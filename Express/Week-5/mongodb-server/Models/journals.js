const mongoose = require("mongoose");

const Journal = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    pages: Number
}, {timestamps: true});

const journalModel = mongoose.model('journals', Journal);

module.exports = journalModel;
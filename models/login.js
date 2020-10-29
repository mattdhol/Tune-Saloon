const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Guitar = require('../models/guitar').schema
const Practice = require('../models/practice').schema


var loginSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    guitar: [Guitar],
    practice: [Practice],
  }, {
    timestamps: true
},
)

module.exports = mongoose.model('login', loginSchema)
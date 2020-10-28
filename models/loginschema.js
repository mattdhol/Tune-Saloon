const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var loginSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    guitar:[guitarSchema],
    practice:[practiceSchema],
  }, {
    timestamps: true
},



module.exports = mongoose.model('login', loginSchema)
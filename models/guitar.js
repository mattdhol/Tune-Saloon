const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
note: {
    type: String,
  },
mastered: {
    type: Boolean, 
    default: 'False',
  },
time: { 
    type : Date, default: Date.now 
    }
})

const guitarSchema = new Schema({
    songTitle: {
        type: String,
        required: true
    },
    songArtist: {
        type: String,
        required: true
    },
    appeal: {
        type: String,
        enum: ['1', '2', '3', '4', '5'],
        default: '1',
    },
    difficulty: {
        type: String,
        enum: ['1', '2', '3', '4', '5'],
        default: '1',
    },
    videoLink: {
        type: String,
    },
    lesson:[lessonSchema]
});

module.exports = mongoose.model('Guitar', guitarSchema)
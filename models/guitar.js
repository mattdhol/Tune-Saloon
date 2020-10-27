const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
note: {
    type: String,
  },
mastered: {
    type: String, 
    enum: ['False', 'True'],
    default: 'False',
  }, 
  currentSong: {
    type: String,
    enum: ['False', 'True'],
    default: 'False',
    },
}, 
  {
timestamps: true 
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
    guitarTab: {
        type: String,
    },
    lesson:[lessonSchema]
});

module.exports = mongoose.model('Guitar', guitarSchema)
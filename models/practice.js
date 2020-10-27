const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transitionsSchema = new Schema({
    numberOfTransitions: {
        type: Number,
      },
      note: {
        type: String,
      },
    }, 
      {
    timestamps: true 
  })

const practiceSchema = new Schema({
    primaryChord: {
        type: String,
        enum: ['A', 'Amaj7', 'A7', 'Am', 'Am7', 'B', 'Bmaj7', 'B7', 'Bm', 'Bm7', 'C', 'Cmaj7', 
        'C7', 'Cm', 'Cm7','D', 'Dmaj7', 'D7', 'Dm', 'Dm7', 'E', 'Emaj7', 'E7', 'Em', 'Em7', 
        'F', 'Fmaj7', 'F7', 'Fm', 'Fm7', 'G', 'Gmaj7', 'G7', 'Gm', 'Gm7']
    },
    secondaryChord: {
        type: String,
        enum: ['A', 'Amaj7', 'A7', 'Am', 'Am7', 'B', 'Bmaj7', 'B7', 'Bm', 'Bm7', 'C', 'Cmaj7', 
        'C7', 'Cm', 'Cm7','D', 'Dmaj7', 'D7', 'Dm', 'Dm7', 'E', 'Emaj7', 'E7', 'Em', 'Em7', 
        'F', 'Fmaj7', 'F7', 'Fm', 'Fm7', 'G', 'Gmaj7', 'G7', 'Gm', 'Gm7']
    },
        transitions:[transitionsSchema]
})


module.exports = mongoose.model('Practice', practiceSchema)
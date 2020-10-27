const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/guitar', {

  // mongodb+srv://Matt:@DutchBoi1@matt.jkqei.mongodb.net/Matt?retryWrites=true&w=majority
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
  });
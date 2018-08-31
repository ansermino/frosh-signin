var mongoose = require('mongoose')

const MONGODB = 'mongodb://uoftcsfrosh:GOcyiegbounatU7@ds018258.mlab.com:18258/uoftcsfrosh';
//const MONGODB = 'mongodb://frosh:password1@ds133252.mlab.com:33252/frosh';

const connect = () => {
  mongoose.connect(MONGODB)

  // Logging methods
  mongoose.connection.on('connected', function() {
      console.log('Mongoose connected to ' + MONGODB);
  });

  mongoose.connection.on('error', function(error) {
      console.log('Mongoose connection error: ' + error);
  });

  mongoose.connection.on('disconnected', function() {
      console.log('Mongoose disconnected.');
  });
}

const studentSchema = new mongoose.Schema({
    type: {type: String},
    name: {type: String},
    email: {type: String},
    groupName: {type: String},
    groupNumber: {type: String},
    checkedIn: {type: Boolean, default: false}
})

var Student = mongoose.model('test', studentSchema, 'test');

module.exports = { connect, Student }

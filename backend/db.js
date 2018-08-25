var mongoose = require('mongoose')

const MONGODB = 'mongodb://frosh:password1@ds133252.mlab.com:33252/frosh';

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
    shirtSize: {type: String, default: "TBD"},
    checkedIn: {type: Boolean, default: false}
})

var Student = mongoose.model('Student', studentSchema);

module.exports = { connect, Student }

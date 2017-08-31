var mongoose = require('mongoose');
var express = require('express');

const MONGODB = 'mongodb://localhost/csfrosh';

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
const studentSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String}
})

var db = mongoose.connect(MONGODB);
var Student = db.model('Student', studentSchema);
var app = express();

app.listen(3000, function() {
    console.log("Listening on port 3000.")
});

app.param('email', (req, res, next, email) => {
    req.email = email
    next()
});

app.get('/:email', (req, res) => {
    console.log("Looking up email: " + req.email);
    Student.findOne({email: req.email}, (err, student) => {
        if(err){
            console.log(err)
        }
        else if(!student){
            res.sendStatus(404);
        }
        else{
            res.send({student});
        }
    })
})

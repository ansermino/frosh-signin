var mongoose = require('mongoose');
var express = require('express');
var path = require('path');

const MONGODB = 'mongodb://frosh:frosh@ds127564.mlab.com:27564/frosh';

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
    email: {type: String},
    groupName: {type: String},
    groupNumber: {type: String},
    shirtSize: {type: String, default: "TBD"},
    checkedIn: {type: Boolean, default: false}
})

var db = mongoose.connect(MONGODB);
var Student = db.model('Student', studentSchema);
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.param('email', (req, res, next, email) => {
    req.email = email
    next()
});

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/search/:email', (req, res) => {
    console.log("Looking up email: " + req.email);
    Student.findOne({email: req.email.toLowerCase()}, (err, student) => {
        if(err){
            console.log(err);
            res.status(404).send({name: null});
        }
        else if(!student){
            res.status(404).send({name: null});
        }
        else{
          if(student.checkedIn){
            res.status(401).send({name: null})
          }
          else{
            student.checkedIn = true;
            student.save((err) => console.log(err))
            res.setHeader('Content-Type', 'application/json');
            res.send({student});
          }
        }
    })
    //res.setHeader('Content-Type', 'application/json');
    //res.send({name:"David Ansermino", shirtSize:"m", teamName: "Java"})
    //res.status(404).send({name: null});
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);

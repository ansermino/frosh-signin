var db = require('./db.js');
var express = require('express');
var path = require('path');
var app = express();

db.connect()

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
//app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/search/:email', (req, res) => {
    db.Student.findOne({email: req.email.toLowerCase()}, (err, student) => {
        if(err){
            console.log(err);
            res.status(404).send({name: null});
        }
        else if(!student){
            console.log('No results found.')
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
    //res.status(401).send({name: null});
})

app.get('*', (req, res) => {
  //res.sendFile(path.join(__dirname+'/../client/public/index.html'));
  res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);

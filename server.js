// Imports
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// App Settings
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Mongoose
mongoose.connect('mongodb://localhost/mongoose_dashboard');
var TurtleSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: [4, "Name needs to be longer"]},
    speed: {type: Number, required: true, min: [1, "Even the slowest turtle can move."]},
    catchphrase: {type: String, required: true, min: [8, "Catchphrase needs to be longer"], max: [30, "Catchphrase is too long"]}
});
mongoose.model('Turtle', TurtleSchema);
var Turtle = mongoose.model('Turtle');

// Routing

app.get ('/', function(req, res){
    res.send("I'm alive");
});

app.listen(8000, function(){
    console.log("Running on port 8000")
});
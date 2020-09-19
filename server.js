//Importing the Express framework
const express = require("express");

// Importing animal
const mongoose = require("mongoose");

//Assigning Express to an object so we can use the functions
const app = express();

//Setting the Express app to use the static folder
app.use(express.static(__dirname + "/client/static"));

//Setting the Express app to accept POST requests
app.use(express.urlencoded({extended: true}));

//Setting the Express app to use the EJS view enging and setting the directory for the views
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');

// Pulling the Models and Schemas 
require('./server/config/mongoose.js')

// Pulling the routes from the routes module
require('./server/config/routes.js')(app)

//This sets the Express app to listen to port 8000 on our localhost
app.listen(8080, () => console.log("listening on 8080"));


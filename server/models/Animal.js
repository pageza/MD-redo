const mongoose = require('mongoose')

// Creating Schema and model 
const AnimalSchema = new mongoose.Schema({
    type: String,
    name: String,
    age: Number
   })
// create an object that contains methods for mongoose to interface with MongoDB
const Animal = mongoose.model('Animal', AnimalSchema);
   
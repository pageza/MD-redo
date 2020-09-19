const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')

//Connecting to the mongodb server
mongoose.connect('mongodb://localhost/MD-redo', {useNewUrlParser: true, useUnifiedTopology:true});

const models_path = path.join(__dirname, './../models')
fs.readdirSync(models_path).forEach((file) => {
    if (file.indexOf('.js') >= 0) {
        require(models_path+'/'+file)
    }
})
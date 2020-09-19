
const mongoose = require('mongoose');
const Animals = require("../controllers/Animals");

    Animal = mongoose.model('Animal')


module.exports = (app) => {
    //These are the routes

// This is the route for the intial app load
app.get('/', (req, res) => {
    Animals.show(req,res)
  });
  
  app.get('/animal/new', (req, res) => {
    res.render('addAnimal');
  });
  
  app.post('/animal/new', (req, res) => {
    Animals.create(req,res)
  });
  
  app.get('/animal/:id', (req, res) => {
    Animals.findOne(req,res)
  });
  
  app.get('/animal/:id/edit', (req, res) => {
    Animal.findOne({_id: req.params.id})
      .then(animal => res.render('editAnimal', {animal:animal}))
      .catch(err =>  res.json(err))
  });
  
  app.post('/animal/:id/edit', (req, res) => {
    Animals.editOne(req,res)
  });
  
  app.post('/animal/:id/destroy', (req, res) => {
    Animals.destroyOne(req,res)
  });
}
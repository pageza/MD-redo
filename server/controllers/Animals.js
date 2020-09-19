const mongoose = require('mongoose')
const Animal = mongoose.model('Animal')

module.exports = {
    show: (req,res) => {
        Animal.find({})
            .then(animals => res.render('index', {animals:animals}))
            .catch(err =>  res.json(err))
    },
    create: (req,res) => {
        const animal = new Animal();
        animal.type = req.body.type;
        animal.name = req.body.name;
        animal.age = req.body.age;
        animal.save()
          .then(newAnimalData =>  res.redirect('/'))
          .catch(err => console.log(err))
        res.redirect('/');
    },
    findOne: (req,res) => {
        Animal.findOne({_id: req.params.id})
            .then(animal => res.render('animal', {animal:animal}))
            .catch(err =>  res.json(err))
    },
    editOne: (req,res) => {
        Animal.updateOne({_id:req.params.id},{
            type: req.body.type,
            name: req.body.name,
            age: req.body.age
          })
          .then( res.redirect('/'))
          .catch( res.json(err))  
    },
    destroyOne: (req,res) => {
        Animal.remove({_id: req.params.id})
            .then( res.redirect('/'))
            .catch(err =>  res.json(err))
    }
}
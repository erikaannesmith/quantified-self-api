pry = require('pryjs')

var Food = require('../models/food')

function index(req, res, next) {
  Food.all
    .then((foods) => {
      res.status(201).json(foods)
    })
}

function create(req, res, next) {
eval(pry.it)

  let name = req.body.name
  let calories = req.body.calories
  if(!name) {
    return res.status(422).send({error: "Both name and calories are required fields."})
  }

  database.raw('INSERT INTO foods (name, calories) VALUES (?,?) RETURNING *',
  [name, calories])
  .then((food) => {
    res.status(201).json(food)
  })
}



module.exports = {index}

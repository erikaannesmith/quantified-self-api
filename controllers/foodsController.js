var Food = require('../models/food')

function index(req, res, next) {
  Food.all
    .then((foods) => {
      res.status(201).json(foods)
    })
}

function create(req, res, next) {
  let name = req.body.name
  let calories = req.body.calories
  if(!name || !calories) {
    return res.status(422).send({error: "Both name and calories are required fields."})
  }
  Food.new(name, calories)
  .then((food) => {
    res.status(201).json(food)
  })
}

function show(req, res, next) {
  let id = req.params.id

  Food.find(id)
  .then(food => {
    if (!food) {
      return res.sendStatus(404)
    } else {
      res.json(food)
    }
  })
}

function update(req, res, next) {
  let id = req.params.id
  let name = req.body.name
  let calories = req.body.calories  
  if (!name || !calories) {
    return res.status(400).send({ error: "Both name and calories are required fields." })
  }

  Food.edit(id, name, calories)
  .then(food => {
    if (!food) {
      return res.sendStatus(400)
    } else {
      res.json(food)
    }
  })
}

module.exports = {index, create, show, update}

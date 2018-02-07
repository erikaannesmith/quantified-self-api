var Food = require('../models/food')

function index(req, res, next) {
  Food.all
    .then((foods) => {
      res.status(201).json(foods)
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

module.exports = {index, show}
var Meal = require('../models/meal')

function index(req, res, next) {
  Meal.all
  .then((meals) => {
    var pry = require('pryjs'); eval(pry.it)
    res.status(201).json(meals)
  })
}

module.exports = {index}
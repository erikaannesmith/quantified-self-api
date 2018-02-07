var Meal = require('../models/meal')

function index(req, res, next) {
  Meal.all
  .then((meals) => {
    
    res.status(201).json(meals)
  })
}

module.exports = {index}
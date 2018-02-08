var Meal = require('../models/meal')

function show(req, res, next) {
  let mealId = req.params.mealId

  Meal.find(mealId)
  .then(foods => {
    if (!foods) {
      return res.sendStatus(404)
    } else {
      res.json(foods)
    }
  })
}

function create(req, res, next) {
  let mealId = req.params.mealId
  let foodId = req.params.foodId

  Meal.new(mealId, foodId)
  .then(meal => {
    if (!meal) {
      return res.sendStatus(404)
    } else {
      res.json(meal)

    }
  })
}
module.exports = {show, create}

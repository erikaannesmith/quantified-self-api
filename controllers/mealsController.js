var MealFood = require('../models/mealFood')
var Meal = require('../models/meal')


function index(req, res, next) {
  Meal.all
  .then((meals) => {
    res.status(201).json(meals)
  })
}

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

function destroy(req, res, next) {
  let mealId = req.params.mealId
  let foodId = req.params.foodId

  Meal.deleteMealFood(mealId, foodId)
  .then(mealFood => {
    if (!mealFood) {
      return res.sendStatus(404)
    } else {
      return res.sendStatus(200)
    }
  })
}
module.exports = {show, create, destroy, index}

var MealFood = require('../models/mealFood')
var Meal = require('../models/meal')


function create(req, res, next) {
  res.send('meals #' + req.params.id + `foods #`+ req.params.number)
  let meal = req.params.id
  let food = req.params.number
  // if(!meal || !food) {
  //   return res.status(422).send({error: "Both name and calories are required fields."})
  // }
  MealFood.new(meal, food)
  .then((mealfood) => {
    res.status(201).json(mealfood)
  })
}

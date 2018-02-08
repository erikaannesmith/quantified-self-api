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
module.exports = {show}

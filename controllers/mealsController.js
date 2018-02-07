var Meal = require('../models/meal')

function show(req, res, next) {
  let id = req.params.meal_id

  Meal.find(id)
  .then(meal => {
    if (!meal) {
      return res.sendStatus(404)
    } else {
      res.json(meal)
    }
  })
}
module.exports = {show}

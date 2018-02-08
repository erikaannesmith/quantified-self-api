const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)


var MealFood = {
  new: function(meal, food) {
    return database.raw('INSERT INTO mealfoods (meal, food) VALUES (?,?) RETURNING *',
    [meal, food])

  .then(function(mealfood) {
    return food.rows
  })
  },


}

}

module.exports = MealFood;

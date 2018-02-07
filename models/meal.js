const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var Meal = {
  all: database.raw('SELECT meals.id, meals.name, json_agg(foods.*) AS foods FROM meals JOIN foodMeals ON meals.id = foodMeals.meal JOIN foods ON foodMeals.food = foods.id GROUP BY meals.id')
  .then(meals => {
    return meals.rows
  })
}

module.exports = Meal;

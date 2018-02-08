const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var Meal = {
  all:
  database.raw('SELECT * FROM meals;')
  .then((meals) => {
    Promise.all(
    meals.rows.map(function(meal) {
      let id = meal.id
      return database.raw('SELECT meals.id, meals.name, foods.* from meals join foodMeals ON meals.id = foodMeals.meal join foods on foods.id = foodMeals.food WHERE meals.id = ?;', [id])
        .then(foods => {
          let mealWithFoods = {id: meal.id, name: meal.name, foods: foods.rows}
          return mealWithFoods
        })
      })
    )
    .then(x => {
      return x
    }) 
  })
}

module.exports = Meal;

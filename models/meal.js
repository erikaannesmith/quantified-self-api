const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)


var Meal = {
  find: function(mealId) {
    return database.raw(`SELECT foods.id, foods.name, foods.calories FROM foods
      INNER JOIN foodMeals on foods.id=foodmeals.food
      WHERE foodMeals.meal=?`, [mealId])
      .then(function(foods) {
        return foods.rows
      })

    },

    new: function(mealId, foodId){
      return database.raw('INSERT INTO foodMeals (meal, food) VALUES (?,?) RETURNING *',
      [mealId, foodId])

      .then(function(meal) {
        return meal.rows[0]
      })
    },

  deleteMealFood: function(mealId, foodId){
    return database.raw('DELETE FROM foodMeals WHERE foodmeals.meal = ? AND foodmeals.food =?' [mealId, foodId])
    .then(function(mealFood){
    return mealFood
  })
  }
}

module.exports = Meal;

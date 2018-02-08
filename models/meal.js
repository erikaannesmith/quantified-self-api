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


}
}

module.exports = Meal;

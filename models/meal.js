const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)


var Meal = {
find: function(id) {
 return database.raw(`SELECT meals.name, meals.id, foods.name, foods.calories FROM meals
                      INNER JOIN foodMeals on meals.id=foodmeals.meal
                      INNER JOIN foods on foods.id=foodmeals.food WHERE meals.id=?`, [id])
.then(function(meal) {
    return meal.rows[0]
})
}


}

module.exports = Meal;

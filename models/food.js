const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var Food = {
  all: database.raw('SELECT * FROM foods')
  .then(foods => {
    return foods.rows
  }),

  new: function(name, calories) {
    return database.raw('INSERT INTO foods (name, calories) VALUES (?,?) RETURNING *',
    [name, calories])

  .then(function(food) {
    return food.rows[0]
  })
  },

  find: function(id) {
    return database.raw('SELECT * FROM foods WHERE id = ?', [id])
  .then(function(food) {
      return food.rows[0]
  })
  }
}

module.exports = Food;

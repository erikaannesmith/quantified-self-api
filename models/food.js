const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

var Food = {
  all: database.raw('SELECT * FROM foods')
  .then(foods => {
    return foods.rows
  })
}

module.exports = Food;
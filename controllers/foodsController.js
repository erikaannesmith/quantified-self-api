var Food = require('../models/food')

function index(req, res, next) {
  Food.all
    .then((foods) => {
      res.status(201).json(foods)
    })
}

module.exports = {index}
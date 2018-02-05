const express = require('express');
const router = express.Router();
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment]
const database = require('knex')(configuration)


router.get('/', function(req, res, next) {
  database.raw('SELECT * FROM foods')
  .then(foods => {
    res.status(201).json(foods.rows)
  });
});



module.exports = router;

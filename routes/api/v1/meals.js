const express = require('express');
const router = express.Router({mergeParams: true});
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment]
const database = require('knex')(configuration)
const mealsController = require('../../../controllers/mealsController')

// router.get('/', mealsController.index);
// router.get('/meals/:meal_id/foods/:food_id');
router.post('/:id', mealsController.create);




module.exports = router;

const express = require('express');
const router = express.Router({mergeParams: true});
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment]
const database = require('knex')(configuration)
const mealsController = require('../../../controllers/mealsController')
const foods = require('../../../models/food')


router.get('/', mealsController.index);
router.get('/:mealId/foods', mealsController.show);
router.post('/:mealId/foods/:foodId', mealsController.create);
router.delete('/:mealId/foods/:foodId', mealsController.destroy);




module.exports = router;

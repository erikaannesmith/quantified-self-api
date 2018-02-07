const express = require('express');
const router = express.Router();
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment]
const database = require('knex')(configuration)
const mealsController = require('../../../controllers/mealsController')

router.get('/', mealsController.index);
// router.post('/', mealsController.create);
// router.delete('/:id', mealsController.destroy);



module.exports = router;

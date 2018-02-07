const express = require('express');
const router = express.Router();
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../../knexfile')[environment]
const database = require('knex')(configuration)
const foodsController = require('../../../controllers/foodsController')

router.get('/', foodsController.index);
router.post('/', foodsController.create);
router.get('/:id', foodsController.show);
router.delete('/:id', foodsController.destroy);


module.exports = router;

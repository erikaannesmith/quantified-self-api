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

router.post('/', function(req, res) {
let name = req.body.name
let calories = req.body.calories

  database.raw('INSERT INTO foods (name, calories) VALUES (?,?) RETURNING *',
  [name, calories]
  ).then((food) => {res.status(201).json(food.rows)

  // postgres.client.query(sql, data, function(err, result) {
  //   if (err) {
  //     // We shield our clients from internal errors, but log them
  //     console.error(err);
  //     res.statusCode = 500;
  //     return res.json({
  //       errors: ['Failed to create food']
  //     });
  //   }
  //   var newFoodId = result.rows[0].id;
  //   var sql = 'SELECT * FROM foods WHERE id = ?';
  //   postgres.client.query(sql, [ newFoodId ], function(err, result) {
  //     if (err) {
  //       // We shield our clients from internal errors, but log them
  //       console.error(err);
  //       res.statusCode = 500;
  //       return res.json({
  //         errors: ['Could not retrieve food after create']
  //       });
  //     }
      // // The request created a new resource object
      // res.statusCode = 201;
      // // The result of CREATE should be the same as GET
      // res.json(result.rows[0]);
  });
});

// router.post('/', function(req, res, next) {
//
//   let food = req.body.food
//
//
//   if(!name) {
//     return res.status(422).send({error: "Both name and calories are required fields."})
//   }
//
//   database.raw('INSERT INTO foods(food) values(?) RETURNING *',
//   [food]
// ).then((food) => {
//   res.status(201).json(food.rows)
// });
// });


module.exports = router;

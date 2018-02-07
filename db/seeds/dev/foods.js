
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE foods RESTART IDENTITY')
  .then(function() {
    return Promise.all([
      knex.raw(
        'INSERT INTO foods (name, calories) VALUES (?, ?)',
        ["mashed potatoes", 500]
      ),
      knex.raw(
        'INSERT INTO foods (name, calories) VALUES (?, ?)',
        ["pizza", 750]
      ),  knex.raw(
        'INSERT INTO foods (name, calories) VALUES (?, ?)',
        ["waffle", 400]
      )

    ])
  })
}

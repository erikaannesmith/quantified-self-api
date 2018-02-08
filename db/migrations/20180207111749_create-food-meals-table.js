
exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE foodMeals(
    id SERIAL PRIMARY KEY NOT NULL,
    food INT,
    FOREIGN KEY(food) REFERENCES foods(id) ON UPDATE CASCADE ON DELETE CASCADE,
    meal INT,
    FOREIGN KEY(meal) REFERENCES meals(id) ON UPDATE CASCADE ON DELETE CASCADE
  )`
  return knex.raw(createQuery)

};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE foodMeals`
  return knex.raw(dropQuery)
};

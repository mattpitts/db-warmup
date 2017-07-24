
const cats = require('./seeds-data/cats')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE cats RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('cats').insert(cats);
    });
};

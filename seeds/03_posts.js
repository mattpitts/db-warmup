const posts = require('./seeds-data/posts')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE post RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('post').insert(posts);
    });
};

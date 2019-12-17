const bcrypt = require('bcryptjs');
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          password: bcrypt.hashSync('password123', 10),
          email: 'selena.gomez@sample.com'
        }
      ]);
    });
};

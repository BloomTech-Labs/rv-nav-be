exports.up = function (knex) {
  return knex.schema.createTable('users', users => {
    users.increments();

    users
      .string('email', 128)
      .notNullable()
      .unique();
    users.string('password', 128).notNullable();
    users.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};

exports.up = function(knex) {
  return knex.schema.table("users", tbl => {
    tbl.string("firstName");
    tbl.string("lastName");
    tbl.string("userName");
    tbl.integer("age");
    tbl.string("googleId").unique();
    tbl.string("googleEmail");
    tbl.string("facebookId").unique();
    tbl.string("facebookEmail");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};

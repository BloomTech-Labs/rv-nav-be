exports.up = function(knex) {
  return knex.schema.table("users", tbl => {
    tbl.string("firstName");
    tbl.string("lastName");
    tbl.string("userName");
    tbl.integer("age");
    tbl.string("googleId");
    tbl.string("googleEmail");
    tbl.string("facebookId");
    tbl.string("facebookEmail");
  });
};

exports.down = function(knex) {
  return knex.schema.table("users", tbl => {
    tbl.dropColumn("age");
    tbl.dropColumn("userName");
    tbl.dropColumn("lastName");
    tbl.dropColumn("firstName");
    tbl.dropColumn("googleId");
    tbl.dropColumn("googleEmail");
    tbl.dropColumn("facebookId");
    tbl.dropColumn("facebookEmail");
  });
};

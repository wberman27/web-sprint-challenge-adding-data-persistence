
exports.up = function(knex) {
  return knex.schema
    .createTable("projects")
    .createTable("resources")
    .createTable("tasks")
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists()
};

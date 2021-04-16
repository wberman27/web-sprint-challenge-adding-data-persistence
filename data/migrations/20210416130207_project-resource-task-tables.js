
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl =>{
        tbl.increments("project_id") //primary key, auto incrementing
        tbl.string("project_name", 128).notNullable() //required
        tbl.string("project_description", 128)
        tbl.boolean("project_completed").defaultTo(0) //default to false (0) if not provided
    })
    .createTable("resources", tbl =>{
        tbl.increments("resource_id")
        tbl.string("resource_name", 128).notNullable().unique() //required and must be unique
        tbl.string("resource_description", 128)
    })
    .createTable("tasks", tbl =>{
        tbl.increments("task_id")
        tbl.string("task_description", 128).notNullable()
        tbl.string("task_notes", 128)
        tbl.boolean("task_completed").defaultTo(0)
        //foreign key
        tbl.integer("project_id")
            .notNullable()
            .unsigned() //cannot be negative
            .references("project_id")
            .inTable("projects")
            .onDelete("RESTRICT") //safe delete restriction
    })
    //this table connects a resource and a project
    .createTable("project_resources", tbl =>{
        tbl.increments("project_resources_id")
        //foreign key
        tbl.integer("project_id")
            .notNullable()
            .unsigned()
            .references("project_id")
            .inTable("projects")
            .onDelete("RESTRICT")
        //foreign key
        tbl.integer("resource_id")
            .notNullable()
            .unsigned()
            .references("resource_id")
            .inTable("resources")
            .onDelete("RESTRICT")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};

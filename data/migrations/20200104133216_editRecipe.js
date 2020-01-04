
exports.up = function(knex) {
  return knex.schema.dropTableIfExists("recipes").createTable("recipes",tbl=>{
    tbl.increments();

    tbl.string("name",255)
      .notNullable();

    tbl.string("description",255)
        .notNullable();

    tbl.string("image_url", 255)
      .notNullable();

    tbl.string("meal_type", 255)
      .notNullable();

    tbl.integer("chef_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable('chefs')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  
};

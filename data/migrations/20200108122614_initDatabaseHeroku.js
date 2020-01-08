
exports.up = function(knex) {
    return knex.schema.dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("chefs")
    .createTable("chefs",tbl=>{
        tbl.increments();

        tbl.string("username", 255)
        .notNullable()
        .unique();

        tbl.string("password", 255)
        .notNullable();

        tbl.string("location", 255);

        tbl.string("email", 255);

        tbl.string("phone_number", 255);

    }).createTable("recipes", tbl=>{
        tbl.increments();

        tbl.string("name",255)
        .notNullable();

        tbl.string("description",255)
            .notNullable();

        tbl.string("image_url", 255)
            .notNullable();

        tbl.string("meal_type", 255)
            .notNullable();

        tbl.string("ingredients",2000)
            .notNullable();

        tbl.string("instructions",2000)
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

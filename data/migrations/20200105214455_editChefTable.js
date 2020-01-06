
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

        tbl.integer("chef_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable('chefs')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  
        
    }).createTable("ingredients",tbl=>{
        tbl.increments();
        
        tbl.string("name",255)
        .notNullable();
        
        tbl.string("quantity", 255)
        .notNullable();
    
        tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

    }).createTable("instructions",tbl=>{
    tbl.increments();
    
    tbl.string("instruction",255)
        .notNullable();
    
    tbl.integer("step_number")
        .notNullable();

    tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("chefs");
};

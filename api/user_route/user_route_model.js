const db = require('../../data/dbConfig');

module.exports = {
    getRecipes,
    findByName,
    createChef,
    //getInstructionsById,
    //getIngredientsById,
    findRecipe
};

function getRecipes(){
    return db.select("recipes.id","recipes.name","recipes.description","recipes.image_url","recipes.meal_type","recipes.ingredients","recipes.instructions","chefs.username as chef", "ches.location", "chefs.phone_number", "chefs.email")
        .from("recipes")
        .join("chefs","chefs.id","recipes.chef_id")
}

function findByName(username){
    return db('chefs')
        .select('*')
        .where('username', username)
        .first();
}

function createChef(chef){
    return db('chefs').insert({...chef}, "*");
}

function findRecipe(id){
    return db.select("recipes.id","recipes.name","recipes.description","recipes.image_url","recipes.meal_type","recipes.ingredients","recipes.instructions","chefs.username as chef", "chefs.location", "chefs.phone_number", "chefs.email")
        .from("recipes")
        .join("chefs","chefs.id","recipes.chef_id")
        .where("recipes.id",id)
        .first();
}

// function getInstructionsById(id){
//     return db("instructions")
//         .where("recipe_id",id);
// }

// function getIngredientsById(id){
//     return db("ingredients")
//         .where("recipe_id",id);
// }
const db = require('../../data/dbConfig');

module.exports = {
    getRecipes,
    findByName,
    createChef,
    getInstructionsById,
    getIngredientsById,
    findRecipe
};

function getRecipes(){
    return db("recipes");
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
    return db.select("recipes.id","recipes.name","recipes.description","recipes.image_url","recipes.meal_type","chefs.name")
        .from("recipes")
        .join("chefs","chefs.id","recipes.chef_id")
        .where("id",id);
}

function getInstructionsById(id){
    return db("instructions")
        .select("instruction","step_number")
        .where("recipe_id",id);
}

function getIngredientsById(id){
    return db("ingredients")
        .select("name","quantity")
        .where("recipe_id",id);
}
const db = require('../../data/dbConfig');

module.exports = {
    getChefRecipes,
    addRecipe,
    addInstructions,
    addIngredients
};

function getChefRecipes(id){
    return db("recipes")
        .where("chef_id",id);
}

function addRecipe(data){
    return db.insert({...data}).into("recipes");
}

function addInstructions(data){
    return db.insert({...data}).into("instructions");
}

function addIngredients(data){
    return db.insert({...data}).into("ingredients");
}
const db = require('../../data/dbConfig');

module.exports = {
    getChefRecipes,
    addRecipe,
    addInstructions,
    addIngredients,
    editIngredients,
    editInstructions,
    editRecipe,
    deleteIngredients,
    deleteRecipe,
    deleteInstructions
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

function editRecipe(data,id){
    return db("recipes").where("id",id).update(data);
}

function editIngredients(data,id){
    return db("ingredients").where("id",id).update(data);
}

function editInstructions(data,id){
    return db("instructions").where("id",id).update(data);
}

function deleteRecipe(id){
    return db("recipes").where("id", id).del();
}

function deleteIngredients(id){
    return db("recipes").where("id", id).del();
}

function deleteInstructions(id){
    return db("instructions").where("id", id).del();
}
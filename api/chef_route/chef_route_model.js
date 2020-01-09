const db = require('../../data/dbConfig');

module.exports = {
    getChefRecipes,
    addRecipe,
    //addInstructions,
    //addIngredients,
    //editIngredients,
    //editInstructions,
    editRecipe,
    //deleteIngredients,
    deleteRecipe,
    editChef,
    getChefDetails
    //deleteInstructions
};

function getChefRecipes(id){
    return db.select("recipes.id","recipes.name","recipes.description","recipes.image_url","recipes.meal_type","recipes.ingredients","recipes.instructions","chefs.username as chef", "chef.location", "chef.phone_number", "chef.email")
        .from("recipes")
        .join("chefs","chefs.id","recipes.chef_id")
        .where("chef_id",id);
}

function addRecipe(data){
    return db.insert({...data}).into("recipes");
}

// function addInstructions(data){
//     return db.insert({...data}).into("instructions");
// }

// function addIngredients(data){
//     return db.insert({...data}).into("ingredients");
// }

function editRecipe(data,id){
    return db("recipes").where("id",id).update(data);
}

function editChef(data,id){
    return db("chefs").where("id",id).update(data);
}

function getChefDetails(id){
    return db("chefs").select("username","phone_number","email","location").where({id});
}

// function editIngredients(data,id){
//     return db("ingredients").where("id",id).update(data);
// }

// function editInstructions(data,id){
//     return db("instructions").where("id",id).update(data);
// }

function deleteRecipe(id){
    return db("recipes").where("id", id).del();
}

// function deleteIngredients(id){
//     return db("recipes").where("id", id).del();
// }

// function deleteInstructions(id){
//     return db("instructions").where("id", id).del();
// }
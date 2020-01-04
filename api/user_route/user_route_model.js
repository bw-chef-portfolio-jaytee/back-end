const db = require('../../data/dbConfig');

module.exports = {
    getRecipes,
    findByName,
    createChef
};

function getRecipes(){
    return db("recipes");
}

function findByName(username){
    return db('users')
        .select('*')
        .where('name', username)
        .first();
}

function createChef(chef){
    return db('chefs').insert({...chef}, "*");
}
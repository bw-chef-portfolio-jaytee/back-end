const db = require('../../data/dbConfig');

module.exports = (req, res, next) => {
    console.log('checking for valid recipe id in req body');
    db("recipes").where("id", req.body.id)
        .then(data=>{
            if(data){
                req.recipe = data;
                next();
            }else{
                res.status(404).json({message:"No recipe with this id"});
            }
        })
    
}
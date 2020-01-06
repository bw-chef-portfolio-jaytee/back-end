const db = require('../user_route/user_route_model');

module.exports = (req, res, next) => {
    console.log('checking for valid recipe id in req body');
    db.findRecipe(req.params.id)
        .then(data=>{
            console.log("data from findRecipe", data);
            if(data){
                req.recipe = data;
                next();
            }else{
                res.status(404).json({message:"No recipe with this id"});
            }
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({message:"error finding recipe", error: error});
        })
    
}
const express = require('express');

const userDb = require('./user_route_model');

const router = express.Router();

router.get("/recipes",(req,res)=>{
    userDb.getRecipes()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(error=>{
            res.status(500).json({message:"error getting users", error:error});
        });
});

router.get("/recipes/:id",(req,res)=>{
    const recipeData = {};
    userDb.findRecipe(req.params.id)
        .then(data=>{
            recipeData = {...recipeData, ...data};
            return userDb.getIngredientsById(req.params.id)
                .then(data=>{
                    recipeData= {...recipeData, ...data};
                    return userDb.getInstructionsById(req.params.id)
                        .then(data=>{
                            recipeData = {...recipeData, ...data};
                            res.status(200).json(recipeData);
                        })
                })
        })
        .catch(error=>{
            res.status(500).json({message:"error getting recipe", error:error});
        })
});

module.exports = router;
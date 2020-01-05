const express = require('express');

const chefDb = require('./chef_route_model');

const router = express.Router();

router.get("/recipes",(req,res)=>{
    chefDb.getChefRecipes(req.token.id)
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(error=>{
            res.status(500).json({message:"error getting chef's recipes", error});
        })
});

router.post("/recipes", (req,res)=>{
    chefDb.addRecipe(req.body)
        .then(data=>{
            res.status(201).json({message:"Recipe successfully created", data});
        })
        .catch(error=>{
            res.status(500).json({message:"error adding recipe", error});
        })
})

module.exports = router;
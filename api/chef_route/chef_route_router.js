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
})

module.exports = router;
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
})

module.exports = router;
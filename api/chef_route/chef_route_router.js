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
});

router.post("/ingredients", (req,res)=>{
    chefDb.addIngredients(req.body)
        .then(data=>{
            res.status(201).json({message:"Ingredients successfully created", data});
        })
        .catch(error=>{
            res.status(500).json({message:"error adding ingredients", error});
        })
});

router.post("/instructions", (req,res)=>{
    chefDb.addInstructions(req.body)
        .then(data=>{
            res.status(201).json({message:"Instructions successfully created", data});
        })
        .catch(error=>{
            res.status(500).json({message:"error adding instructions", error});
        })
});

router.put("/recipes/:id", (req,res)=>{
    chefDb.editRecipe(req.body,req.params.id)
        .then(data=>{
            if(data > 0){
                res.status(201).json({message:"Recipe successfully edited"});
            }else{
                res.status(404).json({message:"Recipe not found"});
            }
        })
        .catch(error=>{
            res.status(500).json({message:"error editing recipe", error});
        })
});

router.put("/ingredients/:id", (req,res)=>{
    chefDb.editIngredients(req.body,req.params.id)
        .then(data=>{
            if(data > 0){
                res.status(201).json({message:"Ingredients successfully edited"});
            }else{
                res.status(404).json({message:"Ingredients not found"});
            }
        })
        .catch(error=>{
            res.status(500).json({message:"error editing ingredients", error});
        })
});

router.put("/instructions/:id", (req,res)=>{
    chefDb.editInstructions(req.body,req.params.id)
        .then(data=>{
            if(data > 0){
                res.status(201).json({message:"Instructions successfully edited"});
            }else{
                res.status(404).json({message:"Instructions not found"});
            }
        })
        .catch(error=>{
            res.status(500).json({message:"error editing instructions", error});
        })
});



module.exports = router;
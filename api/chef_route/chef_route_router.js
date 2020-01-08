const express = require('express');

const chefDb = require('./chef_route_model');
const validateRecipeBody = require('../middleware/ValidateRecipeBody');
const validateChefBody = require('../middleware/ValidateChefBody');
const validateEmailBody = require('../middleware/ValidateEmail');
const validatePhoneNumber = require("../middleware/ValidatePhoneNumber");
// const validateIngredientsBody = require('../middleware/ValidateIngredientsBody');
// const validateInstructionsBody = require('../middleware/ValidateInstructionsBody');
// const validateUpdateBody = require('../middleware/ValidateUpdateBody');

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

router.post("/recipes", validateRecipeBody,(req,res)=>{
    const recipe = {...req.body,chef_id:req.token.id}
    chefDb.addRecipe(recipe)
        .then(data=>{
            res.status(201).json({message:"Recipe successfully created", recipe_id:data});
        })
        .catch(error=>{
            res.status(500).json({message:"error adding recipe", error});
        })
});

// router.post("/ingredients", validateIngredientsBody,(req,res)=>{
//     chefDb.addIngredients(req.body)
//         .then(data=>{
//             res.status(201).json({message:"Ingredients successfully created", ingredient_id:data});
//         })
//         .catch(error=>{
//             res.status(500).json({message:"error adding ingredients", error});
//         })
// });

// router.post("/instructions", validateInstructionsBody,(req,res)=>{
//     chefDb.addInstructions(req.body)
//         .then(data=>{
//             res.status(201).json({message:"Instructions successfully created", instruction_id:data});
//         })
//         .catch(error=>{
//             res.status(500).json({message:"error adding instructions", error});
//         })
// });

router.put("/recipes/:id", validateRecipeBody,(req,res)=>{
    console.log(req.params.id);
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

router.put("/update", validateChefBody,validateEmailBody, validatePhoneNumber, (req,res)=>{
    req.body.username = req.body.username.toLowerCase();
    chefDb.editChef(req.body,req.token.id)
        .then(data=>{
            if(data > 0){
                return chefDb.getChefDetails(req.token.id)
                    .then(data=>{
                        res.status(201).json({
                            message:"Chef successfully edited",
                            chef:data
                        });
                    })
            }else{
                res.status(404).json({message:"Chef not found"});
            }
        })
        .catch(error=>{
            res.status(500).json({message:"error editing chef", error});
        })
});

// router.put("/ingredients/:id", validateUpdateBody,(req,res)=>{
//     chefDb.editIngredients(req.body,req.params.id)
//         .then(data=>{
//             if(data > 0){
//                 res.status(201).json({message:"Ingredients successfully edited"});
//             }else{
//                 res.status(404).json({message:"Ingredients not found"});
//             }
//         })
//         .catch(error=>{
//             res.status(500).json({message:"error editing ingredients", error});
//         })
// });

// router.put("/instructions/:id", validateUpdateBody,(req,res)=>{
//     chefDb.editInstructions(req.body,req.params.id)
//         .then(data=>{
//             if(data > 0){
//                 res.status(201).json({message:"Instructions successfully edited"});
//             }else{
//                 res.status(404).json({message:"Instructions not found"});
//             }
//         })
//         .catch(error=>{
//             res.status(500).json({message:"error editing instructions", error});
//         })
// });

router.delete("/recipes/:id", (req,res)=>{
    chefDb.deleteRecipe(req.params.id)
        .then(data=>{
            if(data > 0){
                res.status(201).json({message:"Recipe successfully deleted"});
            }else{
                res.status(404).json({message:"Recipe not found"});
            }
        })
        .catch(error=>{
            res.status(500).json({message:"error deleting recipe", error});
        })
});

// router.delete("/ingredients/:id", (req,res)=>{
//     chefDb.deleteIngredients(req.params.id)
//         .then(data=>{
//             if(data > 0){
//                 res.status(201).json({message:"Ingredients successfully deleted"});
//             }else{
//                 res.status(404).json({message:"Ingredients not found"});
//             }
//         })
//         .catch(error=>{
//             res.status(500).json({message:"error deleting ingredients", error});
//         })
// });

// router.delete("/instructions/:id", (req,res)=>{
//     chefDb.deleteInstructions(req.params.id)
//         .then(data=>{
//             if(data > 0){
//                 res.status(201).json({message:"Instructions successfully deleted"});
//             }else{
//                 res.status(404).json({message:"Instructions not found"});
//             }
//         })
//         .catch(error=>{
//             res.status(500).json({message:"error deleting instructions", error});
//         })
// });



module.exports = router;
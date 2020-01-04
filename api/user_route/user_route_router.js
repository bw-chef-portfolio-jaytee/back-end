const express = require('express');

const userDb = require('./user_route_model');

const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

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

router.post('/login', (req,res)=>{
    db.findByName(req.body.name)
        .then(data=>{
            if(data && bcrypt.compareSync(req.body.password, data.password)){
                const token = signToken(data);
                res.status(200).json({
                    message:`Welcome ${data.username}`,
                    token:token
            });
            }else{
                res.status(401).json({message:'Invalid Credentials'});
            }
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error,
                message: 'error logging in  user'
            });
        })
});

router.post('/register',(req,res)=>{
    req.body.password = bcrypt.hashSync(req.body.password,8);
    db.createUser(req.body)
        .then(data=>{
            res.status(201).json(data);
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error,
                errorMessage: 'error creating user'
            });
        })
});

function signToken(user) {
    const payload = {
      username: user.username,
      id: user.id, 
    };
  
    const secret = process.env.JWT_SECRET || "Chef has been signed in";
  
    const options = {
      expiresIn: "1h",
    };
  
    return jwt.sign(payload, secret, options); 
  };

module.exports = router;
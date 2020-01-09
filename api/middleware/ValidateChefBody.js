const db = require('../../data/dbConfig');

module.exports = (req, res, next) => {
    console.log('checking for valid user in req body');

    if(Object.entries(req.body).length === 0){

        res.status(400).json({ message: "missing user data in request body" });

        }else if (!req.body.username){

            res.status(400).json({ message: "missing username in request body" });

        }else if(req.body.username.includes(" ")){
            res.status(400).json({ message: "username cannot have a space in it" });
        }else if(req.body.username.length < 2){
            res.status(400).json({ message: "username must have at least 2 characters" });
        }else if(req.token.username === req.body.username.toLowerCase()){
            next();
        }else{
            req.body.username = req.body.username.toLowerCase();
            db("chefs").where("username", req.body.username)
                .then(data=>{
                    if(data.length === 0){
                        next();
                    }else{
                        res.status(400).json({message:"username alreacy exists. choose another username"});
                    }
                })
        }
}
const db = require('../../data/dbConfig');

module.exports = (req, res, next) => {
    console.log('checking for valid user in req body');

    if(Object.entries(req.body).length === 0){

        res.status(400).json({ message: "missing user data in request body" });

        }else if (!req.body.username || !req.body.password){

        res.status(400).json({ message: "missing username and password in request body" });

        }else{
            next();
        }
}
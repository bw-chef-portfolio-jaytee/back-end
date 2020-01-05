const db = require('../../data/dbConfig');

module.exports = (req, res, next) => {
    console.log('checking for valid recipe in req body');

    Object.entries(req.body).length === 0 ? res.status(400).json({ message: "missing user data in request body" }) 
        : !req.body.name || !req.body.description || !req.body.image_url || !req.body.meal_type 
        ? res.status(400).json({ message: "missing name, description, image_url, and meal_type in request body" })
        : !req.body.chef_id 
        ? res.status(400).json({ message: "missing chef_id in request body" })
        : next();
}
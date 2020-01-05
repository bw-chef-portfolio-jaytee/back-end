
module.exports = (req, res, next) => {
    console.log('checking for valid ingredients in req body');

    Object.entries(req.body).length === 0 ? res.status(400).json({ message: "missing data in request body" }) 
        : !req.body.name || !req.body.quantity 
        ? res.status(400).json({ message: "missing name and quantity in request body" })
        : !req.body.recipe_id 
        ? res.status(400).json({ message: "missing recipe_id in request body" })
        : next();
}
module.exports = (req, res, next) => {
    console.log('checking for valid instructions in req body');

    Object.entries(req.body).length === 0 ? res.status(400).json({ message: "missing data in request body" }) 
        : !req.body.instruction || !req.body.step_number 
        ? res.status(400).json({ message: "missing instruction and step_number in request body" })
        : !req.body.recipe_id 
        ? res.status(400).json({ message: "missing recipe_id in request body" })
        : next();
}
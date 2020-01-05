
module.exports = (req, res, next) => {
    console.log('checking for valid body in req body');

    Object.entries(req.body).length === 0 
        ? res.status(400).json({ message: "missing data in request body" }) 
        : next();
}
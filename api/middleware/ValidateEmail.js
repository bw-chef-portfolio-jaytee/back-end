module.exports = (req, res, next) => {
    if(req.body.email){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email))
        {
            next();
        }
            res.status(400).json({message:"you have provided an invalid email."})
    }else{
        next();
    }
}

module.exports = (req, res, next) => {
    if(req.body.phone_number){
        if(req.body.phone_number.trim() !== ""&& req.body.phone_number !== null){
            console.log("the string in not empty");
        if(req.body.phone_number.split(" ").length !=2){
            res.status(400).json({message:"you have provided an invalid phone number."})
        }else if(!req.body.phone_number.includes("-")===10){
            res.status(400).json({message:"you have provided an invalid phone number."})
        } else if(!req.body.phone_number.includes("(")===1){
            res.status(400).json({message:"you have provided an invalid phone number."})
        }else if(!req.body.phone_number.includes(")")===5){
            res.status(400).json({message:"you have provided an invalid phone number."})
        }else{
            req.body.phone_number = req.body.phone_number.trim();
            next();
        }
    }else{
        console.log("the string is empty or null");
        next();
    }

  }
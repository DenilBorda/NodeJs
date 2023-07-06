const auth = (req,res,next)=>{
    if(req.body.password === 123){
        next();
    }
    else{
        res.send('password is required......');
    }
}

module.exports= auth;
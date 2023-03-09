const jwt = require('jsonwebtoken')

exports.auth = (req,res,next) => {
    try{
        const token = req.headers['authtoken']

        if(!token){
            return res.status(401).send('No token, authorization denied')
        }
        const decoded = jwt.verify(token,'jwtSecret')
        req.user = decoded.user
        next();


    }catch(err){
        res.status(401).send('Token Invalid')
    }
}
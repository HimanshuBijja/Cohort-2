const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');

async function authMiddleware(req, res, next ){
    const authHeader = req.headers.authentication;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({});
    }

    const token = authHeader.split(" ")[1]

    try{
        const decoded = await jwt.verify(token, JWT_SECRET)
        req.userId = decoded.userId;
        if(decoded.userId){
            next();
        }
        else{
            return  res.status(403).json({});
        }
    }
    catch(err){
        return  res.status(403).json({
            msg : "invalid token",
            error : err.message
        });
    }

};

module.exports = {
    authMiddleware
}
const {Custom404error} = require('../errors/custom-error');

const errorhandler=(err, req, res,next) =>{
    if(err instanceof Custom404error){
        return res.status(err.statusCode).json({msg:err.message});
    }
    return res.status(500).json({msg : 'Something went wrong, try again later...'});
}

module.exports = errorhandler;
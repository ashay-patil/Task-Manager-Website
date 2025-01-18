const asyncWrapper = (fun)=>{
    return async (req, res, next)=>{
        try {
            await fun(req, res,next);    // fun() is an async function and it also returns a promise....
        } catch (error) {
            next(error);    //Instead of passing it to next middleware, we can directly do res.send('error message')
            // the next middleware resides in error-handler.js
        }
        //In the backend try...catch... is used for connection errors or syntax errors in database access...This errors are thrown by the mongoose.
    }
}

module.exports = asyncWrapper;
const not_found = (req,res)=>{
    return res.status(404).send('<h3>404 : Url Not Found</h3>');
}

module.exports = not_found;
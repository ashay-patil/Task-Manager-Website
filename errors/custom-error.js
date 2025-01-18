class Custom404error extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomError=(message, statusCode)=>{
    return new Custom404error(message, statusCode);
}

module.exports = {Custom404error , createCustomError};
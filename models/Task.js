const mongoose = require('mongoose');


//setting-up schema for all the documents in our collection
const TaskSchema = new mongoose.Schema({
    // name:String,
    name:{
        type : String,
        required : [true,'must provide name'],
        trim:true,
        maxlength :[20,'name can not be more than 20 characters']
    },
    completed : {
        type : Boolean,
        default : false
    }
})

// Model is like representation of the collection. 
// Creating tasks collection...

//mongoose.model('Tasks', TaskSchema) returns the collection named Tasks

module.exports = mongoose.model('Task', TaskSchema);
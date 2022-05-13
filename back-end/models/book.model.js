const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    }, 
    author: {
        type: String,
        required: true
    }, 
            
    description : { 
        type: String,
        required: true
    },
    imagelink: {
        type: String,
        
    },
    price: {
         type: String,
         required: true
    },
         
    category : { 
        type: String,
        required: true},
    rating :{
        type: String,
        required: true
    },
    userphone :{
        type: String, 
        required:true,
    },
    useremail :{
        type:String,
        required:true,
    }    


});
module.exports  = mongoose.model('Book',bookSchema);

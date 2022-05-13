const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    
    user : {
        type:String,
        required: true,
        
    },
    name: {
        type:String,
        required: true,
        
    },
    
    pictures: {
        type:String,
        
    },
    postcontent: {
        type:String,
        required:true
    },
    comments: { 
        type:String
        
    },
    likes: {
        type:String
        
    }
});
module.exports  = mongoose.model('Post',PostSchema);
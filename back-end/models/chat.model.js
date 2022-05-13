const mongoose = require('mongoose');


const chatSchema = new mongoose.Schema({
    // _id_room :{
    //     type:String
    // },
    user: {
        type: String,
        required: true},
    //reciever : string, 
    room : { 
        type: String,
        required: true},
    message :{
        type: String,
        required: true}
});


module.exports  = mongoose.model('chat',chatSchema);
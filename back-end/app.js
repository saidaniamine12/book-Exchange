const express= require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser= require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const userRoutes = require('./routes/user');
//const http = require('http').Server(app);
const http = require('http');
// require('./models/chat.model');
// require('./models/room.model');
// require('./models/user.model');
// const User = mongoose.model('user');
// const Room = mongoose.model('room');
// const Chat = mongoose.model('chat'); 

//const socketio=require('socket.io');



// //serveur
// const server=  app.listen(port,function(err){
//   if (err) throw err;
   
//   console.log("server started on port http://localhost:"+JSON.stringify(port));

// }); // we created a server 
const server = http.createServer(app);
//const io = socketio(server);
server.listen(port, () => console.log("server started on port http://localhost:"+JSON.stringify(port)));

//socket setup
//const socket = require('socket.io');

//const io = require('socket.io')(server);
//messaging

const msg = require('./models/user.model.msg');


//connect to db for messaging

//on connection
// tell express where to serve static files from
app.use(express.static(__dirname + '/public'));



app.use(express.json());

//middleware general pour toutes les requets a enevoyer a notre serveur 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    if('OPTIONS' == req.method){
      res.sendStatus(200);
    } else {
      console.log(`${res.ip} ${res.method} ${res.url}`);
      next();
    }
    
  });







//DB configuration
const config = require('./config/database');
// const { Socket } = require('socket.io');
const { Server } = require('http');
//const { http } = require('npmlog');
//connect to db
//to connect the database and we have to set a database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected',function(){
    console.log('connected to database '+config.database);
});
//on error
mongoose.connection.on('error',function(err){
    console.log('Database error'+err);
});


//accept defferent domains cors middleware
app.use(cors());


//bodyparser middleware
app.use(bodyParser.json());


//routes
app.use('/user', userRoutes);



app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Objet créé !'
    });
  });
















  const chat = require ('./models/chat.model');




// //messaging

// io.on('connection', socket =>{
//   chat.find().then(result=>{
//     socket.emit('new message',result);
//     //console.log('there is a result ');
//     //console.log(result);
//     //io.emit('new message',result);
//    // socket.broadcast.emit(result);
//   });
//   console.log(`a user connected ${socket.id}`);
//   //msg.find().then(result =>{
//     //socket.emit('message',result)
//  // });
  
//   socket.on('disconnect',()=>{
//     console.log('user disconnected');
//   });
//   socket.on('message',msg =>{
//     const message = new chat(msg);
//     message.save().then(()=>{
//       console.log(`message saved and  this is socket id of sender or msg idk  ${socket.id}`);
//       io.emit('new message',msg);
//       //console.log(msg);
//       //socket.broadcast.emit(message);

//     });

    
//   });
//   socket.on('typing',function(data){
//     io.sockets.emit('typing',data);
//   });
//   socket.on('message',data =>{
//     console.log(`sender is  ${socket.id}`);
//     //console.log(JSON.stringify( data));
//     console.log(data);
//     io.emit('new message',data);
   
    

//     //io.socket.emit(data);
//   })
//   socket.on('message',data =>{
//     //console.log(`abc h  test ${socket.id}`);
//     //console.log(data);
//     socket.broadcast.emit(data);
//     io.emit('new message',data);
//     socket.emit('new message',data);
//     if(data.length) {
//       data.forEach(message => {
//         appendMessage(message);
//       });
//     }
  
    
//   })





// });








































module.exports= app;



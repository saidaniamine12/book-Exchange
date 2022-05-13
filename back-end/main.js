// const { io } = require("socket.io-client");
// const mongoose = require('mongoose');
// const socket = io; 
// socket.on('message',message =>{
//     console.log(message);
// })

// io.on('connection', socket =>{
//     console.log(`a user connected ${socket.id}`);
//     msg.find().then(result =>{
//       socket.emit('output-messages',result)
//     })
//     socket.emit('message','Hello World');
//     socket.on('disconnect',()=>{
//       console.log('user disconnected');
//     });
//     socket.on('chatmessage',msg =>{
//       const message = new msg({msg});
//       message.save().then(()=>{
//         io.emit('message',msg);
  
//       });
  
      
//     });
//     socket.on('typing',function(data){
//       io.sockets.emit('typing',data);
//     });
//     socket.on('message',data =>{
//       console.log(data);
//       appendMessage(data);
//     })
//     socket.on('output-messages',data =>{
//       console.log(data);
//       if(data.length) {
//         data.forEach(message => {
//           appendMessage(message);
//           displayMessage(message);
//         });
//       }
    
      
//     })
  
  
  
  
  
//   });
  
// function outputMessage(message){
//     const div  = document.createElement('div');
//     div.classList.add('message');
//     div.innerHTML = `<p class="meta">Brad <span>9:12pm</span></p>
//     <p class="text">
//     ${message}
//     <\p>`;
//     document.querySelector('.chat-messages').appendChild(div);
// }
// module.exports=mongoose.model('io',io);
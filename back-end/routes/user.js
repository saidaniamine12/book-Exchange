  const express= require('express');
const router = express.Router();



const userCtrl = require('../controller/user');
//const auth = require('../middleware/auth');

//const chatCtrl = require('../controller/chat'); 

//login page
router.post('/login',  userCtrl.login);


//signup page
router.post('/signup',  userCtrl.signup);

//messenger
// router.get('/chat', (req, res) => {
//   Message.find({},(err, messages)=> {
//     res.send(messages);
//   })
//})

//router.post('/chat', chatCtrl.savemessage);


// router.post('/chat', (req, res) => {
//   var message = new Message(req.body);
//   message.save((err) =>{
//     if(err)
//       sendStatus(500);
//     res.sendStatus(200);
//   })
// })



///books
const bookCtrl =require('../controller/book');
router.post('/createbook', bookCtrl.savebook);
router.get('/allbooks',bookCtrl.findAll);
router.get('/book/:id',bookCtrl.findOne);
router.get('/book',bookCtrl.findByCategory);


//post
const postCtrl = require('../controller/posts');
router.post('/createpost',postCtrl.savePost);
router.get('/allposts',postCtrl.findAll);




module.exports = router;
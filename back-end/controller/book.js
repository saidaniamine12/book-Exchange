const Book = require('../models/book.model');


//save book to db 
exports.savebook =(req,res,next) =>{ 
    const bookAttributes = {
        name: req.body.name,
        author:req.body.author,
        description: req.body.description,
        imagelink: req.body.imagelink,
        price: req.body.price,
        category: req.body.category,
        rating: req.body.rating,
        userphone: req.body.userphone,
        useremail:req.body.useremail
      },
       b = new Book(bookAttributes);
       
    b.save()
    .then(() => res.status(201).json({success: true, mesg: 'book saved'})
        
    )
      
     .catch(error => console.log(`error: ${error.message}`));
};


//all books to page
exports.findAll = (req,res) =>{
  
  Book.find().then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "some error occured while retrieving books"
    });
  });

};
  
//getbook by id
exports.findOne = (req,res) =>{
  const id = req.params.id;
  
  Book.findById(id)
  .then(data => { 
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "some error occured while retrieving book by id"
    });
  });
};
  
//search by category 
exports.findByCategory = (req,res) =>{
  const cat = req.query;
  
  Book.find(cat)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "some error occured while retrieving book by id"
    });
  });

};
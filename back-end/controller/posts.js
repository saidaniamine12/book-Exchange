const POST = require('../models/post.model');

exports.savePost =(req,res,next) =>{ 
    const postAttributes = {
        user: req.body.user,
        name : req.body.name,
        pictures:req.body.pictures,
        postcontent: req.body.postcontent,
        comments: req.body.comments,
        like: req.body.likes
        
      },
       p = new POST(postAttributes);
       
    p.save()
    .then(() => res.status(201).json({success: true, mesg: 'post saved'})
        
    )
      
     .catch(error => console.log(`error: ${error.message}`)); 
};

exports.findAll = (req,res,next) => {
  POST.find().then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "some error occured while retrieving posts"
    });
  });
}
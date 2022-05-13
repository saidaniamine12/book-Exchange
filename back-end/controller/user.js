const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash

        });
        user.save()
            .then(() => res.status(201).json({success: true, message: 'User created ! .'}))
            .catch(error => res.status(400).json({success: false, error}));
    })
    .catch(error => res.status(500).json({error}));


};

//allows connectors to connect 
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if (!user) {
            return res.json( {mail: false});
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.json({pass: false,mail:true})
            }
            res.status(200).json({ 
                userId: user._id,pass:true,mail:true,
                token: jwt.sign(
                     {userId: user._id },
                     'gpsenisodbtopsecretgte',
                     {expiresIn: '24h'},
                     )
                

            })
            
        })
        
    })

    


};


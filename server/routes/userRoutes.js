// Dependencies
var router  = require('express').Router(),
    User    = require('../models/userModel'),
    utils   = require('../../tools/utils');



// Router for URL: <root>/user

// Routes
router.get('/login', function (req, res) {
/*
    var searchUser = {username: req.body.username};
    User.findOne(searchUser, function(err, user){
        if (err || !user)  return res.status(401).send({ message: "User does not exist!"});
        user.comparePassword(req.body.password, function(err, isMatch){
            if (err || !isMatch) return res.status(401).send({ message: "Wrong user/password!"});
            if (isMatch) return res.status(200).send(utils.getNewToken(user, res));
        });
    });
*/
    res.status(200).send("Login");
});


router.post('/register', function (req, res) {
    // create user
    var newUser = new User({
        name: "João Carreira",
        username: "jfpcarreira",
        password: "mastersecure",
        email: "jfpcarreira@gmail.com"
    });

    // persist object
    newUser.save(function(err){
        var resultado = {
            erro: err,
            resposta: res
        }

        if (err) {
            console.log("Está com erro: " + err);
            return res.status(501).jsonp(err);
        }
        else {
            console.log("Não tem erro!");
        }
//        return res.status(200).send(utils.getNewToken(newUser, res));
        return res.status(200).send("Utilizador criado com sucesso!");
    });
});

//TODO: REMOVE
// Only for tests propose
router.post('/users/getToken', function(req, res){
/*
    var token = req.body.token;
    console.log('teste token: ' + token);
    return res.status(200).send(utils.getDecodedToken(token, res));
*/
    res.status(200).send("Get Token");
});


// Return router
module.exports = router;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 4000;
const Routes = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

let UserModel = require('./models/user.model');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', Routes);

mongoose.connect('mongodb://127.0.0.1:27017/recargas', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

Routes.route('/user/create').post(function(req, res) {

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    
        let user = new UserModel({email: req.body.email, password: hash, name: req.body.name});
        user.save()
            .then(user => {
                return res.status(200).json({'sucess': true, 'response': 'user added successfully'});
            })
            .catch(err => {
                return res.status(400).send({'success': false, 'response': 'adding new user failed'});
            });

    });

});

Routes.route('/user/signIn').post(function(req, res) {

    UserModel.find({'email':req.body.email}, function(err, user) {

        if(err)
            return res.json({success: false, message: 'not logged'})

        bcrypt.compare(req.body.password, user[0].password, function(err, response) {
            
            if(err)
                return res.json({success: false, message: 'not logged'})

            if(!response){
                return res.json({success: false, message: "Wrong password or email"});
            }else{
                return res.json({ success:true, message: "Logged in" });
            }

        });

    });

});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
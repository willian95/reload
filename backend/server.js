const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const Routes = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
var mysqlConf = require('./connect.js').mysql_pool;
var moment = require('moment');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', Routes);

Routes.route('/user/create').post(function(req, res) {

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {

        mysqlConf.getConnection(function (err, connection) {
            connection.query("INSERT INTO users(email, name, password, created_at, updated_at) values('"+req.body.email+"', '"+req.body.name+"', '"+hash+"', '"+moment().format('Y-mm-DD')+"', '"+moment().format('yyyy-mm-dd:hh:mm:ss')+"')", function (err, rows) {
                if(err){
                    return res.status(400).send({'success': false, 'response': "Error en el servidor"});
                }

                return res.status(200).json({'sucess': true, 'response': 'Usuario registrado con éxito'});
            });
        });

    });

});

Routes.route('/user/signIn').post(function(req, res) {

    mysqlConf.getConnection(function (err, connection) {
        connection.query("SELECT * FROM users WHERE email = '"+req.body.email+"'", function (err, rows) {
            if(err){
                return res.status(400).send({'success': false, 'response': "Error en el servidor"});
            }

            if(rows.length > 0){

                bcrypt.compare(req.body.password, rows[0].password, function(err, response) {
            
                    if(err)
                        return res.json({success: false, message: 'not logged'})
        
                    if(!response){
                        return res.json({success: false, message: "Wrong password or email"});
                    }else{
                        return res.json({ success:true, message: "Logged in" });
                    }
        
                });

            }
            
        });
    });


});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
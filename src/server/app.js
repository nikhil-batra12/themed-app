var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

/* Internal controller dependencies*/
var userController = require('./controllers/userController');
var productsController = require('./controllers/productsController');

/* Set port for local/heroku environment*/
var port = process.env.PORT || 3000;

activateApp();

// Activate the app and routes
function activateApp() {
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    /* * CORS Support in my Node.js web app written with Express */
    app.all('/*', function (req, res, next) {
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", 'Content-Type, X-Requested-With');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        next();
    });

    // parse application/json
    app.use(bodyParser.json());

    app.post('/api/user/login', userController.login);

    /*
    https://jwt.io/
    debugger
    token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImFzZGFzZDEyMzEyMyIsInJvbGUiOiJ1c2VyIiwibmFtZSI6IkZpcnN0IExhc3QiLCJlbWFpbCI6ImZpcnN0bGFzdEBnbWFpbC5jb20ifQ.l74zw6SQddpzXPPgm0jW91bvWR6YUvkipx_puuZMOLg

    {
  "token": "asdasd123123",
  "role": "user",
  "name": "First Last",
  "email": "firstlast@gmail.com"
} */
    app.get('/api/user/details', userController.userDetails);

    app.get('/api/product/sliderimages', productsController.sliderImages);
    app.get('/api/get-products', productsController.productsList);
    app.post('/api/product/submitenquiry', productsController.submitEnquiry);
    //Set paths
    //app.use(express.static(path.normalize(__dirname + '/client')));

    //Start server to listen on port
    app.listen(port, function () {
        console.log('App server started',port);
    })
}
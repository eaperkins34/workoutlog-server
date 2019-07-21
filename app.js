require('dotenv').config();
var express=require('express')
var app = express();
var sequelize = require('./db');
var bodyParser = require('body-parser');

/*********CONTROLLERS******* */
var user = require('./controllers/user-controller')
var login = require('./controllers/login-controller')
var log = require('./controllers/log-controller')


sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'))

/****EXPOSED****/
app.use('/api/user', user);  // creates a user 
app.use('/api/login', login);  // allows an already existing user to login

/****MIDDLEWARE****/
app.use(require('./middleware/validate-session'))

/****PROTECTED ROUTES****/
app.use('/api/log', log);



app.listen(3000, function() {
    console.log('app is on 3000')
});
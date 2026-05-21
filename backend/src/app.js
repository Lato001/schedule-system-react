const express = require('express')
const cors = require('cors');
const app = express();
app.use(express.json());

//SETTINGS
app.set('port', process.env.PORT);
app.use(express.urlencoded({extended: false}));
//ROUTES DEFINITION
app.use('/', require('./routes/userRoutes'));

module.exports = app;
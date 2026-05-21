const express = require('express')
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
//Settings
app.set('port', process.env.PORT || 4000);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//routes
app.use('/', require('./routes/userRoutes'));

module.exports = app;
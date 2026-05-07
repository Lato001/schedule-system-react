const express = require('express')
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//middlewares
//app.use(express.json());

//routes
//app.use('/api/users', require('./routes/users'));




module.exports = app;
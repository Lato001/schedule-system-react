const express = require('express')
const cors = require('cors');
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());
//app.use(express.json());

//routes
//app.use('/api/users', require('./routes/users'));
app.use('/api/users', require('./routes/users'));
app.use('/api/turns', require('./routes/turns'));



module.exports = app;
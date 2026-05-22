const express = require('express')
const cors = require('cors');
const app = express();
const cookieParser = require("cookie-parser")

app.use(express.json());

//Permisos para peticiones desde mi frontend
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());

//SETTINGS
app.set('port', process.env.PORT);
app.use(express.urlencoded({extended: false}));
//ROUTES DEFINITION
app.use('/', require('./routes/userRoutes'));

module.exports = app;
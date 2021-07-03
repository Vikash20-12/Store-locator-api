const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors =  require('cors');
const connectDB = require('./config/db');

//LOAD ENV VARS
dotenv.config({path: './config/config.env'});

//CONNECT TO DATABASE
connectDB();

const app = express();

//MIDDLEWARE
//BODY PARSER
app.use(express.json());

//ENABLE CORS
app.use(cors());

//ROUTES
app.use('/api/v1/stores', require('./routes/stores'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));

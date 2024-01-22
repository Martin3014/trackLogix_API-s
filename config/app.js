'use strict'

const express = require('express');
const morgan = require ('morgan');
const helmet = require ('helmet');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 3000;

//Routes
const customerRoutes = require('../src/routes/customer')

//Server config
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

//Routes settings
app.use('/api', customerRoutes)

exports.initServer = ()=>{
    app.listen(port);
    console.log(`Server http running in port ${port}`);
}
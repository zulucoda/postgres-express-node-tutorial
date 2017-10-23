'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//log request to console
app.use(logger('dev'));

//parse incoming requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);
//setup default catch-all route
app.get('*', (req, res) => res.status(200).send({
  message: 'zulucoda express up and running!!!'
}));

module.exports = app;
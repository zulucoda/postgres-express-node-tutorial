/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/10/23.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict'
const italianCarManufacturesController = require('../controllers').italianCarManufactures;

module.exports = app => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Italian Car Manufactures API!'
  }));

  app.post('/api/italian-car-manufactures', italianCarManufacturesController.create);
  app.get('/api/italian-car-manufactures', italianCarManufacturesController.list);
};
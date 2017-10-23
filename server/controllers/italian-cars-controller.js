/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/10/23.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';

const ItalianCar = require('../models').ItalianCar;

module.exports = {
  create(req, res){
    return ItalianCar
      .create({
        name: req.body.name,
        make: req.body.make,
        released: req.body.released,
        engine: req.body.engine,
        still_in_production: req.body.still_in_production,
        italianCarManufactureId: req.params.italianCarManufactureId
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  }
};
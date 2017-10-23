/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/10/23.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict'

const ItalianCarManufactures = require('../models').ItalianCarManufacture;

module.exports = {
  create(req, res){
    return ItalianCarManufactures
      .create({
        title: req.body.title
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  list(req, res){
    return ItalianCarManufactures
      .all()
      .then(data => res.status(200).send(data))
      .catch(error => res.status(400).send(error));
  }
};
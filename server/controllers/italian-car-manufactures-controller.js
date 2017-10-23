/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/10/23.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict'

const ItalianCarManufacture = require('../models').ItalianCarManufacture;
const ItalianCar = require('../models').ItalianCar;

module.exports = {
  create(req, res){
    return ItalianCarManufacture
      .create({
        title: req.body.title
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  list(req, res){
    return ItalianCarManufacture
      .findAll({
        include: [{
          model: ItalianCar,
          as: 'italianCars'
        }]
      })
      .then(data => res.status(200).send(data))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res){
    return ItalianCarManufacture
      .findById(req.params.italianCarManufactureId, {
        include: [{
          model: ItalianCar,
          as: 'italianCars'
        }]
      })
      .then(data => {
        if(!data){
          return res.status(404).send({
            message: 'Italian Car Manufacture Not Found'
          });
        }
        return res.status(200).send(data);
      })
      .catch(error => res.status(400).send(error));
  }
};
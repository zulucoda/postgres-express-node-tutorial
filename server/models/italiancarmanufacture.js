'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItalianCarManufacture = sequelize.define('ItalianCarManufacture', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  ItalianCarManufacture.associate = (models) => {
    ItalianCarManufacture.hasMany(models.ItalianCar, {
      foreignKey: 'italianCarManufactureId',
      as: 'italianCars'
    });
  };

  return ItalianCarManufacture;
};
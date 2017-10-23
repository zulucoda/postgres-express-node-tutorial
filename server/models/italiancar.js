'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItalianCar = sequelize.define('ItalianCar', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    make: {
      type: DataTypes.STRING,
      defaultValue: false,
    },
    released: {
      type: DataTypes.DATE,
    },
    engine: {
      type: DataTypes.STRING,
      defaultValue: false,
    },
    still_in_production: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });

  ItalianCar.associate = models => {
    ItalianCar.belongsTo(models.ItalianCarManufacture, {
      foreignKey: 'italianCarManufactureId',
      onDelete: 'CASCADE'
    });
  };

  return ItalianCar;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    ProductName: DataTypes.STRING,
    ImagePath: DataTypes.STRING,
    status: DataTypes.INTEGER,
    Price: DataTypes.INTEGER
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};
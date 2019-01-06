'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    customerName: DataTypes.STRING,
    ProductName: DataTypes.STRING,
    status: DataTypes.INTEGER,
    Qty: DataTypes.INTEGER
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};
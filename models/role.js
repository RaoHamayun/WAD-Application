'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    Role_name: DataTypes.STRING
  }, {});
  role.associate = function(models) {
    // associations can be defined here
  };
  return role;
};
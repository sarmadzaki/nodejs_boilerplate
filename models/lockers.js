'use strict';
module.exports = (sequelize, DataTypes) => {
  var lockers = sequelize.define('lockers', {
    lockername: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  lockers.associate = function(models) {
    // associations can be defined here
  };
  return lockers;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var sub_lockers = sequelize.define('sub_lockers', {
    lockerid: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    status: DataTypes.STRING,
    available: DataTypes.BOOLEAN
  }, {});
  sub_lockers.associate = function(models) {
    // associations can be defined here
  };
  return sub_lockers;
};
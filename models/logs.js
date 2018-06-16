'use strict';
module.exports = (sequelize, DataTypes) => {
  var logs = sequelize.define('logs', {
    action: DataTypes.STRING,
    description: DataTypes.STRING,
    actor: DataTypes.STRING
  }, {});
  logs.associate = function(models) {
    // associations can be defined here
  };
  return logs;
};
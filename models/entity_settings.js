'use strict';
module.exports = (sequelize, DataTypes) => {
  var entity_settings = sequelize.define('entity_settings', {
    settings_name: DataTypes.STRING,
    settings_type: DataTypes.STRING,
    settings_value: DataTypes.STRING
  }, {});
  entity_settings.associate = function(models) {
    // associations can be defined here
  };
  return entity_settings;
};
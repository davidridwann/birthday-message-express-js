'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Location.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true, // Mark id as primary key
      defaultValue: DataTypes.UUIDV4, // Optional, if you want to set a default value
    },
    countryCode: DataTypes.STRING,
    countryName: DataTypes.STRING,
    zoneName: DataTypes.STRING,
    gmtOffset: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Location',
    timestamps: true
  });
  return Location;
};
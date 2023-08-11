'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true, // Mark id as primary key
      defaultValue: DataTypes.UUIDV4, // Optional, if you want to set a default value
    },
    type: DataTypes.STRING,
    status: DataTypes.STRING,
    data: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Job',
    timestamps: true
  });
  return Job;
};
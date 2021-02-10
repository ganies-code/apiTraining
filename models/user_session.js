'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User_session.init({
    userId: { type:DataTypes.INTEGER,allowNull:false},
    token:{ type:DataTypes.STRING,allowNull:false}
  }, {
    sequelize,
    modelName: 'User_session',
  });
  return User_session;
};
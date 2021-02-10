'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      
    static associate(models) {
      // define association here
    }
    /*getuser(id){
        let user = models.User.findOne({
          where:{
            id:id
          }
        });
        return user;
    }*/
  };
  User.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    name:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.get = async(userId,model)=>{
    try{
        let user = await model.findOne({
            where:{ id: userId }
        });
        return user;
    }
    catch(err){
        console.log(err);
    }
  }
  User.updateDetail = async(userId,model,data)=>{
     try{
       let { email,name } = data;
       console.log(email);
        let user = await model.update(
          {
            email:email,
            name:name
          },
          {
                where:{
                    id:userId
                }
          }
            
        );
      
        return user;
     } 
     catch(err){
        console.log(err);
     }
  }
  User.readByEmail = async(email,model) => {
    let user;
    user = await model.findOne({email:email });
    return user;
  }

  
  return User;
};
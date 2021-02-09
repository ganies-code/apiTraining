const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userId: {
        type: Number,
        min: 1,
        required: true
    },
    firstName: {
        type: String,
        min: 3,
        required: true
    },
    lastName: {
        type: String,
        min: 3,
        required: true
    },
});

const Users = mongoose.model("User", UserSchema);
/**
 * creating and saving data entries in the database
 */
class UserModel{

createUser = (data,callback) => {
    try{
        //creating instance of a database and data object
    const User = new Users({
        id:data.id,
        firstName: data.firstName,
        lastName: data.lastName, 
        
    });
    //dumping the data to database
    User.save()
    callback(null,User);
    //catch error if any
    }catch(err){
    callback(err,null);
    }
}
/**
 * find all the users from databases
 */

findAllUser = (data,callback) => {
    Users.find(data,function(err,result) {
        if(err)return callback(err,null);
        return callback(null,result);
    })
}
/**
 * finding user using id 
 */
findUserId = (UserId,callback) => {
    Users.findById(UserId,function(err,data){
        if(err)return callback(err,null);
        return callback(null,data);
    })
}
/**
 * update the data using id
 */
updateUserId = (UserId, data, callback) => {
    try{
    Users.findByIdAndUpdate(UserId, data, function (err){
    if (err) return next(err);
    callback(null, data);
    })
    }
    catch(err) {
    callback(err,null);
    }    
}
/**
 * deleting the user by using id
 */
deleteUserId = (UserId,callback) => {
    try{
    Users.findByIdAndDelete(UserId)
    .then(
    callback(null,"User Deleted"))
    .catch(callback(err,null))
    }catch(err){
        callback(err,null);
    }
}
}

module.exports = new UserModel();

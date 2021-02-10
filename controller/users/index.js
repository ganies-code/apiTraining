/**
 * @module User
 */
const USER = require("../../models").User;
const BCRYPT = require('bcrypt');

//const joi = 
/**
 * @class User
 */
class Users{
    /**
     * @constructor
     */
    constructor(){
        const generateToken = this.generateToken.bind(this);
    }
    /**
     * @method getUser 
     * @param {Object} req The request
     * @param {Object} res The response
     * @param {Number} req.params.id The user id 
     * @returns {Object} - User details of specified id
     */
    async getUser(req,res){
        try{
            let {id} = req.params;
            let user = await USER.get(id,USER);
            res.json({"user":user});
        }
        catch(err){
            console.log(err);
        }
    }
    /**
     * @method updateUser 
     * @param {Object} req The request
     * @param {Object} res The response
     * @param {Number} req.params.id The user id
     * @return {Object} The message with successfully updated or not
     */
    async updateUser(req,res){
        try{
            let {id} = req.params;
           // let {email,name} = req.body;
            let data = req.body;
            
            let user = await User.updateDetail(id,USER,data);
            if(user[0])
            {
               res.status(200).json({"msg":"Successfully updated"});
            }
        }
        catch(err){
            console.log(err);
        }
    }
    async login(req,res){
        try{
          let {email,password} = req.body;
           await USER.readByEmail(email,USER)
           .then(async(response)=>{            
               if(response === null)
               {
                   res.status(404).json({"message":"User doesn't exist"});
               }
               else
               {                   
                   let dbUserPwd = response.password;
                   console.log("-------response-----");
                   console.log(response.password);
                   var pwdCheck = await BCRYPT.compare(password, dbUserPwd);
                   console.log("-------------------------");
                   console.log(pwdCheck);
                   if(!pwdCheck)
                   {
                       res.status(422).json({message:"Invalid Password"});
                   }
                   else
                   {                          
                       var id = response._id;
                       var existsSessions = await user_session.read(id);
                       if(existsSessions != null){
                           res.status(200).json({"message":"Already logged In"});
                       }
                       else
                       {
                           var username = response.name;
                           var token = await this.generateToken(username,id);
                       
                           var body = {
                               id:id,
                               token:token
                           }
                           var createdUserSession = await user_session.create(body);
                           if(createdUserSession)
                           {
                               res.status(200).json({"message":"Successfully Logged In","token":token});
   
                           }
                           else
                           {
                               res.status(500).json({"message":"Something Went Wrong"});
                           }
                       }

                   }
               }
           })
           .catch((err)=>{
               console.log(err);
           })

        }
        catch(err){
            console.log(err);
        }
    }
    async register(req,res){
        try{
            
        }
        catch(err){
            console.log(err);
        }
    }
}
module.exports = Users;
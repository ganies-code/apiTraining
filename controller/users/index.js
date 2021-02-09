class Users{
    constructor(){

    }
    getUsers(req,res){
        try{
            console.log("hello");
            res.status(200).json({"msg":"Hello"});
        }
        catch(err){
            console.log(err);
        }
    }
}
module.exports = Users;
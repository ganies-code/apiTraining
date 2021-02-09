const controls=require('../controller/appController')
/**
 * creating routes and to display msgs on and calling controlers
 * @param {*} app 
 */
module.exports = (app) => {
   //this is where user will be routed initially 
  app.get('/', (req, res) => {
      res.json({"message": "Welcome user"});
  });
  //creating new user
  app.post('/create',controls.createUser);
  //searching for all the users
  app.get('/search', controls.findAllUser);
  //searching user using id
  app.get('/search/:userId', controls.findUserId);
  //updating user according to id
  app.put('/update/:userId',controls.updateUserId);
  // delete user using id
  app.delete('/delete/:UserId', controls.deleteUserId);
}
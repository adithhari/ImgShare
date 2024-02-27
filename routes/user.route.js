// const userController = require("../controllers/user.controller");
const usersController = require("../controllers/users.controllers");

module.exports = (app) => {
  // app.route("/user").get(userControllers.getAllUser).post(userControllers.checkUser);
  // app.route("/user/:id").put(userController.updatePassword).delete(userController.deleteUser);

  app
    .route("/users")
    .post(usersController.createUser)
    .put(usersController.updatePassword)
    .delete(usersController.deleteUser);

  app.route("/login").post(usersController.login);
};

// const users = [
//   { name: "master", password: "master" },
//   { name: "test1", password: "test" },
//   { name: "test2", password: "test" },
//   { name: "test3", password: "test" }
// ];

// exports.getAllUser = (req, res) => {
//   res.send(users);
// };

// exports.checkUser = (req, res) => {
//   for (let i = 0; i < users.length; i++) {
//     if (
//       req.body.username == users[i].name &&
//       req.body.password == users[i].password
//     ) {
//       res.send(`Welcome ${req.body.username}`);
//     } else {
//       res.status(500).send("Error!! Try again");
//     }
//   }
// };

// exports.updatePassword = (req, res) => {
//   for (let i = 0; i < users.length; i++) {
//     if (i == req.params.id) {
//       const oldPassword = users[i].password;
//       users[i] = {
//         name: users[i].name,
//         password: req.body.password
//       };
//       res.send(
//         `Old Password: ${oldPassword} \nNew password is set to : ${users[i].password}`
//       );
//     }
//   }
// };

// exports.deleteUser = (req, res) => {
//   users.splice(req.params.id, 1);
//   res.send(users);
// };

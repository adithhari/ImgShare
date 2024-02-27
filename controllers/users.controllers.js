//controller to create a user account
// const users = [
//   {
//     emailId: "test@test.com",
//     fullName: "Tester",
//     password: "test",
//     creationTime: "2024-01-19T07:05:23.500Z"
//   }
// ];
const db = require("../db");

const doesUserExists = async (email) => {
  const query = "select * from user_table where email_id = $1";
  const test = await db.query(query, [email]);
  if (test.length) return true;
  return false;
};

const getAllUser = () => {
  return db.query("select * from user_table");
};

const getUserByEmail = async (email) => {
  const user = await db.query("select * from user_table where email_id = $1;", [
    email
  ]);
  return user[0];
};

//Signing In

let flag = false;

exports.login = async (req, res) => {
  if ((await doesUserExists(req.body.email)) === true) {
    const user = await getUserByEmail(req.body.email);
    console.log(user);
    if (req.body.password === user.password) {
      flag = true;
      console.log("login Successful");
    } else {
      flag = false;
      console.log("login Not Successful");
    }
  }
};

//Create New User
exports.createUser = async (req, res) => {
  if ((await doesUserExists(req.body.email)) === true) {
    console.log("hit true");
    return res.status(409).send(`User already exists ${req.body.email}`);
  } else {
    console.log("hit false");
    let newUser = {
      emailId: req.body.email,
      fullName: req.body.fname,
      password: req.body.password,
      creationTime: new Date().toISOString()
    };
    const query =
      "INSERT INTO user_table(email_id, full_name, password) VALUES ( $1, $2, $3 );";
    const test2 = await db.query(query, [
      newUser.emailId,
      newUser.fullName,
      newUser.password
    ]);
    const all_users = await getAllUser();
    return res.send(all_users);
  }
};

exports.updatePassword = async (req, res) => {
  const query = "UPDATE user_table  SET password = $1 WHERE email_id = $2;";
  const updating = await db.query(query, [req.body.password, req.body.email]);
  const user = await getUserByEmail(req.body.email);
  return res.send(user);
};

exports.deleteUser = async (req, res) => {
  const query = "DELETE from user_table WHERE email_id = $1;";
  const deleting = await db.query(query, [req.body.email]);
  const user = await getAllUser();
  return res.send(user);
};

// for (let i = 0; i < users.length; i++) {
//   if (i == req.params.id) {
//     const oldPassword = users[i].password;
//     users[i] = {
//       name: users[i].name,
//       password: req.body.password
//     };
//     res.send(
//       `Old Password: ${oldPassword} \nNew password is set to : ${users[i].password}`
//     );
//   }
// }

//to check :
//foreach , map functions

// object.create . object.clone

//json.tostringfy

//fetch

//promises

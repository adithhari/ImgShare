require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const pgp = require("pg-promise");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

require("./routes/user.route")(router);

app.use("/", router);

app.listen(process.env.app_port);

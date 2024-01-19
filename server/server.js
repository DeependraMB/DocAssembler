const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
require("dotenv").config();
const authRoute = require('./Routes/authRoute');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use("/user",authRoute);

app.listen(PORT, () => {
  console.log("\x1b[44m\x1b[33m%s\x1b[0m", `Server is running on port ${PORT}`);
});
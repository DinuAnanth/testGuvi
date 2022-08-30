const express = require("express");
const router=express.Router();
const cors = require("cors");
const Login=require("./Utility/Login");
const signup=require("./Utility/SignUp")
const verifyToken=require("./middleware/verifyToken");
const mysql = require("mysql2");
const bodyparser=require("body-parser");
const app = express();
const dbConfig = require("./Database/dbconfig.json");
const db=mysql.createConnection(dbConfig)
app.use(express.json());
app.use(cors());
app.post("/verifyUsers",Login.Login)
app.use(bodyparser.urlencoded({extended : true}))
app.post("/insert",signup.signup)
app.listen(3001, () => {
  console.log("server started @3001");
});
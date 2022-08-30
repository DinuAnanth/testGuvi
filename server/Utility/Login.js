const executeQuery=require("../Database/executeQuery")
const jwt = require("jsonwebtoken");
const mysql=require("mysql");
const CONSTANTS=require("../constants/constants");
const bodyparser = require("body-parser");
const express=require("express");
const app = express();
const genToken = (username) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        data: {
          user: username,
        },
      },
      "secretKey",
      { expiresIn: "1h" },
      (err, encoded) => {
        if (err) {
          reject(CONSTANTS.JWT_ERR);
        }
        resolve(encoded);
      }
    );
  });
};
app.use(express.json)
module.exports = {
  Login: async function (req, res) {
    console.log("body", req.body);
    let username = req.body.username;
    let pass = req.body.pass;
    let result = await executeQuery.executeQuery(
      `select * from users where username ='${username}'`
    );
    if (result.length > 0) {
      let dbpassword=result[0].pass;
      if(dbpassword==pass){

        let res_token = await genToken(username).catch((err) => err);
      if (res_token === CONSTANTS.JWT_ERR) {
        res.send(500);
      } else {
        res.json({
          token: res_token,
        });
      }
      }
      else{
        res.status(500).send("UserName / Passsword is Wrong");
      }
     
    } else {
      res.status(500).send("UserName / Passsword is Wrong");
    }
    
   
  },
};
const express = require("express");
const router=express.Router();
const mysql=require("mysql");
const dbConfig = require("../Database/dbconfig.json");
const db=mysql.createConnection(dbConfig)
module.exports = {signup: async function(req,res){ const username=req.body.username;
  const pass=req.body.pass;
  const email=req.body.email;
  db.query('INSERT INTO users (username, pass, email) VALUES (?,?,?)',[username,pass,email], (err,result)=> {
    if(err){
        console.log(err)
    }
    else{
        res.send("success")
    }
  })}}
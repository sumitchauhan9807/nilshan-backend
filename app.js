const express = require('express');
const app = express()


app.get("/",(req,res,next)=>{
  res.send("hello")
})


app.listen("4000",()=>{
  console.log("server working")
})
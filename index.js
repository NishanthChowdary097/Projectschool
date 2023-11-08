const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const fs=require('fs')
const async = require("hbs/lib/async")

const app = express()


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('frontend'));

mongoose.connect("mongodb://127.0.0.1:27017/ProjectSchool")

var db = mongoose.connection;

//Teacher side
app.get('/Teacher',(req,res)=>{
    res.sendFile(__dirname+'/frontend/login.html')
})

//Teacher Signup
app.post("/TeacherSignup",async (req,res)=>{
  try{
    const check = await db.collection("teachers").findOne({usename:req.body.username});
    if(check){
      res.send("user name already exists")
    }else{
      var unm=req.body.username;
      var pwd=req.body.password;
      var ail=req.body.eml;
      const saltRounds =10;
      const hastpass= await bcrypt.hash(pwd,saltRounds);
      dat={
        usename:unm,
        pass:hastpass,
        email:ail
      }
      db.collection("teachers").insertOne(dat, function (err, collection) {
        if (err) throw err;
        console.log("Done");
      });
      res.send("Acc Created");
    }
  }
  catch{
    res.send("err occured try again");
  }
})
//Teacher Login
app.post("/TeacherLogin",async (req,res) =>{
  try{
    const check = await db.collection("teachers").findOne({usename:req.body.username});
    if(!check){
      res.send("username not found");
    }else{
    const isPasswordMatch =await bcrypt.compare(req.body.password,check.pass); 
      if(isPasswordMatch){
        res.send("home");
      }else{
        res.send("wrong Password")
      }
    }
  }catch{
    res.send("err occured try again");
  }
})
//STudents side
app.get('/Student',(req,res)=>{
  res.sendFile(__dirname+'/frontend/stud.html')
})
//Student signup
app.post("/StudentSignup",async (req,res)=>{
  try{
    const check = await db.collection("students").findOne({usename:req.body.username});
    if(check){
      res.send("user name already exists")
    }else{
      var unm=req.body.username;
      var pwd=req.body.password;
      var ail=req.body.eml;
      const saltRounds =10;
      const hastpass= await bcrypt.hash(pwd,saltRounds);
      dat={
        usename:unm,
        pass:hastpass,
        email:ail
      }
      db.collection("students").insertOne(dat, function (err, collection) {
        if (err) throw err;
        console.log("Done");
      });
      res.send("Acc Created");
    }
  }
  catch{
    res.send("err occured try again");
  }
})
//Login for Studetpanal
app.post("/StudentLogin",async (req,res) =>{
  try{
    const check = await db.collection("students").findOne({usename:req.body.username});
    if(!check){
      res.send("username not found");
    }else{
    const isPasswordMatch =await bcrypt.compare(req.body.password,check.pass); 
      if(isPasswordMatch){
        res.send("home");
      }else{
        res.send("wrong Password")
      }
    }
  }catch{
    res.send("err occured try again");
  }
})
//Jquiry
//check username for Teachers
app.get('/checkTeacher', (req, res) => {
  const name = req.query.name;
  db.collection("teachers").findOne({usename: name }, (err, existingUser) => {
    if (err) {
        console.error('Error querying the database:', err);
        client.close();
        return res.status(500).json({ error: 'Database error' });
    }

    if (existingUser) {
        res.json({ exists: true });
    } else {
        res.json({ exists: false });
    }
})});
//check username for student
app.get('/checkStudent', (req, res) => {
  const name = req.query.name;
  db.collection("students").findOne({usename: name }, (err, existingUser) => {
    if (err) {
        console.error('Error querying the database:', err);
        client.close();
        return res.status(500).json({ error: 'Database error' });
    }

    if (existingUser) {
        res.json({ exists: true });
    } else {
        res.json({ exists: false });
    }
  })
});

//Error page for unregistered links

app.get("*",(req,res)=>{
  res.sendFile(__dirname + "/frontend/404.html");
})

app.listen(3000, ()=>{
    console.log("server is running at port 3000")
})
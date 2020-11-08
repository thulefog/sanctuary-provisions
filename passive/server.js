

var express = require("express");
var app = express();

var router = express.Router();

//adjust for directory refactoring /views, /app, etc...
var path = __dirname +'/'; 

app.use( express.static(".") );

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
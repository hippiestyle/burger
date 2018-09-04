var express = require("express"); 
var bodyParser = require("body-parser"); 
var routes = require("./controllers/burger_controller")
var orm = require("./config/orm.js");

var exphbs = require("express-handlebars"); 

var app = express(); 
var PORT = process.env.PORT || 8080; 


//setting handlebars as the default view engine
app.use(bodyParser.urlencoded({extended: true}));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars"); 

app.use("/", routes); 

app.listen(PORT, function(){
    console.log("app is listening on Port: " + PORT);
})
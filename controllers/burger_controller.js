
var express = require("express"); 
var burger = require("../models/burger");
var router = express.Router(); 




    router.get("/", function(req,res) {
        console.log("pinging the server, great!"); 
    });

    // router.push("/api/burgers", function(req,res){
    //     console.log("cool, got the push"); 
    // }); 


module.exports = router; 
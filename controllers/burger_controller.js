
var express = require("express"); 
var burger = require("../models/burger");
var router = express.Router(); 

var app = express(); 

    // currently works -- gets the list of the burgers and presents them on to buttons 
    router.get("/", function(req,res) {

        burger.selectAll("burgers", function(data) {

            var hbs = {
                burgers: data
        }
        console.log("HBS OBJECT: ",  hbs)
        res.render("index", hbs); 
       })
    });
    //currently not working -- cant find POST 
    router.post("/burgers", function(req, res){
        burger.insertOne(req.body.burger_name, 0)
        console.log("req body: ",  req.body); 
        res.redirect("/"); 

    })

    //currently works -- adds burger to the list 
    router.put("/burgers/:id", function(req, res) {
        var userId = req.params.id; 
        burger.updateOne("burgers", "devoured", 1, "id", userId)
        console.log("You officially updated devoured " + userId +" to 1"); 
        res.redirect("/")
    }); 

    


    // router.push("/api/burgers", function(req,res){
    //     console.log("cool, got the push"); 
    // }); 


module.exports = router; 
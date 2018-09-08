
var express = require("express"); 
var burger = require("../models/burger");
var router = express.Router(); 

    // currently works -- gets the list of the burgers and presents them on to buttons 
    router.get("/", function(req,res) {

        burger.selectAll("burgers", function(data) {

            var hbs = {
                burgers: data
        }
        res.render("index", hbs); 
       })
    });
    //works
    router.post("/burgers/", function(req, res) {
        burger.insertOne(req.body.burger_name, 0)
        res.redirect("/"); 

    })

    //currently works -- adds burger to the list 
    router.post("/burgers/:id", function(req, res) {
        console.log("gets here");
        var userId = req.params.id;         
        burger.updateOne("burgers", "devoured", 1, "id", userId,function(){
            
            res.redirect("/")
            
        });
        
    }); 


    

    


    // router.push("/api/burgers", function(req,res){
    //     console.log("cool, got the push"); 
    // }); 


module.exports = router; 
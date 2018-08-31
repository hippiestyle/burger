var connection = require("./connection");

var orm = {

    selectAll: function() {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err,result) {
            if (err) throw err
            console.log(result);
        })  
    }, 

   insertOne: function(burger, devoured) { 
        var queryString = "INSERT INTO burgers WHERE ??";
        connection.query(queryString,
        {     
            burger_name: burger,
            devoured: false
        }, function(error, result) {
            if (err) throw err 
            console.log(result); 

        }
        
    };

    function updateOne() { 

    };
}
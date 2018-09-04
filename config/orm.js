var connection = require("./connection");

var orm = {
//working - prints out as a console log for now. (returns the result in selectAll function)
    selectAll: function(table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function(err,result) {
            if (err) throw err
            for (var i = 0; i < result.length; i++ ) {
                console.log(result[i].burger_name); 
            }  return result; 
        })  
    }, 
//works adds new burger using the burger and boolean. 
   insertOne: function(burger, boolean) { 
        var queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString,
        {     
            burger_name: burger,
            devoured: boolean
        }, 
        function(err, result) {
            if (err) throw err 
            console.log("Updated " + result.changedRows + " rows..."); 
        })
        
    }, 
// works right now, updates devoured for now. 
    updateOne: function(table, devoured, boolean, locId, id) { 
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        
        connection.query(queryString, [table, devoured, boolean, locId, id], 
       
            function(err,result) {
                if (err) throw err
                console.log("Updated:  " + result.message); 
            })

    }
};  


module.exports = orm; 
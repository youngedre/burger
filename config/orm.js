var connection = require("./connection.js");

function printqMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb){
        // console.log("orm "+ cb);
        var query = "SELECT * FROM " + tableInput+";";
        connection.query(query, function(err, result){
            // console.log("orm2" + cb);
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, col, vals, cb){
        var query = "Insert into " + table;
        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += qMarks(vals.length);
        query += ") ";
        console.log(query);

        connection.query(query, vals, function(err, result){
            if(err){
                throw err;
            }
        });
    },

    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }
};


var connection = require("./connection.js");

function qMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
var orm = {
    selectAll: function(tableInput, cb){
        // console.log("orm "+ cb);
        var query = "SELECT * FROM " + tableInput+";";
        connection.query(query, function(err, result){
            // console.log("orm2" + cb);
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, col, vals, cb){
        var query = "Insert into " + table;
        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += qMarks(vals.length);
        query += ") ";
        console.log(query);

        connection.query(query, vals, function(err, result){
            if(err){
                throw err;
            }
        })
    }
};

module.exports = orm;

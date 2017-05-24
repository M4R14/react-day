var express = require('express')
var app = express()

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'react'
});

connection.connect();


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    console.log('w');

    connection.query('SELECT * from todo', function (error, results, fields) {
        res.set('Access-Control-Allow-Origin', '*');
        res.send(results)
    });

    // connection.end();
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
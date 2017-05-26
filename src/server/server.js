var express = require('express')
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var app = express()

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'react'
});

connection.connect();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // to support URL-encoded bodies
app.use(upload.array()); // for parsing multipart/form-data

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    console.log('w');

    connection.query('SELECT * from todo', function (error, results, fields) {
        res.set('Access-Control-Allow-Origin', '*');
        res.send(results)
    });

    // connection.end();
})

app.post('/profile', upload.array(), function (req, res, next) {
  // req.body contains the text fields
    res.set('Access-Control-Allow-Origin', '*');  
    res.send(req.body)  
})

app.get('/get-insert-todo/:text', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(req.params)
    // connection.end();
})

app.post('/insert-todo', function (req, res) {
    // console.log(req);
    // res.set('Access-Control-Allow-Origin', '*');
    // res.set('Access-Control-Allow-Methods', '*');   

    var query_txt = "INSERT INTO `todo` (`id`, `text`, `done`) VALUES ('"+req.body.id+"', '"+ req.body.text +"', '0');"
    console.log( Date.now() +" : "+ query_txt);
    connection.query(query_txt, function (error, results, fields) {
        res.send('OK!!')
    });
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
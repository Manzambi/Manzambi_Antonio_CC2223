var http = require("http");
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

//iniciando la conexion
var connection = mysql.createConnection({
    host     : 'localhost', //mysql database host name
    user     : 'root', //mysql database user name
    password : '', //mysql database password
    database : 'pizzahut' //mysql database name
  });
  
   //ligando a mysql
   connection.connect(function(err) {
   if(err) 
       console.log("error es =>"+err)
    else
      console.log('ya estas conectado a la base de datos...')
  })
  //Ligando a mysql  

//create app server   puerto = 3306

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

//creando servicios
var server = app.listen(3000,  "127.0.0.1", function () {

    var host = server.address().address //aqui estamos dando un enderezo
    var port = server.address().port  // aqui estamos dando una puerta para escuchar los gets que vendran de nuestra base de datos
  
    console.log("Esta aplicacion esta escutando por http://%s:%s", host, port)
  
  });

module.exports.connection = connection;
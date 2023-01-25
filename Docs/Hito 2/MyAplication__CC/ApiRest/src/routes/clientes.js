const { Router, request, response } = require('express');
const router = Router();
const _ = require('underscore');
const data = require('../JSONs/clientes.json');
var clientes =[];
//import {testarCliente} from "../Assert/testCliente";

////////////////////   Todo relacionado a base de datos
// start conexion (Iniciando la navegacion)
const databasess = require("../services/databaseService")
var conx = databasess.connection;

// creando servicios 
////////////////////  Todo refete a base de datos


//  rest api  getClientes
// vamos a importar el modulo testCliente
var testCli = require("../Assert/testCliente"); // importamos el modulo
var test = testCli.testarCliente();  // usamos la funcion dentro del modulo


router.get('/', (req, res) => {
  conx.query('select * from clientes', function (error, results, fields) {
        //clientes.push((results));
        if (error) throw error;
        else{
              res.end(JSON.stringify(results));
         }
        
      });  
  
});

////
// getCliente id
router.get('/:id', (req, res) => {
  conx.query('select * from clientes where Id=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
});

// Crear nuevos Clientes 
router.post('/', (req, res) => {
    var params  = req.body;
    console.log(params);
    conx.query('INSERT INTO clientes SET ?', params, function (error, results, fields) {
       if (error) throw error;
       res.end('Datos adicionados con exito '+JSON.stringify(results));
     });
});

// Editar Clientes 
router.put('/:id', (req, res) => {
  const id = req.params.id;
  //conx.query('UPDATE `clientes` SET `nombre`=?,`apellido`=?,`direccion`=?,`email`=?, `telefono`=?  where `id`=?', [req.body.nombre,req.body.apellido, req.body.direccion, req.body.email, req.body.telefono, req.params.id], function (error, results, fields) {
  conx.query('UPDATE clientes SET?  where id =?', [req.body, id], function (error, results) {
        if (error) throw error;
        res.end(JSON.stringify("Datos editados con exitos "+results));
      });
});


// deletar clientes
router.delete('/:id', (req, res) => {
    console.log(req.body);
    conx.query('DELETE FROM `clientes` WHERE `Id`=?', [req.params.id], function (error, results, fields) {
       if (error) throw error; 
       res.end("eliminado con exito");  
     })

})

module.exports = router;
module.exports.clientes = clientes;




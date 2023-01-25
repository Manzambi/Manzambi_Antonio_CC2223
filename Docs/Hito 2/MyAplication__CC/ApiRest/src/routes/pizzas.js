const { Router, request } = require('express');
const router = Router();
const _ = require('underscore');

const data = require('../JSONs/pizzas.json');

  ////////////////////   Todo relacionado a base de datos
// start conexion (Iniciando la navegacion)
const databasess = require("../services/databaseService")
var conx = databasess.connection;

// creando servicios 
////////////////////  Todo refete a base de datos

//getPizzas
router.get('/', (req, res) => {
    conx.query('select * from pizzas', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
});

//get id pizzas
router.get('/:id', (req, res) => {
    conx.query('select * from pizzas where Id=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
});


// crear Pizzas
router.post('/', (req, res) => {
    var params  = req.body;
   console.log(params);
   conx.query('INSERT INTO pizzas SET ?', params, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});


// editar pizzas
router.put('/:id', (req, res) => {
    const id = req.params.id;
    //conx.query('UPDATE `pizzas` SET `sabor`=?,`precio`=?, where `Id`=?', [req.body.sabor,req.body.precio, req.params.id], function (error, results, fields) {
    conx.query('UPDATE pizzas SET? where Id=?', [req.body, id], function (error, results) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
})

router.delete('/:id', (req, res) => {
    console.log(req.body);
    conx.query('DELETE FROM `pizzas` WHERE `Id`=?', [req.params.id], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
})


module.exports = router;
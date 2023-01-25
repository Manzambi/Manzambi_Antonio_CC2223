const { Router, request } = require('express');
const router = Router();
const _ = require('underscore');

const data = require('../JSONs/gerentes.json');




  ////////////////////   Todo relacionado a base de datos
// start conexion (Iniciando la navegacion)
const databasess = require("../services/databaseService")
var conx = databasess.connection;

// creando servicios 
////////////////////  Todo refete a base de datos



//Getgerentes
router.get('/', (req, res) => {
    conx.query('select * from gerentes', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
});

// getIdGerente
router.get('/:id', (req, res) => {
    conx.query('select * from gerentes where Id=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
});

// crear gerente
router.post('/', (req, res) => {
    var params  = req.body;
    console.log(params);
    conx.query('INSERT INTO gerentes SET ?', params, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
});  

// editar gerente 
router.put('/:id', (req, res) => {
  const id = req.params.id;
    conx.query('UPDATE gerentes SET? where Id=?', [req.body, id], function (error, results) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
});

router.delete('/:id', (req, res) => {
    console.log(req.body);
    conx.query('DELETE FROM `gerentes` WHERE `Id`=?', [req.params.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end();
	});
})

module.exports = router;
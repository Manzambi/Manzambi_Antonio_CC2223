const { json } = require("body-parser");
var moduloClientes = require("../routes/clientes")
//var clientes = moduloClientes.clientes;

let mensajeExito = "Los datos han sido testados y padsados"
const array = [];

function testarCliente(){
    return mensajeExito
}

function testarClient(clientes){
   for(i of clientes)
          return clientes
    

} 

module.exports.testarCliente = testarCliente;
module.exports.testarClient = testarClient;
//Expect:
//expect( foo ).to.be.a( 'string' );
//expect( foo ).to.equal( 'bar' );
//expect( foo ).to.have.length( 3 );
//Should:
//clientes.should.be.a( 'string' );
//clientes.should.equal( 'bar' );
//clientes.should.have.length( 3 );


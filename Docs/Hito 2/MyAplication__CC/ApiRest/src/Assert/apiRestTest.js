const chai = require("chai");
const expect = chai.expect;
const url = "http://localhost:8080";
chai.use(require("chai-http"));


// teste del getClientes 

describe('get All Clientes: ',()=>{
    it("exit testing clientes", function (done) {
        chai.request(url)
        .get('/api/clientes')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
   });


// teste get Pizzas

describe('get All Pizzas: ',()=>{
    it('exit testing getPizzas', (done) => {
    chai.request(url)
    .get('/api/pizzas')
    .end( function(err,res){
    expect(res).to.have.status(200);
    done();
    });
    });
   });




// test get Gerentes 
   describe('get All gerentes: ',()=>{
    it('exit testing getGerentes', (done) => {
    chai.request(url)
    .get('/api/gerentes')
    .end( function(err,res){
    expect(res).to.have.status(200);
    done();
    });
    });
   });


////////////////////////////////////////// tests Posts 


describe('Insert a cliente: ',()=>{
    it('Cliente inserido con exito', (done) => {
    chai.request(url)
    .post('/api/clientes')
    .send({nombre: "Nicks", apellido: "Daniel", direccion: "calle hernandez", "email": "manza", "telefono":"935193722"})  //(nombre, apellido, direccion, email,telefono
    .end( function(err,res){
    expect(res).to.have.status(200);
    done();
    });
    });
   });
   

   describe('Insert a gerents: ',()=>{
    it('gerente inserido con exito', (done) => {
    chai.request(url)
    .post('/api/gerentes')
    .send({nombre: "bigzzag", apellido: "g2222", "email": "ge@"})  //( nombre, apellido, email)
    .end( function(err,res){
    expect(res).to.have.status(200);
    done();
    });
    });
   });



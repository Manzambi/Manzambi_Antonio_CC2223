//const { request, response } = require("express")
const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors()) // para que permita la peticion desde otros servicios
//const http = require("http");

//Clientes. Json 
let clientes = 
[{
        "_numeroCliente" : 1,
        "_nombre" : "Maicom",
        "_direccionDom" : "calle del beiro",
        "_telefono" : 613625912,        
},
{
    "_numeroCliente" : 2,
    "_nombre" : "Jose",
    "_direccionDom" : "Plaza del Toro",
    "_telefono" : 613625930,        
}
]
// Pizzasa. Json
let pizzas = 
[{
    "_idPizza" : 1,
    "_tamano" : 10,
    "_sabor" : "Queso",
    "_Precio" : 3.80,    
},
{
    "_idPizza" : 2,
    "_tamano" : 10,
    "_sabor" : "Queso",
    "_Precio" : 3.80,    
}

]

// api de bien venida
app.get('/', (request, response) => {
    response.send('<h1> Bien Venido a api de PizzaHut </h1>')
}) 

//getters de los clientes 
app.get('/api/clientes', (request, response) => {
    response.json(clientes)
}) 

app.get('/api', (request, response) =>{
       response.send("la pagina solicitad no exisste le falta una agregacion")
} )

app.get('/api/clientes/:id', (request, response) => {
    const id = Number(request.params.id)
          //response.send(id)
    const cliente = clientes.find(cliente => cliente._numeroCliente == id)
    if(cliente)
       response.json(cliente)
    else
       response.status(404).end()
    


})


//delete cliente
app.delete('/api/clientes/:id', (request, response) => {
       const id = Number(request.params.id)
       clientes = clientes.filter(cliente => cliente._numeroCliente != id)
        response.json(clientes)
})

//getters de las pizzas
app.get('/api/pizzas', (request, response) => {
    response.json(pizzas)
}) 

app.get('/api/pizzas/:id', (request, response)=>{
      const id = Number(request.params.id)
      const piza = pizzas.find(piza => piza._idPizza == id)
      if(piza)
            response.json(piza)
       else
            response.status(404).end()
} )


//delete de las pizzas
app.delete('/api/pizzas/:id', (request, response) => {
      const id = Number(request.params.id)
      pizzas = pizzas.filter(pizza => pizza._idPizza != id)
})

// configuraciones de los puertos
const Port = 3000
app.listen(Port)
console.log('servidor correndo en puerta' +Port)

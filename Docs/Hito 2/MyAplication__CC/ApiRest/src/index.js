const assert = require("assert");   // biblioteca de aserciones para hacer pruebas 
// npm i request --save-dev mocha este comando se usa para instalar mocha

require('dotenv').config
const express = require('express');
const app = express();
const morgan = require('morgan');
//const cnxBD = require("./conexion/conexion")

const bodyParser = require('body-parser');

app.use(bodyParser.json());


//Settings
app.set('port', process.env.PORT || 8080);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use('/', require('./routes/index'));
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/pizzas', require('./routes/pizzas.js'));
app.use('/api/gerentes', require('./routes/gerentes.js'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
}
)

class Todos{
    constructor(){}
    List(){
        return [...this.Todos]
    }

    add(title){
        let todo = {
            title:title,
            completed: false,
        }
        this.todos.push(todo);
    }

    complete(title){
        let todoFound = false;
        this.todos.forEach((todo)=>{
            if(todo.title == title){
                todo.complete = true;
                todoFound = true;
                return;
            }
        });
        if(!todoFound){
            throw new console.error(`No todo was found the title: "${title}"`);
        }
    }

}

module.exports = Todos;
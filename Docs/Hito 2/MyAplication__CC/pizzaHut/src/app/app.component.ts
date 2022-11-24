import { Component } from '@angular/core';
import {ClienteComponent} from './cliente/cliente.component'
import { ProductPizzaComponent } from './product-pizza/product-pizza.component';
import { PedidoComponent } from './pedido/pedido.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pizzaHut';
  // cliente:ClienteComponent = new ClienteComponent()
   //pizza: ProductPizzaComponent = new ProductPizzaComponent()
   pedido: PedidoComponent = new PedidoComponent()

   constructor(){
    // this.cliente.validatorNombre()
     //this.pizza.pruebaLog()
     // this.pedido.pruebalog()
   }

}

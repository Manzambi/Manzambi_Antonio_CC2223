import { Component, OnInit } from '@angular/core';
import { ClienteComponent } from '../cliente/cliente.component';
import { Pizza } from '../classes/pizza';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {


  pizza:Pizza = new Pizza()
  cliente: ClienteComponent = new ClienteComponent() 
  private _numPedido: number = 0;
  private _nombrePedido: String = ""; 
  private _nombreCliente: String = "maicom";
  private agrego:string = "choriZo"
  

  // getter de numdel Pedido
  
  public get numPedido(): number {
    return this._numPedido;
  }
  
  // Getters y setters de nombre Cliente
  public get nombreCliente(): String {
    return this._nombreCliente;
  }
  public set nombreCliente(value: String) {
    this._nombreCliente = value;
  }

   // console log prueba
   pruebalog()
   {
    for(let i of this.pizza.tablaPrecios)
    {
        if(this.agrego.toUpperCase() == i.agrego.toUpperCase())
        {
           console.log(this.agrego.toUpperCase() == i.agrego.toUpperCase())
        }
        
    }
    
   }

  
 // getters y setters de nombre de pedido
  
  public get nombrePedido(): String {
    return this._nombrePedido;
  }
  public set nombrePedido(value: String) {
    this._nombrePedido = value;
  }


  // metodo que permite agregar sabor
  public agregarSabor(nombrePedido:string, saborAgregado:string)
  { 
        for(let i of this.pizza.tablaPrecios)
        {
            if(saborAgregado.toUpperCase() == i.agrego.toUpperCase())
            {
              this._nombrePedido = nombrePedido;
              this.agrego += saborAgregado;
            }
        }
        
  }
  
  verificarSabores() : boolean{
    for(let i of this.pizza.tablaPrecios)
    {
      if(this.agrego.toUpperCase() == i.agrego.toUpperCase())
      {
          return true
      }
     
    }
     return false;
  }
  // getters y setters del sabor de la pizza
  
  constructor() { }


  ngOnInit(): void {
  }

}

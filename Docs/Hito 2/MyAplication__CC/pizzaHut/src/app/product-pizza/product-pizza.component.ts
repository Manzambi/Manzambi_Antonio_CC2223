import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../classes/pizza';

@Component({
  selector: 'app-product-pizza',
  templateUrl: './product-pizza.component.html',
  styleUrls: ['./product-pizza.component.css']
})
export class ProductPizzaComponent implements OnInit {

  
  constructor(private clienteHttp:HttpClient) { }
  
  localhostClientes = "http://localhost:3000/api/clientes"
  piza:Pizza = new Pizza()
  pizas:any = [
    {"_numeroCliente": 2,
    "_nombre": "Jose",
    "_direccionDom": "Plaza del Toro",
    "_telefono": 613625930
  }
  ]
  bau:any
  private _numPizza:number = 0;
  private _tamano: number = 10;
  private _sabor: String = "Queso";
  private _Precio: number = 3.80;
  tablaPrecios = [
    { "agrego": "Jamon", "PrecioAgregacion" : "+0.40€" },
    { "agrego": "Atun", "PrecioAgregacion" : "+0.60€" },
    { "agrego": "Chorizo", "PrecioAgregacion" : "+0.60€" },
    { "agrego": "Champion", "PrecioAgregacion" : "+0.60€" },
    { "agrego": "queso", "PrecioAgregacion" : "+0.20€" },
];

  //pruebas en console.log
  pruebaLog(){
      console.log(this.tablaPrecios)
      for(let i of this.tablaPrecios){
          console.log(i)
      }
  }
  
  //getters de pizza
  public get numPizza(): number {
    return this._numPizza;
  }
 

  // gettrs y setters tamano
  public get taman(): string {
    return this._tamano + " cm";
  }

  /*
  public set tamano(value: number) {
    if(this._tamano==10)
         this._tamano = value;
        
  }*/

  // getters y setters del sabor
  public get sabor(): String {
    return this._sabor;
  }
  public set sabor(value: String) {
    this._sabor = value;
  }
  
  
  // getters y setters del precio
  public get Precio(): number {
    return this._Precio;
  }
  public set Precio(value: number) {
    this._Precio = value;
  }


  ngOnInit(): void {
    this.clienteHttp.get("http://localhost:3000/api/clientes").subscribe(res=> 
      { this.pizas = res;
        console.log("este es el console "+this.pizas)
    })
  }

}

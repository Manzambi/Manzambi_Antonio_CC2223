import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  private _numeroCliente?:number; 
  private _nombre: string = "maicom";  
  private _direccionDom: string = "calle del beiro";
  private _telefono: number = 613625912;
  varaux:any
  // getter del numero de pedido
  public get numeroPedido() {
    return this._numeroCliente;
  }
 
 // getter y setters del nombre
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }   

  //getters y setters de direccionDom
  public get direccionDom(): string {
    return this._direccionDom;
  }
  public set direccionDom(value: string) {
    this._direccionDom = value;
  }

  //getters y setteres de telefono
  public get telefono(): number {
    return this._telefono;
  }
  public set telefono(value: number) {
    this._telefono = value;
  }

  validatorNombre(): boolean{
    //https://dev.to/soyleninjs/6-formas-de-convertir-un-string-en-array-con-javascript-320n
    this.varaux = this._nombre.split("")
    for(let i of this.varaux){
        if(isNaN(i)){
            continue
        }
       return false    
    }
    return true
       
  }

  validarTelefone():boolean{
     this.varaux = this.telefono + ""
     if(this.varaux.length == 9 && this.varaux.startsWith("6")){
        return true
     }
     return false
  }


  validarDireccion(): string{
    if(this._direccionDom == ""){
        return "is empty"
    }
    return "is full"
  }
  constructor() { }

  ngOnInit(): void {
  }

}

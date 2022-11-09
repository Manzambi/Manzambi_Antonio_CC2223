import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  private _numeroCliente = null; 
  private _nombre: string = "";  
  private _direccionDom: string = "";
  private _telefono: number = 0;

  public get numeroPedido() {
    return this._numeroCliente;
  }
 

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }

  public get direccionDom(): string {
    return this._direccionDom;
  }
  public set direccionDom(value: string) {
    this._direccionDom = value;
  }
  public get telefono(): number {
    return this._telefono;
  }
  public set telefono(value: number) {
    this._telefono = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

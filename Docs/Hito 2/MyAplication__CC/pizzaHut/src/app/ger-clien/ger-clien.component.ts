import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ger-clien',
  templateUrl: './ger-clien.component.html',
  styleUrls: ['./ger-clien.component.css']
})
export class GerClienComponent implements OnInit {
  id?:number
  nombre_gerente:string = ""
  nombre_cliente:string=""
  fecha_atencion =""
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.css']
})
export class GerenteComponent implements OnInit {

   id: number= 0
   nombre:string = ""

  constructor() { }

  ngOnInit(): void {
  }



}

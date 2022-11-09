import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-pizza',
  templateUrl: './product-pizza.component.html',
  styleUrls: ['./product-pizza.component.css']
})
export class ProductPizzaComponent implements OnInit {

  constructor() { }

  numPizza:String = ""
  tamano:String = ""
  sabor:String="Queso"
  

  ngOnInit(): void {
  }

}

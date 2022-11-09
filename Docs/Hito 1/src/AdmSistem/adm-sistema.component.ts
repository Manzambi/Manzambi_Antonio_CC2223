import { Component, OnInit } from '@angular/core';
import {  UserComponent } from '../user/user.component';

@Component({
  selector: 'app-adm-sistema',
  templateUrl: './adm-sistema.component.html',
  styleUrls: ['./adm-sistema.component.css']
})
export class AdmSistemaComponent implements OnInit {

  constructor() { }

  private _username: string = "";
  private _passord: number = 0;
  private user = new UserComponent;

  crearUsuario(user:UserComponent){
          this.user = user;
   }
   //crearUsuario(){ }
  
  ngOnInit(): void {
    
  }

}

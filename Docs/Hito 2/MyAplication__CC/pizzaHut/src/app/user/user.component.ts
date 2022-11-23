import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  private _username: string = "";
  private _passord: number = 0;

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  
  public get passord(): number {
    return this._passord;
  }
  public set passord(value: number) {
    this._passord = value;
  }

  ngOnInit(): void {
  }

}

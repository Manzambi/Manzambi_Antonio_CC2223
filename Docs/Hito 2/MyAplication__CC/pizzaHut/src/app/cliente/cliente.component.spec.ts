import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteComponent } from './cliente.component';

describe('ClienteComponent', () => {
  let component: ClienteComponent;
  let fixture: ComponentFixture<ClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test del nombre del cliente, el numbre no puede contener algun numero', () => {
    expect(component.validatorNombre()).toBeTruthy()   //https://dev.to/soyleninjs/6-formas-de-convertir-un-string-en-array-con-javascript-320n
 
  });

  it('Test del numero del telefono del cliente, tiene que tener 9 digitos y tiene que empezar con 6', () => {
    expect(component.validarTelefone()).toBeTruthy()   //https://dev.to/soyleninjs/6-formas-de-convertir-un-string-en-array-con-javascript-320n
    
  });

  it('A direccion del cliente no puede se nula', () => {
    expect(component.validarDireccion()).toBe("is full")  //https://dev.to/soyleninjs/6-formas-de-convertir-un-string-en-array-con-javascript-320n 
  });

  

});





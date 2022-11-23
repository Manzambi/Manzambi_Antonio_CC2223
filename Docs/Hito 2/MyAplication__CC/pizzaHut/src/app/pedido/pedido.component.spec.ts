import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoComponent } from './pedido.component';

describe('PedidoComponent', () => {
  let component: PedidoComponent;
  let fixture: ComponentFixture<PedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El nombre del cliente no puede ser vacio o nulo', () => {
    expect(component.nombreCliente).not.toBe("");
  });

  it('El nombre del cliente no puede ser vacio', () => {
    expect(component.nombreCliente).not.toBe(" ");
  });

  it('El agrego tiene que ser de acuero con lo que hay', () => {
    expect(component.verificarSabores()).toBeTrue();
  });

  it("el nombre que vamos asociar al pedido tiene qu ser nombre de un cliente q existe", () => {
      expect(component.nombreCliente.toLocaleUpperCase()).toBe(component.cliente.nombre.toUpperCase())
  })

});

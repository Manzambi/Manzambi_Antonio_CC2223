import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPizzaComponent } from './product-pizza.component';

describe('ProductPizzaComponent', () => {
  let component: ProductPizzaComponent;
  let fixture: ComponentFixture<ProductPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('verificacando si mi componente existe', () => {
    expect(component).toBeTruthy();
  });

  it('Por defeito la pizza normal es de queso', () => {
    expect(component.sabor).toBe("Queso");
  });

  it('El tamaño de la piza es de 10cm', () => {
    expect(component.taman).toEqual("10 cm");
  });

  it('El Precio de la pizza es 3.80€', () => {
    expect(component.Precio+"").toEqual("3.8");
  });

});

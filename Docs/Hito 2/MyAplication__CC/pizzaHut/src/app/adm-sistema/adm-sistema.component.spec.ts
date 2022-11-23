import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSistemaComponent } from './adm-sistema.component';

describe('AdmSistemaComponent', () => {
  let component: AdmSistemaComponent;
  let fixture: ComponentFixture<AdmSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

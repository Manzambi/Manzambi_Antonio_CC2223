import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerClienComponent } from './ger-clien.component';

describe('GerClienComponent', () => {
  let component: GerClienComponent;
  let fixture: ComponentFixture<GerClienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerClienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerClienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

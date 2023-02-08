import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarcuentaPageComponent } from './verificarcuenta-page.component';

describe('VerificarcuentaPageComponent', () => {
  let component: VerificarcuentaPageComponent;
  let fixture: ComponentFixture<VerificarcuentaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarcuentaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarcuentaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

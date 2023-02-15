import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElinicioPageComponent } from './elinicio-page.component';

describe('ElinicioPageComponent', () => {
  let component: ElinicioPageComponent;
  let fixture: ComponentFixture<ElinicioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElinicioPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElinicioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

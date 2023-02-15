import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElinicioComponent } from './elinicio.component';

describe('ElinicioComponent', () => {
  let component: ElinicioComponent;
  let fixture: ComponentFixture<ElinicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElinicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

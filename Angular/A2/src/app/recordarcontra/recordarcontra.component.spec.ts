import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordarcontraComponent } from './recordarcontra.component';

describe('RecordarcontraComponent', () => {
  let component: RecordarcontraComponent;
  let fixture: ComponentFixture<RecordarcontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordarcontraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordarcontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

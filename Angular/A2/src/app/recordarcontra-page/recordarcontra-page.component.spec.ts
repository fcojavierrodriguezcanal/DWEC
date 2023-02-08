import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordarcontraPageComponent } from './recordarcontra-page.component';

describe('RecordarcontraPageComponent', () => {
  let component: RecordarcontraPageComponent;
  let fixture: ComponentFixture<RecordarcontraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordarcontraPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordarcontraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

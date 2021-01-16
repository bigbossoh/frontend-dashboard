import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutticketComponent } from './ajoutticket.component';

describe('AjoutticketComponent', () => {
  let component: AjoutticketComponent;
  let fixture: ComponentFixture<AjoutticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseticketComponent } from './miseticket.component';

describe('MiseticketComponent', () => {
  let component: MiseticketComponent;
  let fixture: ComponentFixture<MiseticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiseticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiseticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

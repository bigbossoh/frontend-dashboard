import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsocieteComponent } from './clientsociete.component';

describe('ClientsocieteComponent', () => {
  let component: ClientsocieteComponent;
  let fixture: ComponentFixture<ClientsocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

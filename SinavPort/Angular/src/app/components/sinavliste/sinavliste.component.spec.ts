import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sinavlisteComponent } from './sinavliste.component';

describe('sinavlisteComponent', () => {
  let component: sinavlisteComponent;
  let fixture: ComponentFixture<sinavlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sinavlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sinavlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sinavComponent } from './sinav.component';

describe('sinavComponent', () => {
  let component: sinavComponent;
  let fixture: ComponentFixture<sinavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sinavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sinavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

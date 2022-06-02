import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { baslatComponent } from './baslat.component';

describe('baslatComponent', () => {
  let component: baslatComponent;
  let fixture: ComponentFixture<baslatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ baslatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(baslatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

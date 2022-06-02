import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { kayitComponent } from './kayit.component';

describe('kayitComponent', () => {
  let component: kayitComponent;
  let fixture: ComponentFixture<kayitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ kayitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(kayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

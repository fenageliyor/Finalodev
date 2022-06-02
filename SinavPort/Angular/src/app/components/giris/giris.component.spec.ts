import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { girisComponent } from './giris.component';

describe('girisComponent', () => {
  let component: girisComponent;
  let fixture: ComponentFixture<girisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ girisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(girisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

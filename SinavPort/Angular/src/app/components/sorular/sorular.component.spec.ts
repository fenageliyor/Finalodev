import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sorusComponent } from './sorus.component';

describe('sorusComponent', () => {
  let component: sorusComponent;
  let fixture: ComponentFixture<sorusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sorusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sorusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

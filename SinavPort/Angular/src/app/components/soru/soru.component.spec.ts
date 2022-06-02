import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { soruComponent } from './soru.component';

describe('soruComponent', () => {
  let component: soruComponent;
  let fixture: ComponentFixture<soruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ soruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(soruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

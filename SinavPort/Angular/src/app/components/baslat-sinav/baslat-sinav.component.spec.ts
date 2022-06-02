import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { baslatSinavComponent } from './baslat-Sinav.component';

describe('baslatSinavComponent', () => {
  let component: baslatSinavComponent;
  let fixture: ComponentFixture<baslatSinavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ baslatSinavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(baslatSinavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

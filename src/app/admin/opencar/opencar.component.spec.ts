import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencarComponent } from './opencar.component';

describe('OpencarComponent', () => {
  let component: OpencarComponent;
  let fixture: ComponentFixture<OpencarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpencarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpencarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

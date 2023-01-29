import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTeacherComponent } from './by-teacher.component';

describe('ByTeacherComponent', () => {
  let component: ByTeacherComponent;
  let fixture: ComponentFixture<ByTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

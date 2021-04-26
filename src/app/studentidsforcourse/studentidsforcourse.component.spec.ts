import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentidsforcourseComponent } from './studentidsforcourse.component';

describe('StudentidsforcourseComponent', () => {
  let component: StudentidsforcourseComponent;
  let fixture: ComponentFixture<StudentidsforcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentidsforcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentidsforcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

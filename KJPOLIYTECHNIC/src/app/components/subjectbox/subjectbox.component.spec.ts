import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectboxComponent } from './subjectbox.component';

describe('SubjectboxComponent', () => {
  let component: SubjectboxComponent;
  let fixture: ComponentFixture<SubjectboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

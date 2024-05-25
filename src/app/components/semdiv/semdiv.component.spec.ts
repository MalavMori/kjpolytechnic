import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemdivComponent } from './semdiv.component';

describe('SemdivComponent', () => {
  let component: SemdivComponent;
  let fixture: ComponentFixture<SemdivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemdivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

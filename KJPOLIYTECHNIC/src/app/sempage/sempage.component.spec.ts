import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SempageComponent } from './sempage.component';

describe('SempageComponent', () => {
  let component: SempageComponent;
  let fixture: ComponentFixture<SempageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SempageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SempageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

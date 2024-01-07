import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledCarouselComponent } from './controlled-carousel.component';

describe('ControlledCarouselComponent', () => {
  let component: ControlledCarouselComponent;
  let fixture: ComponentFixture<ControlledCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlledCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlledCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

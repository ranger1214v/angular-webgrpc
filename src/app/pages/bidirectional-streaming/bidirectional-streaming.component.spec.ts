import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidirectionalStreamingComponent } from './bidirectional-streaming.component';

describe('BidirectionalStreamingComponent', () => {
  let component: BidirectionalStreamingComponent;
  let fixture: ComponentFixture<BidirectionalStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidirectionalStreamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidirectionalStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

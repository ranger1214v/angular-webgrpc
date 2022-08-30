import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaryAndBidirectionalStreamingComponent } from './unary-and-bidirectional-streaming.component';

describe('UnaryAndBidirectionalStreamingComponent', () => {
  let component: UnaryAndBidirectionalStreamingComponent;
  let fixture: ComponentFixture<UnaryAndBidirectionalStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnaryAndBidirectionalStreamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnaryAndBidirectionalStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

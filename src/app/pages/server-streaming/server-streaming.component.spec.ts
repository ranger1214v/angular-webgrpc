import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerStreamingComponent } from './server-streaming.component';

describe('ServerStreamingComponent', () => {
  let component: ServerStreamingComponent;
  let fixture: ComponentFixture<ServerStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerStreamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

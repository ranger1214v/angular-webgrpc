import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientStreamingComponent } from './client-streaming.component';

describe('ClientStreamingComponent', () => {
  let component: ClientStreamingComponent;
  let fixture: ComponentFixture<ClientStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientStreamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaryComponent } from './unary.component';

describe('UnaryComponent', () => {
  let component: UnaryComponent;
  let fixture: ComponentFixture<UnaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

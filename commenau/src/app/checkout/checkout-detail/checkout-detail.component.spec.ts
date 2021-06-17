import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDetailComponent } from './checkout-detail.component';

describe('CheckoutDetailComponent', () => {
  let component: CheckoutDetailComponent;
  let fixture: ComponentFixture<CheckoutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

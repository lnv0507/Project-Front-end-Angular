import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistCustomerComponent } from './wishlist-customer.component';

describe('WishlistCustomerComponent', () => {
  let component: WishlistCustomerComponent;
  let fixture: ComponentFixture<WishlistCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

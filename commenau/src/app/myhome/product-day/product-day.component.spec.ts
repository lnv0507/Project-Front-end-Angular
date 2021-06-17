import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDayComponent } from './product-day.component';

describe('ProductDayComponent', () => {
  let component: ProductDayComponent;
  let fixture: ComponentFixture<ProductDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

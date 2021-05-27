import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVipComponent } from './header-vip.component';

describe('HeaderVipComponent', () => {
  let component: HeaderVipComponent;
  let fixture: ComponentFixture<HeaderVipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderVipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

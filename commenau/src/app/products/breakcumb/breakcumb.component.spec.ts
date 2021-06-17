import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakcumbComponent } from './breakcumb.component';

describe('BreakcumbComponent', () => {
  let component: BreakcumbComponent;
  let fixture: ComponentFixture<BreakcumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakcumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakcumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakcumbAboutComponent } from './breakcumb-about.component';

describe('BreakcumbAboutComponent', () => {
  let component: BreakcumbAboutComponent;
  let fixture: ComponentFixture<BreakcumbAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakcumbAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakcumbAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

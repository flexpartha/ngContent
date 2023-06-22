import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReusableComponentComponent } from './reusable-component.component';

describe('ReusableComponentComponent', () => {
  let component: ReusableComponentComponent;
  let fixture: ComponentFixture<ReusableComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

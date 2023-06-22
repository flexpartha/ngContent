import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleslotcontentprojectionComponent } from './singleslotcontentprojection.component';

describe('SingleslotcontentprojectionComponent', () => {
  let component: SingleslotcontentprojectionComponent;
  let fixture: ComponentFixture<SingleslotcontentprojectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleslotcontentprojectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleslotcontentprojectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

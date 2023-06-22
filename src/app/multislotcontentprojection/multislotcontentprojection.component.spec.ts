import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultislotcontentprojectionComponent } from './multislotcontentprojection.component';

describe('MultislotcontentprojectionComponent', () => {
  let component: MultislotcontentprojectionComponent;
  let fixture: ComponentFixture<MultislotcontentprojectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultislotcontentprojectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultislotcontentprojectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

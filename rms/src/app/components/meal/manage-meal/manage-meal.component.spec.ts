import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMealComponent } from './manage-meal.component';

describe('ManageMealComponent', () => {
  let component: ManageMealComponent;
  let fixture: ComponentFixture<ManageMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

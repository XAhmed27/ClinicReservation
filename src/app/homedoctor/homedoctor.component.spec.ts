import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedoctorComponent } from './homedoctor.component';

describe('HomedoctorComponent', () => {
  let component: HomedoctorComponent;
  let fixture: ComponentFixture<HomedoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomedoctorComponent]
    });
    fixture = TestBed.createComponent(HomedoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

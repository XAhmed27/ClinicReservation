import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepatientComponent } from './homepatient.component';

describe('HomepatientComponent', () => {
  let component: HomepatientComponent;
  let fixture: ComponentFixture<HomepatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepatientComponent]
    });
    fixture = TestBed.createComponent(HomepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

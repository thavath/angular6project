import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendencesListComponent } from './attendences-list.component';

describe('AttendencesListComponent', () => {
  let component: AttendencesListComponent;
  let fixture: ComponentFixture<AttendencesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendencesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

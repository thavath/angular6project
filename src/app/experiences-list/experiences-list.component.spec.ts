import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesListComponent } from './experiences-list.component';

describe('ExperiencesListComponent', () => {
  let component: ExperiencesListComponent;
  let fixture: ComponentFixture<ExperiencesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

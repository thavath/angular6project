import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FujiyamaComponent } from './fujiyama.component';

describe('FujiyamaComponent', () => {
  let component: FujiyamaComponent;
  let fixture: ComponentFixture<FujiyamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FujiyamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FujiyamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

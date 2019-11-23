import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCreationBiereComponent } from './date-creation-biere.component';

describe('DateCreationBiereComponent', () => {
  let component: DateCreationBiereComponent;
  let fixture: ComponentFixture<DateCreationBiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateCreationBiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCreationBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

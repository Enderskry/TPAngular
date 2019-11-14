import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiereComponent } from './biere.component';

describe('BiereComponent', () => {
  let component: BiereComponent;
  let fixture: ComponentFixture<BiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

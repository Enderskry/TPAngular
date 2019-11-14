import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBiereComponent } from './list-biere.component';

describe('ListBiereComponent', () => {
  let component: ListBiereComponent;
  let fixture: ComponentFixture<ListBiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

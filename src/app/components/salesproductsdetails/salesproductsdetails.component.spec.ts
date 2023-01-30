import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesproductsdetailsComponent } from './salesproductsdetails.component';

describe('SalesproductsdetailsComponent', () => {
  let component: SalesproductsdetailsComponent;
  let fixture: ComponentFixture<SalesproductsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesproductsdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesproductsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

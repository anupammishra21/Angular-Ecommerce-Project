import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccMoreDetailsComponent } from './acc-more-details.component';

describe('AccMoreDetailsComponent', () => {
  let component: AccMoreDetailsComponent;
  let fixture: ComponentFixture<AccMoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccMoreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

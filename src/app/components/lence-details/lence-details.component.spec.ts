import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenceDetailsComponent } from './lence-details.component';

describe('LenceDetailsComponent', () => {
  let component: LenceDetailsComponent;
  let fixture: ComponentFixture<LenceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

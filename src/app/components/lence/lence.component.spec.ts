import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenceComponent } from './lence.component';

describe('LenceComponent', () => {
  let component: LenceComponent;
  let fixture: ComponentFixture<LenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

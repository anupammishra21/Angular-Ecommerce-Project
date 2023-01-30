import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynowformComponent } from './buynowform.component';

describe('BuynowformComponent', () => {
  let component: BuynowformComponent;
  let fixture: ComponentFixture<BuynowformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuynowformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuynowformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

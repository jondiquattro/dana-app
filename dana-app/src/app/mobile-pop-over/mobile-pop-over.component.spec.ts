import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePopOverComponent } from './mobile-pop-over.component';

describe('MobilePopOverComponent', () => {
  let component: MobilePopOverComponent;
  let fixture: ComponentFixture<MobilePopOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePopOverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilePopOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

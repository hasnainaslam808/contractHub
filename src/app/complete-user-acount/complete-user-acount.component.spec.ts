import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteUserAcountComponent } from './complete-user-acount.component';

describe('CompleteUserAcountComponent', () => {
  let component: CompleteUserAcountComponent;
  let fixture: ComponentFixture<CompleteUserAcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteUserAcountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteUserAcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

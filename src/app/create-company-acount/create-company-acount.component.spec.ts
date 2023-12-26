import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyAcountComponent } from './create-company-acount.component';

describe('CreateCompanyAcountComponent', () => {
  let component: CreateCompanyAcountComponent;
  let fixture: ComponentFixture<CreateCompanyAcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompanyAcountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCompanyAcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassbookPageComponent } from './passbook-page.component';

describe('PassbookPageComponent', () => {
  let component: PassbookPageComponent;
  let fixture: ComponentFixture<PassbookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassbookPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassbookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

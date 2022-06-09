import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveAccountPageComponent } from './deactive-account-page.component';

describe('DeactiveAccountPageComponent', () => {
  let component: DeactiveAccountPageComponent;
  let fixture: ComponentFixture<DeactiveAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactiveAccountPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactiveAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

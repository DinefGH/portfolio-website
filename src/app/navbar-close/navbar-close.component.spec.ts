import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCloseComponent } from './navbar-close.component';

describe('NavbarCloseComponent', () => {
  let component: NavbarCloseComponent;
  let fixture: ComponentFixture<NavbarCloseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarCloseComponent]
    });
    fixture = TestBed.createComponent(NavbarCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

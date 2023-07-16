import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureNameComponent } from './picture-name.component';

describe('PictureNameComponent', () => {
  let component: PictureNameComponent;
  let fixture: ComponentFixture<PictureNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureNameComponent]
    });
    fixture = TestBed.createComponent(PictureNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

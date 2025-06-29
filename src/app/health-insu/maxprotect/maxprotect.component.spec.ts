import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxprotectComponent } from './maxprotect.component';

describe('MaxprotectComponent', () => {
  let component: MaxprotectComponent;
  let fixture: ComponentFixture<MaxprotectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaxprotectComponent]
    });
    fixture = TestBed.createComponent(MaxprotectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

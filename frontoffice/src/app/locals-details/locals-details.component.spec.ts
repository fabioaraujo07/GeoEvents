import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalsDetailsComponent } from './locals-details.component';

describe('LocalsDetailsComponent', () => {
  let component: LocalsDetailsComponent;
  let fixture: ComponentFixture<LocalsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalsDetailsComponent]
    });
    fixture = TestBed.createComponent(LocalsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

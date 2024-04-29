import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvedDivComponent } from './curved-div.component';

describe('CurvedDivComponent', () => {
  let component: CurvedDivComponent;
  let fixture: ComponentFixture<CurvedDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurvedDivComponent]
    });
    fixture = TestBed.createComponent(CurvedDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

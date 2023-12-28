import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A4PageComponent } from './a4-page.component';

describe('A4PageComponent', () => {
  let component: A4PageComponent;
  let fixture: ComponentFixture<A4PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [A4PageComponent]
    });
    fixture = TestBed.createComponent(A4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

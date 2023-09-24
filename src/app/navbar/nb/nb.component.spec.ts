import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbComponent } from './nb.component';

describe('NbComponent', () => {
  let component: NbComponent;
  let fixture: ComponentFixture<NbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NbComponent]
    });
    fixture = TestBed.createComponent(NbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

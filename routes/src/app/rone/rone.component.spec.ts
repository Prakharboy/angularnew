import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoneComponent } from './rone.component';

describe('RoneComponent', () => {
  let component: RoneComponent;
  let fixture: ComponentFixture<RoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

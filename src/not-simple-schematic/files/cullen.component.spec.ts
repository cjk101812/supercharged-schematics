import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CullenComponent } from './cullen.component';

describe('CullenComponent', () => {
  let component: CullenComponent;
  let fixture: ComponentFixture<CullenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CullenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CullenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
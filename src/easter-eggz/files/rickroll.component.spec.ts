import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickRollComponent } from './rickroll.component';

describe('CullenComponent', () => {
  let component: RickRollComponent;
  let fixture: ComponentFixture<RickRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
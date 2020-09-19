import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferOneComponent } from './offer-one.component';

describe('OfferOneComponent', () => {
  let component: OfferOneComponent;
  let fixture: ComponentFixture<OfferOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

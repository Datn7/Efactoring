import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferTwoComponent } from './offer-two.component';

describe('OfferTwoComponent', () => {
  let component: OfferTwoComponent;
  let fixture: ComponentFixture<OfferTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

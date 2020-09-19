import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableDataComponent } from './table-data/table-data.component';
import { OfferOneComponent } from './offer-one/offer-one.component';
import { OfferTwoComponent } from './offer-two/offer-two.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [ AppComponent, NavbarComponent, TableDataComponent, OfferOneComponent, OfferTwoComponent ],
	imports: [ BrowserModule, AppRoutingModule, FlexLayoutModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

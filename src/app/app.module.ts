import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { CardComponent } from './card/card.component';
import { CardTabsComponent } from './card-tabs/card-tabs.component';
import { FormsModule } from '@angular/forms';
import { NgPaymentCardModule } from 'ng-payment-card';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardTabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    NgPaymentCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

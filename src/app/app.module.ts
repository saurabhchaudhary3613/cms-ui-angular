import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modal-basic';

import { AppComponent } from './app.component';
import { CmsHeader } from './common/header/cms-header';
import { CmsNavbar } from './common/navbar/navbar';
import { DasboardComponent } from './dasboard/dasboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { TrackingComponent } from './tracking/tracking.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ViewStrategyComponent } from './strategy/view-strategy/view-strategy.component';
import { AddNewStrategyComponent } from './strategy/add-new-strategy/add-new-strategy.component';
import { SearchStrategyComponent } from './strategy/search-strategy/search-strategy.component';


@NgModule({
  declarations: [
    AppComponent,
    CmsHeader,
    CmsNavbar,
    DasboardComponent,
    CustomerComponent,
    TrackingComponent,
    AnalyticsComponent,
    ViewStrategyComponent,
    AddNewStrategyComponent,
    SearchStrategyComponent,
    NgbdModalBasic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

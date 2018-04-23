
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DasboardComponent } from './dasboard/dasboard.component';
import { CustomerComponent } from './customer/customer.component';
import{ TrackingComponent } from './tracking/tracking.component';
import{ AnalyticsComponent } from './analytics/analytics.component';

import { ViewStrategyComponent } from './strategy/view-strategy/view-strategy.component';
import { AddNewStrategyComponent } from './strategy/add-new-strategy/add-new-strategy.component';
import { SearchStrategyComponent } from './strategy/search-strategy/search-strategy.component';


const routes: Routes = [
  { path: '', redirectTo: '/dasboard', pathMatch: 'full' },
  { path: 'dasboard', component: DasboardComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'tarcking', component: TrackingComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'view-strategy', component: ViewStrategyComponent },
  { path: 'add-new-strategy', component: AddNewStrategyComponent },
  { path: 'search-strategy', component: SearchStrategyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

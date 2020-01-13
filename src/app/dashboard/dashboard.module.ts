import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    DashboardListComponent,
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
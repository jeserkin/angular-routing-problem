import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { GlobalFrameComponent } from './app-common/global-frame/global-frame.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'dashboard',
    component: GlobalFrameComponent,
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'other',
    component: GlobalFrameComponent,
    loadChildren: './other/other.module#OtherModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlobalFrameComponent } from './global-frame/global-frame.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    GlobalFrameComponent
  ]
})
export class AppCommonModule { }
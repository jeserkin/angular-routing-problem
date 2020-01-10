import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplePageComponent } from './sample-page/sample-page.component';
import { OtherRoutingModule }  from './other-routing.module';

@NgModule({
  declarations: [
    SamplePageComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
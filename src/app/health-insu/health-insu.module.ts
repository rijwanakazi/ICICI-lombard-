import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxprotectComponent } from './maxprotect/maxprotect.component';
import { ElevateComponent } from './elevate/elevate.component';



@NgModule({
  declarations: [
    MaxprotectComponent,
    ElevateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HealthInsuModule { }

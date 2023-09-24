import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbComponent } from './nb/nb.component';



@NgModule({
  declarations: [
    NbComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NbComponent
  ]
})
export class NavbarModule { }

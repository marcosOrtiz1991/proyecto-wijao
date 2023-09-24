import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbComponent } from './nb/nb.component';
import { HomeRoutingModule } from '../inicio/home-routing.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NbComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    NbComponent,
    FooterComponent
  ]
})
export class NavbarModule { }

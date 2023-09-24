import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { CartaComponent } from './carta/carta.component';



@NgModule({
  declarations: [
    HomeComponent,
    CartaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ]
})
export class InicioModule { }

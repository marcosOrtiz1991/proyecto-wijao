import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartaComponent } from './carta/carta.component';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [
  {
    path: "inicio", component: HomeComponent,

  },
  {
    path: "carta", component: CartaComponent
  },
  {
    path: "galeria", component: GaleriaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

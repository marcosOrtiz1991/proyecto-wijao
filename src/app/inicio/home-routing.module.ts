import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartaComponent } from './carta/carta.component';

const routes: Routes = [
  {
    path: "inicio", component: HomeComponent,

  },
  {
    path: "carta", component: CartaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

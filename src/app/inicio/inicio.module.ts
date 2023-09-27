import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { CartaComponent } from './carta/carta.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HomeComponent,
    CartaComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    NgbModule,
    MdbCarouselModule,
  ],

})
export class InicioModule { }

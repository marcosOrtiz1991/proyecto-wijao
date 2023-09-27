import { Component } from '@angular/core';
import { Galeria } from './entidades/galeria.model';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {

  galeria: Galeria[];

  constructor() {
    this.galeria = [
      {
        nombre:  "Chontacuro",
        url: "chontacuro.jpg",
        descripcion: "Larva de "
      },
      {
        nombre: "Maito De Gallina Criolla",
        descripcion: "Un exquisito maito de caldo de gallina 100% Criolla",
        url: "maito.jpg",
      },
    ]
  }
}

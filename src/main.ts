/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { InicioModule } from './app/inicio/inicio.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// cambiar el locale de la app de manera global
import localEsCo from '@angular/common/locales/es-CO'; // el nombre del import es arbitrario
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common'; // importar la función
registerLocaleData(localEsCo);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // modulo para agregar animaciones a varios componentes de primeNg
    AppRouterModule,
    SharedModule, // shared module importa prime-ng.module ya que ahí lo usa
    VentasModule
  ],
  providers: [ // registrar el locale de manera global
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

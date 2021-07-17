import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Diana';
  genero: string = 'femenino';
  invitacionMap = { // objeto para las opciones de transformacion del i18Select pipe
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Luis', 'Juan', 'Angela', 'Valeria'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  };

  cambiarNombre(): void{
    if ( this.nombre === 'Diana' ){
      this.nombre = 'Jonny';
      this.genero = 'masculino';
    } else{
      this.nombre = 'Diana';
      this.genero = 'femenino';
    }
  }

  borrarCliente(): void{
    if ( this.clientes.length > 0 ){
      this.clientes.pop();
    }
  }

}

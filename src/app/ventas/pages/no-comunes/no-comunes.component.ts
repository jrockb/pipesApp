import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

  // keyValue pipe
  // tslint:disable-next-line: member-ordering
  persona = {
    nombre: 'Jonny',
    edad: 33,
    direccion: 'Bogota, Colombia'
  };

  // Json pipe
  // tslint:disable-next-line: member-ordering
  heroes = [
    {
      nombre : 'Superman',
      vuela : true
    },
    {
      nombre : 'Batman',
      vuela : false
    },
    {
      nombre : 'Aquaman',
      vuela : false
    }
  ];

  // Async Pipe
  // tslint:disable-next-line: member-ordering
  miObservable = interval(1000); // observable que va a emitir numeros cada segundo

  // tslint:disable-next-line: member-ordering
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(()  => { // llama la función resolve cada 3500 ms
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}

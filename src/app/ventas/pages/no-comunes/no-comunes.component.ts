import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Diana';
  genero: string = 'femenino';

  invitacionMap = { // objeto para las opciones de transformacion del i18Select pipe
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

}

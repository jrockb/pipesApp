import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'jonny';
  nombreUpper: string = 'JONNY';
  nombreCompleto: string = 'joNNy BeRNal';

  fecha: Date = new Date();

}

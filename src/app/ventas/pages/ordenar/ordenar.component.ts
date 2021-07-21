import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = false;

  cambiarMayusculas(): boolean{
    // otra forma: this.enMayusuculas= !this.enMayusuculas;
    this.enMayusculas = (this.enMayusculas === true) ? false : true ;
    //console.log('enMayusculas: ', this.enMayusculas);
    return this.enMayusculas;
  }

}

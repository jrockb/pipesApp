import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = false;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Ironman',
      vuela: true,
      color: Color.rojo
    }
  ];

  cambiarMayusculas(): boolean{
    // otra forma: this.enMayusuculas= !this.enMayusuculas;
    this.enMayusculas = (this.enMayusculas === true) ? false : true ;
    //console.log('enMayusculas: ', this.enMayusculas);
    return this.enMayusculas;
  }

}

import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

   // tslint:disable-next-line: no-inferrable-types
   nombre: string = 'jonny';
   // tslint:disable-next-line: no-inferrable-types
   valor: number = 1000;
   obj = {
     nombre: 'Jonny'
   };

  constructor(private primengConfig: PrimeNGConfig ){

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true; // para agregar la animación al momento de hacer clic en el fieldset
  }

  mostrarNombre(): void{
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }

}

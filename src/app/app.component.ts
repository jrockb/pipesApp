import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // tslint:disable-next-line: no-inferrable-types
  nombre: string = 'jonny';
  // tslint:disable-next-line: no-inferrable-types
  valor: number = 1000;
  obj = {
    nombre: 'Jonny'
  };

  mostrarNombre(): void{
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }

}

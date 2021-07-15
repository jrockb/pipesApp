import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  exports: [ // este modulo solo exporta esos componentes
    ButtonModule,
    CardModule
  ],
  imports: [
  ]
})
export class PrimeNgModule { }

import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  exports: [ // este modulo solo exporta esos componentes
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule
  ],
  imports: [
  ]
})
export class PrimeNgModule { }

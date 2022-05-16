import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculasPipe } from './pipes/mayusculas.pipe';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { ShortComponent } from './pages/short/short.component';
import { FlyPipe } from './pipes/fly.pipe';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
  declarations: [
    // Components
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    ShortComponent,
    // Pipe
    MayusculasPipe,
    FlyPipe,
    SortPipe,
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    ShortComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { ShortComponent } from './pages/short/short.component';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    ShortComponent
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    ShortComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SalesModule { }

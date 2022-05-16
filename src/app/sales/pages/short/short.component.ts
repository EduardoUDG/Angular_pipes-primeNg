import { Component } from '@angular/core';

import { Hero } from '../../interfaces/hero.interfaces';
import { Color } from './../../interfaces/hero.interfaces';

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styles: [
  ]
})
export class ShortComponent {

  isUpperCase: boolean = true;
  orderBy: string = '';
  heroes: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    },
    {
      name: 'Linterna verde',
      fly: true,
      color: Color.green
    },
  ];



  handleToggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value:string ): void {
    console.log(value);
    this.orderBy = value;
  }

}

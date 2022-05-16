import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './../interfaces/hero.interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {


  transform( heroes: Hero[], orderBy: string='sin valor' ): Hero[] {

    switch( orderBy ) {
      case 'name':
        return heroes = heroes.sort( (a,b) => (a.name > b.name) ? 1 : -1 );
      case 'fly':
        return heroes = heroes.sort( (a,b) => (a.fly > b.fly) ? -1 : 1 );
      case 'color': // Lo valores booleans se ordenan primer por 'false' luego 'true'
        return heroes = heroes.sort( (a,b) => (a.color > b.color) ? 1 : -1 );
      default:
        return heroes;
    }

    // if( orderBy === 'sin valor' ) {
    //   return heroes;
    // } else if ( orderBy === 'name' ) {
    //   heroes = heroes.sort( (a,b) => (a.name > b.name) ? 1 : -1 );
    // }
  }
}

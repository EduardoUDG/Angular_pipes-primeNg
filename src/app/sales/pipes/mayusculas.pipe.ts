import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform {



  transform( value:string, isUpperCase:boolean=true ):string {
    return ( isUpperCase )
            ? value.toUpperCase()
            : value.toLowerCase();
  }

}

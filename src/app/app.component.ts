import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  name:string = 'eduardo';
  value:number= 15000;
  obj= { name: 'Lalo' }

  constructor( private primeNGConfig: PrimeNGConfig ) { }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }


  showName() {
    console.log( this.name );
  }

}

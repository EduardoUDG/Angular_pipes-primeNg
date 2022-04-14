import { Component } from '@angular/core';

import {ButtonModule} from 'primeng/button';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  name:string = 'eduardo';
  value:number= 15000;
  obj= { name: 'Lalo' }


  showName() {
    console.log( this.name );
  }

}

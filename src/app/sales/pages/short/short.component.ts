import { Component } from '@angular/core';

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styles: [
  ]
})
export class ShortComponent {

  isUpperCase: boolean = true;

  handleToggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

}

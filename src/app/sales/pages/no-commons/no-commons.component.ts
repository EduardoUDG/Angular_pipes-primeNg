import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent  {

  name: string = 'Eduardo';
  gender:string= 'masculino';

  mapInvitation = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

}

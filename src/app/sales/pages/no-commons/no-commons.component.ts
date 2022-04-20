import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent  {

  // i18nSelect
  name: string = 'Eduardo';
  gender:string= 'masculino';

  mapInvitation = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  // i18nPlural
  customers: string[] = ['María', 'Pedro', 'Carlos', 'Luis'];
  mapCustomers = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  changeCustomer(): void {
    this.name = 'María';
    this.gender='femenino';
  }

  deleteOneCustomer(): void {
    this.customers.pop();
  }

  // KeyValue Pipe
  person = {
    name: 'Eduardo',
    age: 35,
    address: 'Ottawa, Cánada'
  }

  // JSON pipe
  heroes = [
    {
      name: 'Superman',
      fly: true
    },
    {
      name: 'Robin',
      fly: false
    },
    {
      name: 'Aquaman',
      fly: false
    }
  ]


}

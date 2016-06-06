import { Component } from '@angular/core';
//import { Person } from './person';
import { PersonDetailsComponent } from './person-details.component';
import { PeopleService } from './people.service';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
  selector: 'people-list',
  directives: [ROUTER_DIRECTIVES],
  template: `
  <ul *ngFor="#person of people">
    <li>
      <a href="#" [routerLink]="['Person Details', {id: person.id}]">
      {{person.name}}
      </a>
    </li>
  </ul>
  `
})
export class PeopleListComponent{
  people: Person[] = [];
  selectedPerson: Person;

  constructor(private _peopleService : PeopleService){ }

  ngOnInit(){
    this._peopleService
      .getAll()
      .subscribe(p => this.people = p)
  }

  selectPerson(person: Person){
      this.selectedPerson = person;
  }

}

import { Component, Input } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { PeopleService } from './people.service';
import { Response } from '@angular/http';
//import { Person } from './person';

@Component({
  selector: 'person-details',
  template: `
  <!-- new syntax for ng-if -->
  <section *ngIf="person">
    <h2>You selected:  {{person.name}}  </h2>
    <h3>Description</h3>
    <p>
       {{person.name}}  weights  {{person.weight}} and is  {{person.height}} tall.
    </p>
  </section>
  <button (click)="gotoPeoplesList()">Back to peoples list</button>
  `
})
export class PersonDetailsComponent {
  person : Person;
    constructor(private _peopleService: PeopleService,
               private _routeParams: RouteParams,
               private _router: Router){
    }
    ngOnInit(){
        let id = Number.parseInt(this._routeParams.get('id'));
        console.log('getting person with id: ', id);
        this._peopleService
          .get(id)
          .subscribe(p => this.person = p);
    }
    gotoPeoplesList(){
        let link = ['Persons'];
        this._router.navigate(link);
        //window.history.back();
    }
}

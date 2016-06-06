import {Component} from '@angular/core';
import {PeopleListComponent} from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';
//import {People} from './people';
import {PeopleService} from './people.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS, Http, Response } from '@angular/http';


@Component({
    selector: 'my-people',
    template: `
    <h1>{{title}}</h1>

    <router-outlet></router-outlet>
    `,
    //styleUrls: ['app/app.component.css'],
    directives: [PeopleComponent, ROUTER_DIRECTIVES],
    providers: [PeopleService, ROUTER_PROVIDERS, HTTP_PROVIDERS]
})
// Route config let's you map routes to components
@RouteConfig([
  { path: '/persons', name: 'Persons', component: PeopleListComponent/*, useAsDefault: true*/ },
  { path: '/persons/:id', name: 'Person Details', component: PersonDetailsComponent },
])
export class PeopleComponent {
    title: String = 'Star Wars PPlz!!!';
}

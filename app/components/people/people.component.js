"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var people_list_component_1 = require('./people-list.component');
var person_details_component_1 = require('./person-details.component');
//import {People} from './people';
var people_service_1 = require('./people.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var PeopleComponent = (function () {
    function PeopleComponent() {
        this.title = 'Star Wars PPlz!!!';
    }
    PeopleComponent = __decorate([
        core_1.Component({
            selector: 'my-people',
            template: "\n    <h1>{{title}}</h1>\n\n    <router-outlet></router-outlet>\n    ",
            //styleUrls: ['app/app.component.css'],
            directives: [PeopleComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [people_service_1.PeopleService, router_deprecated_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/persons', name: 'Persons', component: people_list_component_1.PeopleListComponent /*, useAsDefault: true*/ },
            { path: '/persons/:id', name: 'Person Details', component: person_details_component_1.PersonDetailsComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], PeopleComponent);
    return PeopleComponent;
}());
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map
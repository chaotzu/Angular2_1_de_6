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
var http_1 = require('@angular/http');
require('rxjs/Rx');
//import { Person } from './person';
//import { HEROES } from './mock-heroes';
var PEOPLE = [
    { id: 1, name: 'Luke Skywalker', height: 177, weight: 70 },
    { id: 2, name: 'Darth Vader', height: 200, weight: 100 },
    { id: 3, name: 'Han Solo', height: 185, weight: 85 },
];
var PeopleService = (function () {
    function PeopleService(_http) {
        this._http = _http;
        this.baseUrl = 'http://swapi.co/api';
    }
    PeopleService.prototype.getAll = function () {
        var people$ = this._http
            .get(this.baseUrl + "/people")
            .map(mapPersons);
        return people$;
    };
    PeopleService.prototype.get = function (id) {
        var person$ = this._http
            .get(this.baseUrl + "/people/" + id)
            .map(mapPerson);
        return person$;
    };
    PeopleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PeopleService);
    return PeopleService;
}());
exports.PeopleService = PeopleService;
function mapPersons(response) {
    // The response of the API has a results
    // property with the actual results
    return response.json().results.map(toPerson);
}
function toPerson(r) {
    var person = ({
        id: extractId(r),
        url: r.url,
        name: r.name,
        weight: r.mass,
        height: r.height,
    });
    console.log('Parsed person:', person);
    return person;
}
// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData) {
    var extractedId = personData.url.replace('http://swapi.co/api/people/', '').replace('/', '');
    return parseInt(extractedId);
}
function mapPerson(response) {
    return toPerson(response.json());
}
//# sourceMappingURL=people.service.js.map
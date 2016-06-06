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
var router_deprecated_1 = require('@angular/router-deprecated');
var people_service_1 = require('./people.service');
//import { Person } from './person';
var PersonDetailsComponent = (function () {
    function PersonDetailsComponent(_peopleService, _routeParams, _router) {
        this._peopleService = _peopleService;
        this._routeParams = _routeParams;
        this._router = _router;
    }
    PersonDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = Number.parseInt(this._routeParams.get('id'));
        console.log('getting person with id: ', id);
        this._peopleService
            .get(id)
            .subscribe(function (p) { return _this.person = p; });
    };
    PersonDetailsComponent.prototype.gotoPeoplesList = function () {
        var link = ['Persons'];
        this._router.navigate(link);
        //window.history.back();
    };
    PersonDetailsComponent = __decorate([
        core_1.Component({
            selector: 'person-details',
            template: "\n  <!-- new syntax for ng-if -->\n  <section *ngIf=\"person\">\n    <h2>You selected:  {{person.name}}  </h2>\n    <h3>Description</h3>\n    <p>\n       {{person.name}}  weights  {{person.weight}} and is  {{person.height}} tall.\n    </p>\n  </section>\n  <button (click)=\"gotoPeoplesList()\">Back to peoples list</button>\n  "
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService, router_deprecated_1.RouteParams, router_deprecated_1.Router])
    ], PersonDetailsComponent);
    return PersonDetailsComponent;
}());
exports.PersonDetailsComponent = PersonDetailsComponent;
//# sourceMappingURL=person-details.component.js.map
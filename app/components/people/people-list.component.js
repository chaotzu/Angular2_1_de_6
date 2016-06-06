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
var people_service_1 = require('./people.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var PeopleListComponent = (function () {
    function PeopleListComponent(_peopleService) {
        this._peopleService = _peopleService;
        this.people = [];
    }
    PeopleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peopleService
            .getAll()
            .subscribe(function (p) { return _this.people = p; });
    };
    PeopleListComponent.prototype.selectPerson = function (person) {
        this.selectedPerson = person;
    };
    PeopleListComponent = __decorate([
        core_1.Component({
            selector: 'people-list',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            template: "\n  <ul *ngFor=\"#person of people\">\n    <li>\n      <a href=\"#\" [routerLink]=\"['Person Details', {id: person.id}]\">\n      {{person.name}}\n      </a>\n    </li>\n  </ul>\n  "
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService])
    ], PeopleListComponent);
    return PeopleListComponent;
}());
exports.PeopleListComponent = PeopleListComponent;
//# sourceMappingURL=people-list.component.js.map
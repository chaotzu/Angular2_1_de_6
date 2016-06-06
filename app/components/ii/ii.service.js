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
//import { Grupo } from './grupo';
require('rxjs/Rx');
var IiService = (function () {
    function IiService(_http) {
        this._http = _http;
        this.baseUrl = 'http://172.16.34.191/TestCors/Service1.svc';
    }
    IiService.prototype.getPermisos = function () {
        var permisos$ = this._http
            .get(this.baseUrl + "/Empleados")
            .map(mapGrupos);
        return permisos$;
    };
    IiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], IiService);
    return IiService;
}());
exports.IiService = IiService;
function mapGrupos(response) {
    return response.json().map(toGrupo);
}
function toGrupo(r) {
    var grupo = ({
        Correo: r.Correo,
        DeptName: r.DeptName,
        Usuario: r.Usuario,
    });
    console.log('Parsed grupo:', grupo);
    return grupo;
}
/*
// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData:any){
 let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
 return parseInt(extractedId);
}

function mapPerson(response:Response): Person{
   return toPerson(response.json());
}
*/
//# sourceMappingURL=ii.service.js.map
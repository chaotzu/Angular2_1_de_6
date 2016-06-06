import {Component} from '@angular/core';
//import {IiService} from './ii.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS, Http, Response } from '@angular/http';
import { IiService } from './ii.service';

@Component({
    selector: 'my-ii',
    directives: [IiComponent, ROUTER_DIRECTIVES],
    template: `
    <h1>{{title}}</h1>
    <ul *ngFor="#grupo of grupo">
      <li>
        {{grupo.Correo}}
      </li>
    </ul>
    `,
    providers: [IiService, ROUTER_PROVIDERS, HTTP_PROVIDERS]
})
export class IiComponent {
    title: String = 'II Permissions!!!';
    grupo: Grupo[] = [];
    selectedGrupo: Grupo;

    constructor(private _iiService : IiService){ }

    ngOnInit(){
      this._iiService
        .getPermisos()
        .subscribe(p => this.grupo = p)
    }

    selectPerson(grupo: Grupo){
        this.selectedGrupo = grupo;
    }
}

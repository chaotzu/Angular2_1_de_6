import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
//import { Grupo } from './grupo';
import 'rxjs/Rx';

@Injectable()
export class IiService{
  private baseUrl: string = 'http://172.16.34.191/TestCors/Service1.svc';
  constructor(private _http : Http){}
  getPermisos(): Observable<Grupo[]>{
    let permisos$ = this._http
      .get(`${this.baseUrl}/Empleados`)
      .map(mapGrupos);
      return permisos$;
  }
}

function mapGrupos(response:Response): Grupo[]{
   return response.json().map(toGrupo)
}

function toGrupo(r:any): Grupo{
  let grupo = <Grupo>({
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

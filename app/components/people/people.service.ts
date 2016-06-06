import { Injectable } from '@angular/core';
import { HTTP_PROVIDERS, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
//import { Person } from './person';
//import { HEROES } from './mock-heroes';
const PEOPLE : Person[] = [
      {id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
      {id: 2, name: 'Darth Vader', height: 200, weight: 100},
      {id: 3, name: 'Han Solo', height: 185, weight: 85},
    ];

@Injectable()
export class PeopleService{
  private baseUrl: string = 'http://swapi.co/api';
  constructor(private _http : Http){}
  getAll(): Observable<Person[]>{
    let people$ = this._http
      .get(`${this.baseUrl}/people`)
      .map(mapPersons);
      return people$;
  }
  get(id: number): Observable<Person> {
    let person$ = this._http
      .get(`${this.baseUrl}/people/${id}`)
      .map(mapPerson);
      return person$;
  }
}

function mapPersons(response:Response): Person[]{
   // The response of the API has a results
   // property with the actual results
   return response.json().results.map(toPerson)
}

function toPerson(r:any): Person{
  let person = <Person>({
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
function extractId(personData:any){
 let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
 return parseInt(extractedId);
}

function mapPerson(response:Response): Person{
   return toPerson(response.json());
}

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IEncounter, Encounter } from '../models';
import 'rxjs/add/operator/map';

@Injectable()
export default class EncountersService {

  ENCOUNTER_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

  constructor(private http: Http) {}

  getEncounters(): Observable<IEncounter[]> {
    return this.http
        .get(this.ENCOUNTER_JSON)
        .map((res: Response) => res.json().encounters);
  }

  submitEncounter( encounter: Encounter ): Observable<IEncounter> {
    const headers = new Headers();

    headers.append( 'Content-Type', 'application/json' );

    //var parameter = '{ "encounter": ' + JSON.stringify(encounter) + '}';

    return this.http
        .post( this.ENCOUNTER_JSON, { encounter }, { headers } ) //
        .map( ( res: Response) => res.json().encounter );
  }
}

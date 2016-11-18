import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IColonist, Colonist } from '../models';
import 'rxjs/add/operator/map';

@Injectable()
export default class ColonistsService {

  COLONIST_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

  constructor(private http: Http) {}

  getColonists(): Observable<IColonist[]> {
      return this.http
        .get(this.COLONIST_JSON)
        .map((res: Response) => res.json().colonists);
  }

  submitColonist( colonist: Colonist ): Observable<IColonist> {
    const headers = new Headers();

    headers.append( 'Content-Type', 'application/json' );

    return this.http
        .post( this.COLONIST_JSON, { colonist }, { headers } )
        .map( ( res: Response) => res.json().colonist );
  }
}
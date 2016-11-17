import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Colonist } from '../models';
import 'rxjs/add/operator/map';

@Injectable()
export class ColonistsService {

  COLONISTS_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

  constructor(private http: Http) { }
    getColonists(): Observable<Colonist[]> {
      return this.http
          .get(this.COLONISTS_JSON)
          .map((res: Response) => res.json().colonists);
      }
  }
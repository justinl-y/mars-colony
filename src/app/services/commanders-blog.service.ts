import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICommanderBlog } from '../models';
import 'rxjs/add/operator/map';

@Injectable()
export default class CommandersBlogService {

  COMMANDERS_BLOG_JSON = 'http://fourth.academy.red/wp-json/wp/v2/posts/';

  constructor(private http: Http) { }
    getCommandersBlogPosts(): Observable<ICommanderBlog[]>{
    //getCommandersBlogPosts() {
      return this.http
        .get(this.COMMANDERS_BLOG_JSON)
        .map((res: Response) => res.json());
    }
}
import { Component, OnInit } from '@angular/core';
import { ICommanderBlog } from '../models';
import CommamdersBlogService from '../services/commanders-blog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commanders-blog',
  templateUrl: './commanders-blog.component.html',
  styleUrls: ['./commanders-blog.component.css'],
  providers: [CommamdersBlogService],
})
export class CommandersBlogComponent implements OnInit {
  marsCommandersBlogs: ICommanderBlog[];

  constructor( private commandersBlogService: CommamdersBlogService, 
                private router: Router, 
                private route: ActivatedRoute ) { 

    commandersBlogService.getCommandersBlogPosts().subscribe( ( get_blog_posts ) => {
      console.log(get_blog_posts);

      //this.marsCommandersBlogs = get_blog_posts;
    }, ( err ) => {
      console.log( err );
    });                 
  }

  ngOnInit() {
  }

}


/*import { Component, OnInit } from '@angular/core';
import { IEncounter } from '../models';
import EncountersService from '../services/encounters.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css'],
  providers: [EncountersService],
} )
export class EncountersComponent implements OnInit {
  marsEncounters: IEncounter[];

  constructor( private encountersService: EncountersService,
               private router: Router, private route: ActivatedRoute ) {
    encountersService.getEncounters().subscribe( ( get_encounters ) => {
      this.marsEncounters = get_encounters;
    }, ( err ) => {
      console.log( err );
    });
  }

  ngOnInit() {
  }

  onClick(event) {
    event.preventDefault();

    //console.log('clicked');
    this.router.navigate(['../report']);
  }
}*/

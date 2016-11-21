import { Component, OnInit } from '@angular/core';
import { ICommanderBlog } from '../models';
import CommamdersBlogService from '../services/commanders-blog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commanders-blog',
  templateUrl: './commanders-blog.component.html',
  styleUrls: ['./commanders-blog.component.scss'],
  providers: [CommamdersBlogService],
})
export class CommandersBlogComponent implements OnInit {
  marsCommandersBlogs: ICommanderBlog[];
  loading: boolean;

  constructor( private commandersBlogService: CommamdersBlogService, 
                private router: Router, 
                private route: ActivatedRoute ) {
    this.loading = true;

    commandersBlogService.getCommandersBlogPosts().subscribe( ( get_blog_posts ) => {
      this.marsCommandersBlogs = get_blog_posts;
      this.loading = false;
    }, ( err ) => {
      console.log( err );
    });                 
  }

  ngOnInit() {
  }

  onClickMainMenu() {
    this.router.navigate( ['../menu'] );
  }
}

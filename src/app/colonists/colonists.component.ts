import { Component, OnInit } from '@angular/core';
import { IColonist } from '../models';
import ColonistsService from '../services/colonists.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-colonists',
  templateUrl: './colonists.component.html',
  styleUrls: [ './colonists.component.scss' ],
  providers: [ ColonistsService ],
} )
export class ColonistsComponent implements OnInit {
  marsColonists: IColonist[];
  // declare loading boolean
  loading: boolean;
 
  constructor( private colonistsService: ColonistsService,
               private router: Router,
               private route: ActivatedRoute ) { 
    // set loading boolean to true             
    this.loading = true;

    colonistsService.getColonists().subscribe ( ( get_colonists ) => {
      this.marsColonists = get_colonists;

      //set loading boolean to false after successful data load
      this.loading = false;
    }, ( err ) => {
      console.log( err );
    } );
  }

  ngOnInit() {
  }

  onClickMainMenu( event ) {
    event.preventDefault();
    this.router.navigate( [ '../menu' ] );
  }
}

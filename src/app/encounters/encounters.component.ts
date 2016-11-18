import { Component, OnInit } from '@angular/core';
import { IEncounter } from '../models';
import EncountersService from '../services/encounters.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [EncountersService],
} )
export class EncountersComponent implements OnInit {
  marsEncounters: IEncounter[];

  constructor( private encountersService: EncountersService,
               private router: Router, private route: ActivatedRoute ) {
    encountersService.getEncounters().subscribe( ( get_encounters ) => {
      this.marsEncounters = get_encounters;

      //console.log( get_encounters );
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
}

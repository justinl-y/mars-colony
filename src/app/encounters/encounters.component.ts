import { Component, OnInit } from '@angular/core';
import { IEncounter } from '../models';
import EncountersService from '../services/encounters.service';

@Component( {
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css'],
  providers: [EncountersService],
} )
export class EncountersComponent implements OnInit {
  marsEncounters: IEncounter[];

  constructor( encountersService: EncountersService ) {
    encountersService.getEncounters().subscribe( ( encounters ) => {
      this.marsEncounters = encounters;
    }, ( err ) => {
      console.log( err );
    });
  }

  ngOnInit() {
  }
}

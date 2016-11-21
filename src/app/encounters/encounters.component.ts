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
  loading: boolean;

  constructor( private encountersService: EncountersService,
               private router: Router, 
               private route: ActivatedRoute ) {
    this.loading = true;

    encountersService.getEncounters().subscribe( ( get_encounters ) => {
      this.marsEncounters = get_encounters;
      this.loading = false;
    }, ( err ) => {
      console.log( err );
    });
  }

  ngOnInit() {
  }

  onClickMainMenu(event) {
    event.preventDefault();
    this.router.navigate(['../menu']);
  }

  onClickReportEncounter(event) {
    event.preventDefault();
    this.router.navigate(['../report']);
  }
}

import { Component, OnInit } from '@angular/core';
import { NewEncounter, Alien } from '../models';
import AliensService from '../services/aliens.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [AliensService],
})
export class ReportComponent implements OnInit {
  encounter: NewEncounter;
  marsAliens: Alien[];

   NO_ALIEN_SELECTED = '(none);'

  constructor( aliensService: AliensService ) {
    this.encounter = new NewEncounter( null, this.NO_ALIEN_SELECTED, null );

    aliensService.getAliens().subscribe( ( aliens ) => {
      this.marsAliens = aliens;
    }, (err) => {
      console.log(err);
    });
   }

  ngOnInit() {
  }

  get alienSelected() {
    return this.encounter.atype === this.NO_ALIEN_SELECTED;
  }
}

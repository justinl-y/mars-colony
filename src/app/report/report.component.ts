import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Encounter, Alien } from '../models';
import AliensService from '../services/aliens.service';
import EncountersService from '../services/encounters.service';
import { cantBe } from '../shared/validators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [AliensService, EncountersService],
})
export class ReportComponent implements OnInit {
  marsAliens: Alien[];
  reportForm: FormGroup;

  NO_ALIEN_SELECTED = '(none);'

  constructor( private aliensService: AliensService, 
                private encountersService: EncountersService,
                private router: Router, private route: ActivatedRoute ) {
    aliensService.getAliens().subscribe( ( aliens ) => {
      this.marsAliens = aliens;
    }, (err) => {
      console.log(err);
    });
   }

  ngOnInit() {
    this.reportForm = new FormGroup({
      type: new FormControl(this.NO_ALIEN_SELECTED, [cantBe(this.NO_ALIEN_SELECTED)]),
      action: new FormControl('', [Validators.required, Validators.maxLength(500)]), 
    });
  }

  getDate() {
    const d = new Date();
    return `${ d.getFullYear() }-${ d.getMonth() + 1 }-${ d.getDate() }`;
  };

  onSubmit(event) {
    event.preventDefault();
    
    if( this.reportForm.invalid ) {
      // for invalid
    } else {
      const colonist_id = parseInt(sessionStorage.getItem('id'));
      const alien_type = this.reportForm.get('type').value;
      const action = this.reportForm.get('action').value;
      const encounter = new Encounter( action, alien_type, colonist_id, this.getDate() );
     
      this.encountersService.submitEncounter(encounter).subscribe( () => {
        this.router.navigate(['../encounters']);
      }, (err) => {
        console.log(err);
      });
    }
  }
}
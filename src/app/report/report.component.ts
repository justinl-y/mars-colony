import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { NewEncounter, Encounter, Alien } from '../models';
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
  //encounter: NewEncounter;
  marsAliens: Alien[];
  reportForm: FormGroup;

  NO_ALIEN_SELECTED = '(none);'

  constructor( private aliensService: AliensService, 
                private encountersService: EncountersService,
                private router: Router, private route: ActivatedRoute ) {

    //this.encounter = new NewEncounter( null, this.NO_ALIEN_SELECTED, null );

    aliensService.getAliens().subscribe( ( aliens ) => {
      this.marsAliens = aliens;
    }, (err) => {
      console.log(err);
    });
   }

   /*cantBe(value: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      return control.value === this.NO_ALIEN_SELECTED ? {'cant be none': { value }} : null;
    };
  }*/

  ngOnInit() {
    this.reportForm = new FormGroup({
      //type: new FormControl(this.NO_ALIEN_SELECTED, [this.cantBe(this.NO_ALIEN_SELECTED)]),
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
    //console.log(this.registerForm);

    if( this.reportForm.invalid ) {


    } else {
      const colonist_id = 4;
      //const d = new Date();
      //const date = `${ d.getFullYear() }-${ d.getMonth() + 1 }-${ d.getDate() }`;

      const alien_type = this.reportForm.get('type').value;
      const action = this.reportForm.get('action').value;

      const encounter = new NewEncounter( action, alien_type, colonist_id, this.getDate() );
      //const encounter = new NewEncounter( alien_type, date, action, colonist_id,  );

      this.encountersService.submitEncounter(encounter).subscribe( () => {
        //post stuff
        //console.log('success');

        this.router.navigate(['../encounters']);

      }, (err) => {
        console.log(err);
      });

    }
  }
}

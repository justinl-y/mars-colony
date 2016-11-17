import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Encounter, Alien } from '../models';
import AliensService from '../services/aliens.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [AliensService],
})
export class ReportComponent implements OnInit {
  //encounter: NewEncounter;
  marsAliens: Alien[];
  reportForm: FormGroup;

  NO_ALIEN_SELECTED = '(none);'

  constructor( aliensService: AliensService ) {
    //this.encounter = new NewEncounter( null, this.NO_ALIEN_SELECTED, null );

    aliensService.getAliens().subscribe( ( aliens ) => {
      this.marsAliens = aliens;
    }, (err) => {
      console.log(err);
    });
   }

   cantBe(value: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      return control.value === this.NO_ALIEN_SELECTED ? {'cant be none': { value }} : null;
    };
  }

  ngOnInit() {
    this.reportForm = new FormGroup({
      type: new FormControl(this.NO_ALIEN_SELECTED, [this.cantBe(this.NO_ALIEN_SELECTED)]),
      action: new FormControl('', [Validators.required]), 
    });
  }

  onSubmit(event) {
    event.preventDefault();
    //console.log(this.registerForm);

    if(this.reportForm.invalid) {

    } else {
      const id = null;
      const date = null //new Date();
      const type = this.reportForm.get('type').value;
      const action = this.reportForm.get('action').value;

      console.log('Register new encounter', new Encounter(id, date, type, action ));
    }
  }
}

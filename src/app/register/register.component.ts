import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Colonist, Job } from '../models';
import JobsService from '../services/jobs.service';
import { cantBe } from '../shared/validators';

/*const notNone = (value) => {
  if (value === '(none)') {
    return false;
   } else {
    return true;
  }
}*/

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [JobsService],
})
export class RegisterComponent implements OnInit {
  //colonist: NewColonist;
  marsJobs: Job[];
  registerForm: FormGroup;

  NO_JOB_SELECTED = '(none);'

  constructor( jobsService: JobsService ) {
    //this.colonist = new NewColonist( null, null, this.NO_JOB_SELECTED );

    jobsService.getJobs().subscribe(( jobs ) => {
      //console.log(jobs);
      this.marsJobs = jobs;
    }, (err) => {
        console.log(err);
      });
    }

  /*// callback - jobService example longform
  const jobService = {
    getJobs(shouldGetJob) { //method
      return { //returning an object
        subscribe(successCB, failCB) { //with two parmaters
          if (shouldGßetJob) {
            successCB('I got the job...');
          } else {
            failCB('I did not get the jobs...');
          }
        }
      }
    }
  };

  // to test call 
  jobService.getJobs(true).subscribe((message) => {
    console.log(message);
  }, (message) => {
    console.log(message);
  })*/

  /*cantBe(value: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      return control.value === this.NO_JOB_SELECTED ? {'cant be none': { value }} : null;
    };
  }*/

  tooOld(value: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      return control.value > 100 ? {'too old': { value }} : null;
    };
  }

  ngOnInit() {
    // async call test
    /*setTimeout( () => {
      console.log('i\'m late');
    }, 2000 );*/

    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]), 
      age: new FormControl('', [Validators.required, this.tooOld(100)]), //more validator functions - no negative numbers
      job_id: new FormControl(this.NO_JOB_SELECTED, [cantBe(this.NO_JOB_SELECTED)])
    });
  }

  onSubmit(event) {
    event.preventDefault();
    //console.log(this.registerForm);

    if(this.registerForm.invalid) {

    } else {
      const id = null;
      const name = this.registerForm.get('name').value; //check for better way to get values from form
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;

      console.log('Register new colonist', new Colonist(id, name, age, job_id));
    }
  }
}

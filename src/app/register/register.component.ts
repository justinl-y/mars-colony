import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Colonist, Job, IColonist } from '../models';
import JobsService from '../services/jobs.service';
import ColonistsService from '../services/colonists.service';
import { cantBe } from '../shared/validators';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [JobsService, ColonistsService],
})
export class RegisterComponent implements OnInit {
  marsJobs: Job[];
  registerForm: FormGroup;

  //marsColonist: IColonist; ////////

  NO_JOB_SELECTED = '(none);'

  constructor( private jobsService: JobsService,
                private colonistService: ColonistsService,
                private router: Router, private route: ActivatedRoute  ) {

    jobsService.getJobs().subscribe(( jobs ) => {
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

    if(this.registerForm.invalid) {
       // for invalid
    } else {
      const name = this.registerForm.get('name').value; //check for better way to get values from form
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;
      const colonist = new Colonist(name, age, job_id);

      //console.log(colonist);
      this.colonistService.submitColonist(colonist).subscribe( ( colonist ) => {
        sessionStorage.setItem('id', colonist.id.toString());

        this.router.navigate(['../encounters']);
      }, (err) => {
        console.log(err);
      });
    }
  }
}
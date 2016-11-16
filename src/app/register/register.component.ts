import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import JobsService from '../services/jobs.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [JobsService],
})
export class RegisterComponent implements OnInit {
  colonist: NewColonist;
  marsJobs: Job[];

  NO_JOB_SELECTED = '(none);'

  constructor( jobsService: JobsService ) {
    this.colonist = new NewColonist( null, null, this.NO_JOB_SELECTED );

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
          if (shouldGetJob) {
            successCB('I got the job...');
          } else {
            failCB('I did not get the jobs...');
          }
        }
      }
    }
  };

  // to call
  jobService.getJobs(true).subscribe((message) => {
    console.log(message);
  }, (message) => {
    console.log(message);
  })*/

  ngOnInit() {
    // async call test
    setTimeout( () => {
      console.log('i\'m late');
    }, 2000 );
    
  }

  get jobSelected() {
    return this.colonist.job_id === this.NO_JOB_SELECTED;
  }
}

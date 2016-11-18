import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  //templateUrl: './welcome.component.html',
  template: `<h1>Welcome to Mars</h1>
             <h2>We hope you hope you like your stay!</h2>
             <a routerLink="/register" routerLinkActive="active">Enter</a>`,
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

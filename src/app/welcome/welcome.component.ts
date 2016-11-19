import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  //template: `<h1>Welcome to Mars</h1>
             //<h2>We hope you hope you like your stay!</h2>
             //<a routerLink="/register" routerLinkActive="active">Enter</a>`,
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

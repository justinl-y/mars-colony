import { Component, OnInit, HostBinding, trigger, state, style, transition, animate } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  //template: `<h1>Welcome to Mars</h1>
             //<h2>We hope you hope you like your stay!</h2>
             //<a routerLink="/register" routerLinkActive="active">Enter</a>`,
  styleUrls: ['./welcome.component.scss'],
  /*animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]*/
})
export class WelcomeComponent implements OnInit {
  /*@HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }*/

  constructor(private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClickRegister(event) {
    event.preventDefault();
    this.router.navigate( ['../register'] );
  }
}
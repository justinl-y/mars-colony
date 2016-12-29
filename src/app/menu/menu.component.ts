import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  colonistName = '';

  constructor(private router: Router, 
              private route: ActivatedRoute) {

    this.colonistName = sessionStorage.getItem( 'colonist_name' );               
  }

  ngOnInit() {
  }

  onClickColonists(event) {
    event.preventDefault();
    this.router.navigate( ['../colonists'] );
  }

  onClickEncounters(event) {
    event.preventDefault();
    this.router.navigate( ['../encounters'] );
  }

  onClickCommandersBlog(event) {
    event.preventDefault();
    this.router.navigate( ['../commanders-blog'] );
  }

  onClickExit(event) {
    event.preventDefault();
    this.router.navigate( ['../'] );
  }
}

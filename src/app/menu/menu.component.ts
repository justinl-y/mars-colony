import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClickColonists() {
    event.preventDefault();
    this.router.navigate( ['../colonists'] );
  }

  onClickEncounters() {
    event.preventDefault();
    this.router.navigate( ['../encounters'] );
  }

  onClickCommandersBlog() {
    event.preventDefault();
    this.router.navigate( ['../commanders-blog'] );
  }
}

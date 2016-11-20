import { Component, ViewEncapsulation } from '@angular/core';

//decorator function to decorate class
@Component({ //apply component decorator to class - metadata
  selector: 'app-root', //css selector for the html element where we want the component to load
  templateUrl: './app.component.html', //the content we want to load inside the selector
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
//class
export class AppComponent {
  title = 'Mars Colony!';
  description = 'A colony for Mars project';
}

//ngModule decorator?

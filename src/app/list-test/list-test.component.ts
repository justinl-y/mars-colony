import { Component, OnInit } from '@angular/core';

/*interface Apple {
  type: string;
  colour: string;
}*/

class Apple {
  constructor(
    public name: string,
    public colour: string
  ) {}
}

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.scss']
})

export class ListTestComponent implements OnInit {

  appleList: [Apple];
  apple: Apple;

  //appleList: [Apple] = [
    //{ type: 'Macintosh', colour: 'Green' },
    //{ type: 'Ambrosia', colour: 'Red' },
    //{ type: 'Granny Smith', colour: 'Green' },
    //{ type: 'Pink Lady', colour: 'Pink' }
    //];

  constructor() { 
    this.apple = { name: '', colour: '' };
    this.appleList = [
    { name: 'Macintosh', colour: 'Green' },
    { name: 'Ambrosia', colour: 'Red' },
    { name: 'Granny Smith', colour: 'Green' },
    { name: 'Pink Lady', colour: 'Pink' }
    ];
  }

  addApple() {
    //const apple: Apple = { type: 'Crab', colour: 'Green' }
    this.appleList.push(this.apple);
    this.apple = { name:'', colour:'' }
  }

  renderAppleForm(appleForm){
    //console.log(appleForm);
  }

  //clicked(event){
    //this.addApple();
  //}

  ngOnInit() {
  }
}

//#name="ngModel" 
//#colour="ngModel"

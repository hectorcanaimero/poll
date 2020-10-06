import { Component, ViewEncapsulation } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Tab2Page {
  columns = [
    { name: 'Name' },
    { name: 'Gender' },
    { name: 'Age' }
  ];
  rows = [
    {
      "name": "Ethel Price",
      "gender": "female",
      "age": 22
    },
    {
      "name": "Claudine Neal",
      "gender": "female",
      "age": 55
    },
    {
      "name": "Beryl Rice",
      "gender": "female",
      "age": 67
    },
    {
      "name": "Simon Grimm",
      "gender": "male",
      "age": 28
    }
  ];
 
  tablestyle = 'bootstrap';
  
  constructor() {}

  switchStyle() {
    if (this.tablestyle == 'dark') {
      this.tablestyle = 'bootstrap';
    } else {
      this.tablestyle = 'dark';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import * as countries from 'country-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  ngOnInit() {
    console.log(countries);
  }
}

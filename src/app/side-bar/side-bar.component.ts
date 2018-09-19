import { Component, OnInit, Input } from '@angular/core';
import { interval, Observable } from 'rxjs';
// import { StateService } from '../state-name-data.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  filters_list: Array<any>  = [
    'capacity', 'location', 'Audio-Video'
  ];
  capacityFiltes: Array<any> = [
    'less than 50', '100 to 200', '300 to 500', 'above 500'
  ];
  locationFiltes: Array<any> = [
    '< 5-miles', '5-10 miles', '10-15 miles'
  ];
  Audio_VideoFiltes: Array<any> = [
    'only audio', 'audio & video'
  ];
  ngOnInit() {
  }
}

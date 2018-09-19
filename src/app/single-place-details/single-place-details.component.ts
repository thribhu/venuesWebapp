import { Component, OnInit } from '@angular/core';
import { VenuesDataService } from '../venues-data.service';
import { VenueModel} from '../venue.model';


@Component({
  selector: 'app-single-place-details',
  templateUrl: './single-place-details.component.html',
  styleUrls: ['./single-place-details.component.css']
})
export class SinglePlaceDetailsComponent implements OnInit {
  venue: VenueModel[] = [];
  constructor( private venueService: VenuesDataService) { }
  p = 1;
  ngOnInit() {
    this.venue = this.venueService.getVenues();
    console.log(this.venue);
  }

}

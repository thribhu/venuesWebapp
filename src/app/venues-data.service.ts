import { Injectable } from '@angular/core';
import { VenueModel} from './venue.model';
@Injectable({
  providedIn: 'root'
})
export class VenuesDataService {
  imgaeAddr: Array<string> = [
    'http://myfirstbooking.com/MYImage/8c411a9b-b78b-49b8-bac7-1cee958ce1cc.jpg',
    'http://myfirstbooking.com/MYImage/3fb1cd82-f420-44bb-b2e5-4803f367fffe.jpg',
    'http://myfirstbooking.com/MYImage/64ee1ec5-052f-40a2-a2f6-4f86c2cd489e.jpg',
    'http://myfirstbooking.com/MYImage/a8e32b20-4417-4e6e-89c3-90f438cd9ac3.jpg',
    'http://myfirstbooking.com/MYImage/5d87fa58-b1a1-4ee3-aa5b-e08fc5583e9d.jpg',
    'http://myfirstbooking.com/MYImage/69edab08-fd63-42d5-a9aa-54cbd05c6fe8.jpg',
    'http://myfirstbooking.com/MYImage/85c0f097-b0a5-41d4-8716-cfa2d419a8f9.jpg',
    'http://myfirstbooking.com/MYImage/50a37dc2-36e3-4f57-9085-a05a8cf1a6a4.jpg',
    'http://myfirstbooking.com/MYImage/1490c9a0-742f-42bd-8f86-2b97ccf8aef9.jpg'
  ];
  venues: VenueModel[] = [
    new VenueModel(
      'Bond Park Senior Center',
      'www.google.com',
      'http://myfirstbooking.com/MYImage/8c411a9b-b78b-49b8-bac7-1cee958ce1cc.jpg',
      200,
      'yes'
    ),
    new VenueModel(
      'Bond Park Senior Center',
      'www.google.com',
      'http://myfirstbooking.com/MYImage/3fb1cd82-f420-44bb-b2e5-4803f367fffe.jpg',
      200,
      'yes'
    ),
    new VenueModel(
      'Bond Park Senior Center',
      'www.google.com',
      'http://myfirstbooking.com/MYImage/50a37dc2-36e3-4f57-9085-a05a8cf1a6a4.jpg',
      200,
      'yes'
    ),
    new VenueModel(
      'Bond Park Senior Center',
      'www.google.com',
      'http://myfirstbooking.com/MYImage/5d87fa58-b1a1-4ee3-aa5b-e08fc5583e9d.jpg',
      200,
      'yes'
    ),
    new VenueModel(
      'Bond Park Senior Center',
      'www.google.com',
      'http://myfirstbooking.com/MYImage/5d87fa58-b1a1-4ee3-aa5b-e08fc5583e9d.jpg',
      200,
      'yes'
    ),
    new VenueModel(
      'Bond Park Senior Center',
      'www.google.com',
      'http://myfirstbooking.com/MYImage/8c411a9b-b78b-49b8-bac7-1cee958ce1cc.jpg',
      200,
      'yes'
    ),
    new VenueModel(
      'Bond Park Senior Center',
      'www.google.com',
      'http://myfirstbooking.com/MYImage/3fb1cd82-f420-44bb-b2e5-4803f367fffe.jpg',
      200,
      'yes'
    ),
    new VenueModel(
      'Bond Park Senior Center',
      'www.google.com',
      'http://myfirstbooking.com/MYImage/50a37dc2-36e3-4f57-9085-a05a8cf1a6a4.jpg',
      200,
      'yes'
    ),
    new VenueModel(
      'Bond Park Senior Center',
      'www.google.com',
      'http://myfirstbooking.com/MYImage/5d87fa58-b1a1-4ee3-aa5b-e08fc5583e9d.jpg',
      200,
      'yes'
    ),
    new VenueModel(
      'Bond Park Senior Center',
      'www.google.com',
      'http://myfirstbooking.com/MYImage/5d87fa58-b1a1-4ee3-aa5b-e08fc5583e9d.jpg',
      200,
      'yes'
    )
  ];
  constructor() { }
  getVenues() {
    return this.venues.slice();
  }
}

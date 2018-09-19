import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointobserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private router: Router, public breakpointobserver: BreakpointObserver) { }

  ngOnInit() {
  }
  addVenue() {
    this.router.navigate(['addForm']);
  }
}

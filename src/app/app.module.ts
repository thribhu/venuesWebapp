import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule,
        MatSidenavModule, MatIconModule, MatListModule,
        MatGridListModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule,
         MatRadioModule, MatOptionModule, MatAutocompleteModule, MatDividerModule, MatExpansionModule } from '@angular/material';

import { IntroAppFormComponent } from './intro-app-form/intro-app-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';
import { PlacesListComponent } from './places-list/places-list.component';
import { SinglePlaceDetailsComponent } from './single-place-details/single-place-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent} from './side-bar/side-bar.component';


const appRoutes: Routes = [
  {path: '', component: PlacesListComponent},
  {path: 'addForm', component: IntroAppFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IntroAppFormComponent,
    SideBarComponent,
    PlacesListComponent,
    SinglePlaceDetailsComponent,
    NavBarComponent,

  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatMenuModule,
    MatRadioModule,
    MatOptionModule,
    MatFormFieldModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatExpansionModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

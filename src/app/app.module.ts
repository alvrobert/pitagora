
import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
/*firebase*/
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {MenuComponent} from './components/menu/menu.component';
import {FooterComponent} from './components/footer/footer.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {
  DateAdapter,
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule,
  MatIconModule,
  MatInputModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTableModule, MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import { InConstructionComponent } from './components/in-construction/in-construction.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import {CookieService} from 'ngx-cookie-service';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import {DateFormat} from './Class/date-format';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {NumeralModule} from 'ngx-numeral';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { PersonComponent } from './components/person/person.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDUq4SZwj8eaLkUJ-_qKDGw6PiV3ryOOw4',
    authDomain: 'premiumgarage-c0f80.firebaseapp.com',
    databaseURL: 'https://premiumgarage-c0f80.firebaseio.com',
    projectId: 'premiumgarage-c0f80',
    storageBucket: 'premiumgarage-c0f80.appspot.com',
    messagingSenderId: '224048404997'
  }
};

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [],
    component: HomeComponent,
    children: []
  },
  {
    path: 'person',
    canActivate: [],
    component: PersonComponent,
    children: []
  },
  {
    path: 'person/:id',
    canActivate: [],
    component: PersonDetailComponent,
    children: []
  },
  {
    path: 'in-construction',
    canActivate: [],
    component: InConstructionComponent,
    children: []
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    NotFoundComponent,
    HomeComponent,
    InConstructionComponent,
    LoadingSpinnerComponent,
    ConfirmationDialogComponent,
    PersonComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    RouterModule.forRoot(appRoutes),
    NumeralModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    GooglePlaceModule,
    MatExpansionModule
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [
    CookieService,
    { provide: DateAdapter, useClass: DateFormat },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('en-in'); // DD/MM/YYYY
  }
}

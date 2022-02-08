import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {PersonComponent} from './components/person/person.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'person', component: PersonComponent },
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    SidebarComponent,
    PersonComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

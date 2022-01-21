import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonComponent } from './person/person.component';
const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'person', component: PersonComponent }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}



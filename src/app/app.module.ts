import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { ListTestComponent } from './list-test/list-test.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { EncountersComponent } from './encounters/encounters.component';
import { ReportComponent } from './report/report.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { RouterModule, Routes } from '@angular/router'; //using rounting functionalities for multiple components

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'encounters', component: EncountersComponent },
  { path: 'report', component: ReportComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    //ListTestComponent,
    WelcomeComponent,
    RegisterComponent,
    EncountersComponent,
    ReportComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

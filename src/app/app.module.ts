import { AngularFireDatabase } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NewsComponent } from './news/news.component';
import { EmailComponent } from './email/email.component';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { HomeComponent } from './home/home.component';
import { PatronagesComponent } from './patronages/patronages.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamsDetailsComponent } from './teams-details/teams-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    NewsComponent,
    EmailComponent,
    HomeComponent,
    PatronagesComponent,
    TeamsComponent,
    TeamsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

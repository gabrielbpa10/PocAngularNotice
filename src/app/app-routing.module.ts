import { TeamsDetailsComponent } from './teams-details/teams-details.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
{path:"", component: HomeComponent},
{path:"news/:news", component: NewsComponent},
{path:"teams-details/:id", component:TeamsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

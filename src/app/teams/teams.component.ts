import { ApiTeamsService } from './api-teams.service';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams:Observable<any[]>;

  constructor(public firestore:AngularFirestore, api:ApiTeamsService) {
    this.teams = api.getEscudos();

   }

  ngOnInit(): void {
  }

}

import { ApiTeamsDetailsService } from './api-teams-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.css']
})
export class TeamsDetailsComponent implements OnInit {

  team;
  describes: Observable<any>;
  items = [];
  constructor(public route: ActivatedRoute, public firestore: AngularFirestore, public api: ApiTeamsDetailsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((objeto: any)=> {


      this.describes = this.api.getTeamsDetails();

        this.team = objeto.id;

      for(var i=0; i<=this.items.length;i++){
        this.items.pop();
      }

      this.describes.subscribe(describes =>{
      for(const describe of describes){
          if(describe.id == this.team){
            this.items.push(describe);
          }
        }

      })
   })

  }

}

import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiTeamsDetailsService {

  news: Observable<any[]>;
  details = [];

  constructor(public firestore: AngularFirestore) { }

  /*getTeamsDetails(team): Array<any[]>{
    this.news = this.firestore.collection('news').valueChanges();
    this.news.subscribe(d =>{
      for(const describe of d){
          if(describe.id == team){
            this.details.push(describe);
          }
        }

      })

    return this.details;
  }*/

  getTeamsDetails(): Observable<any>{

    return this.firestore.collection('news').valueChanges();
}
}

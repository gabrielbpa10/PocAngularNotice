import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiTeamsService {

  constructor(public firestore:AngularFirestore) { }

  getEscudos(): Observable<any>{

    return this.firestore.collection('teams').valueChanges();
}
}

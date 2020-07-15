import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPatronagesService {


  constructor(public firestore:AngularFirestore) {}

  getPatronages(): Observable<any>{

        return this.firestore.collection('patrocinio').valueChanges();
  }

}

import { AngularFirestore } from '@angular/fire/firestore';
import { ApiPatronagesService } from './apipatronages.service';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patronages',
  templateUrl: './patronages.component.html',
  styleUrls: ['./patronages.component.css']
})
export class PatronagesComponent implements OnInit {

  patronages: Observable<any[]>;

  constructor(public api:ApiPatronagesService, public firestore: AngularFirestore) {
    this.patronages = this.api.getPatronages();
    this.patronages.subscribe(patronages =>{
      for(const patronage of patronages){
          console.log(patronage);
      }
    });
  }

  ngOnInit(): void {}

}

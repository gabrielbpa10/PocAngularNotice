import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notices: Observable<any>;
  noticePrincipal = [];
  noticesDestaques = [];
  constructor(public firestore: AngularFirestore) {
    this.notices = firestore.collection('news').valueChanges();
    this.notices.subscribe(notices => {
      for(const notice of notices){

          this.noticePrincipal.push(notice);
          if(notice.id == 2 || notice.id == 3){
            this.noticesDestaques.push(notice);
          }
      }
    });
  }

  ngOnInit(): void {
  }

}

import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  category;
  describes: Observable<any>;
  items = [];

  constructor(public route: ActivatedRoute, public firestore:AngularFirestore) {
    
   }

  ngOnInit(): void {
    this.route.params.subscribe((objeto: any)=> {
  
      this.category = objeto.news;
      
      this.describes = this.firestore.collection('news').valueChanges();
      
      for(var i=0; i<=this.items.length;i++){
        this.items.pop();
      }
      
      this.describes.subscribe(describes =>{
      for(const describe of describes){
          if(describe.categoria == this.category){
            this.items.push(describe);
          }
        }
        
      }) 
   })
   
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  categories: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.categories = firestore.collection('categorias').valueChanges();
  }

  ngOnInit(): void {
    /*this.categories.subscribe(categories =>{
      for(const category:categories){

      }
    });*/
  }

}

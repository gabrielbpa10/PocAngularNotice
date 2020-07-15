import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestoreCollection} from '@angular/fire/firestore';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  texto ={email:""};
  teste = {email:"gmail"}
  id:any;


  constructor(private db: AngularFireDatabase, public firestore: AngularFirestore) { }


  ngOnInit(): void {
  }

  setEmail(texto):void{
    this.texto.email = texto;
  }

  setEncaminharEmail(){
    if(this.texto.email.includes("@")){
    this.id = document.getElementById("invalid");
    this.id.style.display = "none";

    this.db.list("email").push(this.texto)
    .then((result: any) => {
      console.log(result.key);
    });

    alert("Email " + this.texto.email + " salvo com sucesso!");

  } else if(!this.texto.email.includes("@")){
    this.id = document.getElementById("invalid");
    this.id.innerText = "E-mail inválido!";
    this.id.style.display = "block";
  }
}

}

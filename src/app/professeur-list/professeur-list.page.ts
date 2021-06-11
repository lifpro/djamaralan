import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-professeur-list',
  templateUrl: './professeur-list.page.html',
  styleUrls: ['./professeur-list.page.scss'],
})
export class ProfesseurListPage implements OnInit {
  professeurs: { id: number, nom: string, prenom: string, photo: string, telephone: string, email: string }[] = [
    { "id": 1, "nom": "DIARRA", "prenom": "Fanta", "photo": "person", "telephone": "78905467", "email": "diarra@gmail.com" },
    { "id": 2, "nom": "SISSOKO", "prenom": "Kadidia", "photo": "search", "telephone": "78905467", "email": "sissoko@gmail.com" },
    { "id": 3, "nom": "DRAME", "prenom": "Harouna", "photo": "person", "telephone": "78905467", "email": "drame@gmail.com" },
    { "id": 4, "nom": "TRAORE", "prenom": "Boumbia", "photo": "person", "telephone": "78905467", "email": "drame@gmail.com" },
    { "id": 5, "nom": "COULIBALY", "prenom": "Aissata", "photo": "person", "telephone": "78905467", "email": "drame@gmail.com" }
  ];
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HTTP) {
    // this.http.get(`${this.apiUrl}`).then(
    //   data => {
    //     this.professeurs = data['body']['results'];
    //   }, err => {
    //     console.log("Erreur !")
    //   });
  }

  ngOnInit() {
  }

}

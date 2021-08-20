import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Search } from '../models/search';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.page.html',
  styleUrls: ['./etudiant-list.page.scss'],
})
export class EtudiantListPage implements OnInit {
  // etudiants: { id: number, nom: string, prenom: string, sexe: string, telephone: string, email: string, formation: string }[] = [
  //   { "id": 111, "nom": "dIARRA", "prenom": "Fanta", "sexe": "F", "telephone": "78905467", "email": "diarra@gmail.com", "formation": "Télécom" },
  //   { "id": 2, "nom": "sISSOKO", "prenom": "Kadidia", "sexe": "F", "telephone": "78905467", "email": "sissoko@gmail.com", "formation": "Miage" },
  //   { "id": 3, "nom": "dRAME", "prenom": "Harouna", "sexe": "M", "telephone": "78905467", "email": "drame@gmail.com", "formation": "Génie logiciel" },
  //   { "id": 4, "nom": "tRAORE", "prenom": "Boumbia", "sexe": "M", "telephone": "78905467", "email": "drame@gmail.com", "formation": "Génie logiciel" },
  //   { "id": 5, "nom": "cOULIBALY", "prenom": "Aissata", "sexe": "F", "telephone": "78905467", "email": "drame@gmail.com", "formation": "Génie logiciel" }
  // ];
  nbe = 0;
  etudiants: [] = [];
  item: Search;
  collection: AngularFirestoreCollection;
  constructor(private router: Router,
    private route: ActivatedRoute,
    public databaseService: AngularFirestore) {
    this.collection = databaseService.collection('etudiants');
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.item = this.router.getCurrentNavigation().extras.state.fitre;
        this.findEtudiant(this.item.cycle, this.item.formation);
      }
    });


  }

  findEtudiant(cycle, formation) {
    let ref = this.databaseService.collection('etudiants', ref => {
      return ref
        .where('cycle', '==', cycle)
        .where('formation', '==', (formation) ? formation : "")
    })
    return ref.valueChanges().subscribe(data => {
      this.etudiants = this.getDatas(data);
      this.nbe = this.etudiants.length;
    });
  }
  public getDatas(data): any[] | any {
    return data !== null && data.hasOwnProperty('content') ? data.content : data;
  }

  openDetail(e) {
    let navigationExtras: NavigationExtras = {
      skipLocationChange: false,
      state: {
        etud: e,
      }
    };
    this.router.navigate(['/etudiant-detail'], navigationExtras);
  }
}

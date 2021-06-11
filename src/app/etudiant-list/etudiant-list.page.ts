import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.page.html',
  styleUrls: ['./etudiant-list.page.scss'],
})
export class EtudiantListPage implements OnInit {
  etudiants: { id: number, nom: string, prenom: string, sexe: string, telephone: string, email: string, formation: string }[] = [
    { "id": 111, "nom": "dIARRA", "prenom": "Fanta", "sexe": "F", "telephone": "78905467", "email": "diarra@gmail.com", "formation": "Télécom" },
    { "id": 2, "nom": "sISSOKO", "prenom": "Kadidia", "sexe": "F", "telephone": "78905467", "email": "sissoko@gmail.com", "formation": "Miage" },
    { "id": 3, "nom": "dRAME", "prenom": "Harouna", "sexe": "M", "telephone": "78905467", "email": "drame@gmail.com", "formation": "Génie logiciel" },
    { "id": 4, "nom": "tRAORE", "prenom": "Boumbia", "sexe": "M", "telephone": "78905467", "email": "drame@gmail.com", "formation": "Génie logiciel" },
    { "id": 5, "nom": "cOULIBALY", "prenom": "Aissata", "sexe": "F", "telephone": "78905467", "email": "drame@gmail.com", "formation": "Génie logiciel" }
  ];
  constructor() { }

  ngOnInit() {
  }

}

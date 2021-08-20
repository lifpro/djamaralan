import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../models/etudiant';

@Component({
  selector: 'app-etudiant-detail',
  templateUrl: './etudiant-detail.page.html',
  styleUrls: ['./etudiant-detail.page.scss'],
})
export class EtudiantDetailPage implements OnInit {
  item: Etudiant = new Etudiant();
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.item = this.router.getCurrentNavigation().extras.state.etud;
      }
    });

  }
  appeler() {

  }
}

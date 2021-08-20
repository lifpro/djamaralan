import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Search } from '../models/search';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  titre: string = 'La techno est géniale'
  imgUrl = "../assets/img/logo.png";
  item: Search;
  constructor(private router: Router,
    public toast: ToastController) {
    this.item = new Search();
    this.item.cycle = "M";
  }

  async search() {
    if (!this.item.formation) {
      //alert('Veuillez sélectionner la formation');
      const mymessage = await this.toast.create({
        message: 'Veuillez sélectionner la formation',
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
      mymessage.present();
      return
    }
    let navigationExtras: NavigationExtras = {
      skipLocationChange: false,
      state: {
        fitre: this.item,
        var2: "Coucou"
      }
    };
    this.router.navigate(['/etudiant-list'], navigationExtras);

  }

}

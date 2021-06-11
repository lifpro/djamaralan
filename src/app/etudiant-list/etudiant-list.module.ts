import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtudiantListPageRoutingModule } from './etudiant-list-routing.module';

import { EtudiantListPage } from './etudiant-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtudiantListPageRoutingModule
  ],
  declarations: [EtudiantListPage]
})
export class EtudiantListPageModule {}

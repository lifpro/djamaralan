import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtudiantDetailPageRoutingModule } from './etudiant-detail-routing.module';

import { EtudiantDetailPage } from './etudiant-detail.page';
import { TrombiborderDirective } from '../directives/trombiborder.directive';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    EtudiantDetailPageRoutingModule
  ],
  declarations: [EtudiantDetailPage, TrombiborderDirective]
})
export class EtudiantDetailPageModule { }

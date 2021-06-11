import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesseurDetailPageRoutingModule } from './professeur-detail-routing.module';

import { ProfesseurDetailPage } from './professeur-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesseurDetailPageRoutingModule
  ],
  declarations: [ProfesseurDetailPage]
})
export class ProfesseurDetailPageModule {}

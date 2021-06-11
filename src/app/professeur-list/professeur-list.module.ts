import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesseurListPageRoutingModule } from './professeur-list-routing.module';

import { ProfesseurListPage } from './professeur-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesseurListPageRoutingModule
  ],
  declarations: [ProfesseurListPage]
})
export class ProfesseurListPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesseurDetailPage } from './professeur-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesseurDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesseurDetailPageRoutingModule {}

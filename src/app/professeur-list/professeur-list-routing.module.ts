import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesseurListPage } from './professeur-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesseurListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesseurListPageRoutingModule {}

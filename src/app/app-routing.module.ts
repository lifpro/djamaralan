import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'etudiant-list',
    loadChildren: () => import('./etudiant-list/etudiant-list.module').then(m => m.EtudiantListPageModule)
  },
  {
    path: 'etudiant-detail',
    loadChildren: () => import('./etudiant-detail/etudiant-detail.module').then(m => m.EtudiantDetailPageModule)
  },
  {
    path: 'professeur-list',
    loadChildren: () => import('./professeur-list/professeur-list.module').then(m => m.ProfesseurListPageModule)
  },
  {
    path: 'professeur-detail/:id',
    loadChildren: () => import('./professeur-detail/professeur-detail.module').then(m => m.ProfesseurDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

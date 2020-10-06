import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-centro',
    loadChildren: () => import('./pages/add-centro/add-centro.module').then( m => m.AddCentroPageModule)
  },
  {
    path: 'edit-centro',
    loadChildren: () => import('./pages/edit-centro/edit-centro.module').then( m => m.EditCentroPageModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./pages/charts/charts.module').then( m => m.ChartsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

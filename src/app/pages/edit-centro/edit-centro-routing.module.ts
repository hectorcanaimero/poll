import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCentroPage } from './edit-centro.page';

const routes: Routes = [
  {
    path: ':slug',
    component: EditCentroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCentroPageRoutingModule {}

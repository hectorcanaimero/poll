import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCentroPage } from './add-centro.page';

const routes: Routes = [
  {
    path: '',
    component: AddCentroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCentroPageRoutingModule {}

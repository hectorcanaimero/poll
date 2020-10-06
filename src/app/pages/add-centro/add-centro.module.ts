import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCentroPageRoutingModule } from './add-centro-routing.module';

import { AddCentroPage } from './add-centro.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddCentroPageRoutingModule
  ],
  declarations: [AddCentroPage]
})
export class AddCentroPageModule {}

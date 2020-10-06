import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCentroPageRoutingModule } from './edit-centro-routing.module';

import { EditCentroPage } from './edit-centro.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EditCentroPageRoutingModule
  ],
  declarations: [EditCentroPage]
})
export class EditCentroPageModule {}

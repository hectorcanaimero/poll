import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartsPageRoutingModule } from './charts-routing.module';
import { ChartsPage } from './charts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleChartsModule,
    ChartsPageRoutingModule
  ],
  declarations: [ChartsPage]
})
export class ChartsPageModule {}

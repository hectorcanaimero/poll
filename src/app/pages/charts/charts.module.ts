import { ComponentsModule } from './../../shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { IonicModule } from '@ionic/angular';
import { AngularResizedEventModule } from 'angular-resize-event';
import { ChartsPageRoutingModule } from './charts-routing.module';
import { ChartsPage } from './charts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HighlightModule,
    AngularResizedEventModule,
    ChartsPageRoutingModule
  ],
  declarations: [ChartsPage],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
})
export class ChartsPageModule {}

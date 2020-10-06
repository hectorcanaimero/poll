import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GraphicsComponent } from './graphics/graphics.component';

@NgModule({
  exports: [GraphicsComponent],
  declarations: [GraphicsComponent],
  entryComponents: [GraphicsComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    NgxChartsModule,
  ]
})
export class ComponentsModule { }

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { ResizedEvent } from 'angular-resize-event';

import { Centro, Poll } from '../shared/interfaces/centro.interface';
import { FirestoreService } from '../shared/services/firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', "../../../node_modules/highlight.js/styles/github.css"]
})

export class Tab1Page implements OnInit {

  abstencion: number = 0;
  
  view: any = [];
  view1: any = []
  global: any = [];
  electores: any = [];
  
  poll: any = [{ id: "", data: {} as Poll }]; 
  items: any = [{ id: "", data: {} as Centro }];
  class: any = {circle: 'blue', footer: 'primary'};
  
  lines = {
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: true,
    showXAxisLabel: true,
    xAxisLabel: 'Hora',
    showYAxisLabel: false,
    yAxisLabel: 'Participacion',
    colorScheme: 'nightLights',
    legendPosition: 'below',
    legendTitle: "Leyenda",
  }

  bars = { 
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: false,
    showXAxisLabel: false,
    showYAxisLabel: false,
    colorScheme: 'cool',
  }

  constructor(
    private db: AngularFirestore,
    private fs: FirestoreService,
  ) {}

  ngOnInit() {
    const arr = [{ name: "CNE", series: []}, {name: "PSUV", series: [] }];
    // getCentro
    this.fs.select('centro').subscribe((result) => {
      this.poll = [];
      this.items = [];
      result.forEach(({ payload }) => {
        const item =  payload.doc.data();
        this.items.push({ id: payload.doc.id, data: item });
        arr[0].series.push({name: item['total'].data, value: item['total'].cne });
        arr[1].series.push({name: item['total'].data, value: item['total'].psuv});
      });
      this.poll = arr;
      this.electores = this.items.reduce((accum, item) => accum + item.data.electores, 0);
      const cne = this.items.reduce((accum, item) => accum + item.data.total.cne, 0);
      const psuv = this.items.reduce((accum, item) => accum + item.data.total.psuv, 0);
      this.global = [
        { name: "ELECTORES", value: this.electores},
        { name: "PARTICIPACION", value: cne},
        { name: "ABSTENCION", value: this.electores - cne},
        { name: "PSUV", value: psuv },
        { name: "OTROS", value: cne - psuv }
      ];
      this.abstencion = 100 - Math.round((cne * 100) / this.electores);
      if (this.abstencion <= 30) this.class = {circle: 'green', footer: 'success'};
      if (this.abstencion >= 60) this.class = { circle: 'red', footer: 'danger' };
    })
  }

  onResized12 = (event: ResizedEvent) => this.view = [event.newWidth, 300];
  onResized6 = (event: ResizedEvent) => this.view1 = [event.newWidth, 300];

}

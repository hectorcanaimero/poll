import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ResizedEvent } from 'angular-resize-event';
import { Centro } from '../shared/interfaces/centro.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', "../../../node_modules/highlight.js/styles/github.css"]
})

export class Tab1Page implements OnInit, AfterViewInit {

  abstencion: number = 0;
  view: any = [];
  view1: any = []
  electores: any = [];
  totalPSUV: number = 0;
  totalCNE: number = 0;
  items: any = [{ id: "", data: {} as Centro }];
  lineBar: any = [];
  lineBarCne: any = [];
  global: any = [];
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

  constructor(
    private db: AngularFirestore,
    private fs: FirestoreService,
  ) {}

  ngOnInit() {
    const arr = [{ name: "CNE", series: []}, {name: "PSUV", series: [] }];
    this.fs.select('centro').subscribe((result) => {
      this.items = [];
      result.forEach(({ payload }) => this.items.push({ id: payload.doc.id, data: payload.doc.data() }));
      this.electores = this.items.reduce((accum, item) => accum + item.data.electores, 0);
    });
    this.fs.select('psuv').subscribe((result) => {
      this.lineBar = [];
      result.forEach(({ payload }) => this.lineBar.push({ name: payload.doc.data()['data'], value: payload.doc.data()['psuv'] }));
      this.totalPSUV = this.lineBar.reduce((accum, item) => accum + item.value, 0);
      arr[1].series.push(this.lineBar);
      this.fs.select('cne').subscribe((result1) => {
        this.lineBarCne = [];
        result1.forEach(({ payload }) => this.lineBarCne.push({ name: payload.doc.data()['data'], value: payload.doc.data()['cne'] }));
        arr[0].series.push(this.lineBarCne);
        this.global = arr;
        this.totalCNE = this.lineBarCne.reduce((accum, item) => accum + item.value, 0);
        this.abstencion = 100 - Math.round((this.totalCNE * 100) / this.electores);
        if (this.abstencion <= 30) this.class = {circle: 'green', footer: 'success'};
        if (this.abstencion >= 60) this.class = { circle: 'red', footer: 'danger' };
      });
    });
  }

  ngAfterViewInit() {
  }

  onResized12 = (event: ResizedEvent) => this.view = [event.newWidth, 300];
  onResized6 = (event: ResizedEvent) => this.view1 = [event.newWidth, 300];

}

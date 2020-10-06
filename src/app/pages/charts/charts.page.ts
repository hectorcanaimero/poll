import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResizedEvent } from 'angular-resize-event';
import { NavController, NavParams } from '@ionic/angular';

import { Poll, Centro } from './../../shared/interfaces/centro.interface';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss', "../../../../node_modules/highlight.js/styles/github.css",],
})

export class ChartsPage implements OnInit {

  view: any = [];
  view1: any = [];

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

  items: any = { 
    centro: {id: "", data: {} as Centro},
  };
  global: any = [];
  poll: any = [{ id: "", data: {} as Poll }]; 
  table: any = [{ id: "", data: {} as Poll }]; 
  arreglo: any[] = [];
  abstencion: number = 0;
  class: any = {circle: 'blue', footer: 'primary'};

  constructor(
    private nav: NavController,
    private act: ActivatedRoute,
    private db: AngularFirestore,
    private fs: FirestoreService,
  ) { }
  
  ngOnInit() {
    this.poll = [];
    const arr = [{ name: "CNE", series: []}, {name: "PSUV", series: [] }];
    this.act.url.subscribe((res) => {
      this.fs.selectId('centro', res[0].path).subscribe(({ payload }) => {
        this.items.centro.id = payload.id;
        this.items.centro.data = payload.data();
      })
      this.db.collection('centro').doc(res[0].path).collection('poll', ref => ref.orderBy('data')).valueChanges().pipe(
      map((res: Poll[]) => res)).subscribe((doc) => {
        doc.forEach(el => {
          arr[0].series.push({name: el.data, value: el.cne });
          arr[1].series.push({name: el.data, value: el.psuv});
        })
        this.poll = arr;
        this.global = [
          { name: "CNE", value: doc.reduce((accum, item) => accum + item.cne, 0)},
          {name: "PSUV", value: doc.reduce((accum, item) => accum + item.psuv, 0) }
        ];
        console.log(this.poll);
        this.abstencion = 100 - Math.round((this.global[0].value * 100) / this.items.centro.data.electores);
        if (this.abstencion <= 30) this.class = {circle: 'green', footer: 'success'};
        if (this.abstencion >= 60) this.class = { circle: 'red', footer: 'danger' };
      });
      this.db.collection('centro').doc(res[0].path).collection('poll', ref => ref.orderBy('data', 'desc')).valueChanges()
      .pipe( map((res: Poll[]) => res)).subscribe((doc) => this.table = doc);
    })
  }

  onResized12 = (event: ResizedEvent) => this.view = [event.newWidth, 300];
  onResized6 = (event: ResizedEvent) => this.view1 = [event.newWidth, 300];

  onBack = () => this.nav.navigateBack('tabs/tab3');
}

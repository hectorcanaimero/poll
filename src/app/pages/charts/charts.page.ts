import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavController } from '@ionic/angular';

import { Poll, Centro } from './../../shared/interfaces/centro.interface';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})

export class ChartsPage implements OnInit {

  items: any = { 
    centro: {id: "", data: {} as Centro},
    poll: [{ id: "", data: {} as Poll}]
  };

  constructor(
    private nav: NavController,
    private act: ActivatedRoute,
    private fs: FirestoreService,
  ) { }

  ngOnInit() {
    this.act.url.subscribe((res) => {
      this.fs.selectId('centro', res[0].path).subscribe((res) => {
        this.items.centro.id = res.payload.id;
        this.items.centro.data = res.payload.data();
      })
      this.fs.pollCentro(res[0].path).subscribe((index) => 
        index.forEach(doc => {
          this.items.poll.id = doc.id
          this.items.poll.data = doc.data()
        })
      );
    })
    console.log(this.items);
  }

  onBack = () => this.nav.navigateBack('tabs/tab3');
}

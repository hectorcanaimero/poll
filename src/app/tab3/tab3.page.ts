import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Centro } from './../shared/interfaces/centro.interface';
import { FirestoreService } from './../shared/services/firestore.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  items: any = [{ id: "", data: {} as Centro }]; 

  constructor(
    private nav: NavController,
    private fire: FirestoreService) {}

  ngOnInit() {
    this.onGetData();
  }

  onGetData = () => {
    this.fire.select('centro').subscribe((result) => {
      this.items = [];
      result.forEach(({ payload }) => this.items.push({ id: payload.doc.id, data: payload.doc.data() }));
    });
    console.log(this.items);
  }

  onNext = (item: string) => this.nav.navigateForward(item);
}

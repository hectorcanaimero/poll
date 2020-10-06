import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent implements OnInit {

  @Input() results: any[] = []
  @Input() type: string = ''
  @Input() options: any = [];
  @Input() view: any = [];
  @Input() height: number = 350;

  constructor() { }

  ngOnInit() {
    timer(500).subscribe(() => console.log(this.results));
  }
}

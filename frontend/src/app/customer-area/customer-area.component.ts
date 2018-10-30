import { Component, OnInit } from '@angular/core';
import { PlainGalleryConfig, LineLayout, PlainGalleryStrategy, Image } from '../../../node_modules/@ks89/angular-modal-gallery';

@Component({
  selector: 'app-customer-area',
  templateUrl: './customer-area.component.html',
  styleUrls: ['./customer-area.component.scss']
})
export class CustomerAreaComponent implements OnInit {

  public images: Image[] = [];

  plainGalleryRow: PlainGalleryConfig;
  constructor() { }

  ngOnInit() {
    this.images.push(new Image(
      0,
      {
        img: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ));
    this.images.push(new Image(
      1,
      {
        img: 'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ));

    this.plainGalleryRow = {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout({ width: '80px', height: '80px' }, { length: this.images.length, wrap: true }, 'flex-start')
    };
  }

}

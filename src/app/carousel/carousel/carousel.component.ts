import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Item } from '../carousel.directive';

@Component({
  selector: 'hs-carousel',
  templateUrl: './carousel.component.html',
  exportAs: 'car',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CarouselComponent implements OnInit {
  items: Partial<Item>[] = [
    { url: '../../../assets/img-01.jpg', title: 'Title 1' },
    { url: '../../../assets/img-02.jpg', title: 'Title 2' },
    { url: '../../../assets/img-03.jpg', title: 'Title 3' },
  ];
  constructor() {}

  ngOnInit(): void {}
  //toggleAutoplay(){

  // }
} // class

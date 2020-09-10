import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselDirective } from './carousel.directive';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [CarouselDirective, CarouselComponent],
  imports: [
    CommonModule
  ],
  exports: [CarouselComponent]
})
export class CarouselModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDirectivesModule } from '../template-directives/template-directives.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [TemplateDirectivesModule, CommonModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}

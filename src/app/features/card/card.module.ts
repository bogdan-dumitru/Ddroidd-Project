import { NgModule } from '@angular/core';
import { CardRoutingModule } from './card-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule {
}

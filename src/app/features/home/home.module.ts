import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}

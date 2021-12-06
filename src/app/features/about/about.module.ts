import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from '@app/features/about/about-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule {
}

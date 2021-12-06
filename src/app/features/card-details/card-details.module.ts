import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { CardDetailsRoutingModule } from '@app/features/card-details/card-details-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    CardDetailsRoutingModule
  ]
})
export class CardDetailsModule {
}

import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from '@app/features/contact/contact-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule {
}

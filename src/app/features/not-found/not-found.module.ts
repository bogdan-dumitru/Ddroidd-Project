import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '@app/features/not-found/not-found.component';
import { NotFoundRoutingModule } from '@app/features/not-found/not-found-routing.module';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule {
}

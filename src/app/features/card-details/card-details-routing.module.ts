import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from '@app/features/card-details/card-details.component';

const cardDetailsRoutes: Routes = [
  {
    path: ':id',
    component: CardDetailsComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(cardDetailsRoutes)],
  exports: [RouterModule]
})

export class CardDetailsRoutingModule {
}

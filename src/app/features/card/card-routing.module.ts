import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card.component';

const cardRoutes: Routes = [
  {
    path: '',
    component: CardComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(cardRoutes)],
  exports: [RouterModule]
})

export class CardRoutingModule {
}

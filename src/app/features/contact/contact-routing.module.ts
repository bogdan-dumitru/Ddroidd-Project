import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '@app/features/contact/contact.component';

const contactRoutes: Routes = [
  {
    path: '',
    component: ContactComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(contactRoutes)],
  exports: [RouterModule]
})

export class ContactRoutingModule {
}

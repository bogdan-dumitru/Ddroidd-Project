import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '@app/features/about/about.component';

const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule]
})

export class AboutRoutingModule {
}

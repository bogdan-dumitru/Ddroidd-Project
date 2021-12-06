import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'card-details',
    loadChildren: () => import('./features/card-details/card-details.module').then(m => m.CardDetailsModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./features/not-found/not-found.module').then(m => m.NotFoundModule),
  },
  {
    path: '404',
    loadChildren: () => import('./features/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

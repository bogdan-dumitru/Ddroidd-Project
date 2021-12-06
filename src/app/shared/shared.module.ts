import { NgModule } from '@angular/core';
import { HomeComponent } from '../features/home/home.component';
import { CardComponent } from '../features/card/card.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '@app/features/about/about.component';
import { ContactComponent } from '@app/features/contact/contact.component';
import { CardDetailsComponent } from '@app/features/card-details/card-details.component';
import { CartComponent } from '@app/shared/cart/cart.component';
import { LoaderComponent } from '@app/shared/loader/loader.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    AboutComponent,
    ContactComponent,
    CardDetailsComponent,
    HeaderComponent,
    CartComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    CardComponent,
    AboutComponent,
    ContactComponent,
    CardDetailsComponent,
    HeaderComponent,
    CartComponent,
    LoaderComponent
  ],
  providers: [
    HomeComponent,
    CardComponent,
    AboutComponent,
    ContactComponent,
    CardDetailsComponent,
    HeaderComponent
  ]
})
export class SharedModule {
}

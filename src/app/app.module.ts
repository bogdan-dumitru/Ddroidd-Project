import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { APP_REDUCER } from '@app/store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '@app/store/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({ state: APP_REDUCER }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Ddroidd',
      maxAge: 25,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

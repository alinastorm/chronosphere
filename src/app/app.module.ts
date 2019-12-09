import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChFFNDOCAoxr3CgC4HIbAi_GpgLQkTXDI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

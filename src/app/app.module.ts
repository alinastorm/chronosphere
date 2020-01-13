import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './video/video.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: CardsComponent},
  {path: 'video', component: VideoComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyChFFNDOCAoxr3CgC4HIbAi_GpgLQkTXDI'
      apiKey: 'AIzaSyDWYw9e3VDQNUFfG-BhBDlYEPlGxzoEcK0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

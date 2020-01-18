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
import { RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';

const routes = [
  {path: '', component: HeaderComponent},
  {path: 'video', component: VideoComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    VideoComponent,
    NavComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyChFFNDOCAoxr3CgC4HIbAi_GpgLQkTXDI'
      // apiKey: 'AIzaSyDWYw9e3VDQNUFfG-BhBDlYEPlGxzoEcK0'
      apiKey: 'AIzaSyChFFNDOCAoxr3CgC4HIbAi_GpgLQkTXDI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

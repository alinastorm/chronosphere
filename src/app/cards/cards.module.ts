import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards.component';
import { AgmCoreModule } from '@agm/core';


const routes: Routes = [
  { path: '', component: CardsComponent }
];

@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyChFFNDOCAoxr3CgC4HIbAi_GpgLQkTXDI'
      // apiKey: 'AIzaSyDWYw9e3VDQNUFfG-BhBDlYEPlGxzoEcK0'
      apiKey: 'AIzaSyChFFNDOCAoxr3CgC4HIbAi_GpgLQkTXDI'
    })
  ]
})
export class CardsModule { }

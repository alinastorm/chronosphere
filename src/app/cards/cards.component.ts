import { Component, OnInit } from '@angular/core';
import { ModelsService } from '../services/models.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {



  public models;


  constructor(private _modelsService: ModelsService) {

  }

  ngOnInit(): void {
    this._modelsService.getModels().pipe(
      map(models => {
        for (const iterator of models.data) {
          iterator.locY = iterator.locY * 1;
        }
        return models;
      }))
      .subscribe(models => {
        this.models = models.data.filter(item => item.Active == 1 && item.os == 1);

      }
      );

  }

}

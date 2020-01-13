import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  items = [
  'Promo 1920-1080.mp4',
  'Archiereyskiy_dvorec.MP4',
  'Dominicanskiy_costel.MP4',
  'Kamennaya_cercov.MP4'
];
  constructor() { }

  ngOnInit() {
  }

}

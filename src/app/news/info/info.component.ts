import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class NewsInfoComponent implements OnInit {
  @Input()
  post: object;
  constructor() { }

  ngOnInit() {
  }

}

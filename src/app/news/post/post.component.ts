import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class NewsPostComponent implements OnInit {
  @Input()
  post: object;

  constructor() { }

  ngOnInit() {
  }

}

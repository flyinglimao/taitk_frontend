import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dataset2019',
  templateUrl: './dataset2019.component.html',
  styleUrls: ['./dataset2019.component.css']
})
export class Dataset2019Component implements OnInit {

  name: string = '';
  unit: string = '';
  holder: string = '';
  author: string = '';
  projectBelong: string = '';
  categories: Object = {
    'NLP': false,
    'Speech Recognition': false,
    'Image Processing': false,
    '機器學習': false,
    '多媒體檢索': false,
    '決策分析': false,
    '群眾行為分析': false,
    '多組學分析': false,
    '智慧用藥': false,
    '精神照護': false,
    '醫療影像': false,
    '_other': false,
  };
  otherCategories: string = '';
  free: boolean = false;
  open: boolean = false;
  feature: string = '';
  methodology: string = '';
  published: string = '';
  giveSpeach: boolean = false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  submit() {
    console.log('y')
    let categories = Object.keys(this.categories).filter(c => this.categories[c]);
    categories.splice(categories.indexOf('_other'), 1, this.otherCategories)
    let request = this.httpClient.post(`${environment.api}/dataset2019`, {
        name: this.name,
        unit: this.unit,
        holder: this.holder,
        author: this.author,
        project_belong: this.projectBelong,
        categories: JSON.stringify(categories),
        free: this.free,
        open: this.open,
        feature: this.feature,
        methodology: this.methodology,
        published: this.published,
        give_speach: this.giveSpeach,
    });
    request.subscribe(data => {
      console.log(data)
    })
  }
}

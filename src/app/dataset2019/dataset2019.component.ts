import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dataset2019',
  templateUrl: './dataset2019.component.html',
  styleUrls: ['./dataset2019.component.css']
})
export class Dataset2019Component implements OnInit {
  datasets: any = [];

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
  free: string = '0';
  open: string = '0';
  feature: string = '';
  methodology: string = '';
  published: string = '';
  resource: string = '';
  giveSpeach: boolean = true;
  email: string = '';

  success: boolean = false;
  error: boolean = false;
  flash: string = '';

  showing: string = '';
  form: boolean = true;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    let request = this.httpClient.get('https://taitk.org/api/dataset2019');
    request.subscribe(data => {
      this.datasets = data
    });
  }

  result() {

  }

  delete() {
    alert('請 mail 管理員\n告知欲刪除之 "資料集名稱" ');
  }

  show(dataset) {
    this.form = true;
    let request = this.httpClient.get(`https://taitk.org/api/dataset2019/${dataset.id}`);
    request.subscribe((dataset: any) => {
      this.flush();
      this.showing = dataset.id;
      this.name = dataset.name;
      this.unit = dataset.unit;
      this.holder = dataset.holder;
      this.author = dataset.author;
      this.email = dataset.email;
      this.projectBelong = dataset.project_belong;
      let categories = JSON.parse(dataset.categories);
      categories.forEach(cate => {
        if (this.categories.hasOwnProperty(cate)) {
          this.categories[cate] = true;
        } else {
          this.categories['_other'] = true;
          this.otherCategories = cate;
        }
      });
      this.free = ''+dataset.free;
      this.open = ''+dataset.open;
      this.feature = dataset.feature;
      this.methodology = dataset.methodology;
      this.published = dataset.published;
      this.resource = dataset.resource;
      this.giveSpeach = !!dataset.give_speach;
    })
  }

  flush() {
    this.form = true;
    this.showing = '';
    this.name = '';
    this.unit = '';
    this.holder = '';
    this.author = '';
    this.email = '';
    this.projectBelong = '';
    this.categories = {
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
    this.otherCategories = '';
    this.free = '0';
    this.open = '0';
    this.feature = '';
    this.methodology = '';
    this.published = '';
    this.resource = '';
    this.giveSpeach = true;
  }
  submit() {
    let categories = Object.keys(this.categories).filter(c => this.categories[c]);
    if (categories.indexOf('_other') > -1) {
      categories.splice(categories.indexOf('_other'), 1, this.otherCategories);
    }
    let request = this.httpClient.post('https://taitk.org/api/dataset2019', {
      name: this.name,
      unit: this.unit,
      holder: this.holder,
      author: this.author,
      email: this.email,
      project_belong: this.projectBelong,
      categories: JSON.stringify(categories),
      free: this.free,
      open: this.open,
      feature: this.feature,
      methodology: this.methodology,
      published: this.published,
      resource: this.resource,
      give_speach: this.giveSpeach ? '1' : '0',
    });
    request.subscribe(data => {
      this.success = true;
      this.flash = '送出成功。'
      this.name = '';
      this.unit = '';
      this.holder = '';
      this.author = '';
      this.email = '';
      this.projectBelong = '';
      this.categories = {
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
      this.otherCategories = '';
      this.free = '0';
      this.open = '0';
      this.feature = '';
      this.methodology = '';
      this.published = '';
      this.resource = '';
      this.giveSpeach = true;
      this.showing = '';
      window.scroll(0, 0);
      this.ngOnInit();
    }, err => {
      this.error = true;
      this.flash = '送出失敗，請重試或通報。';
      window.scroll(0, 0);
      this.ngOnInit();
    });
  }

  datasetByUnit(unit, speach = false) {
    return this.datasets.filter(d => d['project_belong'] === unit && (!speach || d['give_speach'] == '1'));
  }
}

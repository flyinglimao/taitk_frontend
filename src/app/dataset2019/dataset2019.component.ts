import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log(this.categories);
  }
}

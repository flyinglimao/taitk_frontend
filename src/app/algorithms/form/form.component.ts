import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-algorithm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AlgorithmFormComponent implements OnInit {
  @Input()
  editing: boolean;

  @ViewChild('authorInput')
  authorInput: ElementRef;
  @ViewChild('tagInput')
  tagInput: ElementRef;

  jsonMode: boolean = false;
  newAuthorInput: boolean = false;
  newAuthorName: string = '';
  newTagInput: boolean = false;
  newTagName: string = '';
  algorithmData: {
    abbreviation: string,
    fullTitle: string,
    category: string,
    authors: Array<string>,
    tags: Array<string>,
    features: string,
    links: Array<string>,
  } = {
    abbreviation: 'ADSA',
    fullTitle: 'Adversarial Domain Separation and Adaptation',
    category: '類別一',
    authors: ['Jen-Tzung Chien', 'Yu-Hsiu Chen'],
    tags: ['Chinese discourse parser', '中文語篇剖析器'],
    features: 'Domain Adaptation, Pattern Classification',
    links: ['https://github.com/abccaba2000/discourse-parser'],
  }
  algorithmJSON: string;
  jsonErrorToast: boolean = false;

  constructor() { }

  ngOnInit() {
    this.algorithmJSON = JSON.stringify(this.algorithmData, null, 4);
  }

  switchEditMode(json: boolean) {
    this.algorithmData.links = this.algorithmData.links.filter(e => e.length);
    if (!json) {
      try {
        this.algorithmData = JSON.parse(this.algorithmJSON);
      } catch {
        this.jsonErrorToast = true;
        return false;
      }
    } else {
      this.algorithmJSON = JSON.stringify(this.algorithmData, null, 4);
    }
    this.jsonMode = json;
    return true;
  }

  deleteAuthor(author: string) {
    this.algorithmData.authors.splice(this.algorithmData.authors.indexOf(author), 1);
  }

  newAuthor() {
    this.newAuthorInput = true;
  }

  newAuthorSubmit() {
    this.newAuthorInput = false;
    this.algorithmData.authors.push(this.newAuthorName);
    this.newAuthorName = '';
    this.authorInput.nativeElement.focus();
    return false;
  }

  newAuthorDiscard() {
    this.newAuthorInput = false;
    this.newAuthorName = '';
  }

  deleteTag(tag: string) {
    this.algorithmData.tags.splice(this.algorithmData.tags.indexOf(tag), 1);
  }

  newTag() {
    this.newTagInput = true;
  }

  newTagSubmit() {
    this.newTagInput = false;
    this.algorithmData.tags.push(this.newTagName);
    this.newTagName = '';
    this.tagInput.nativeElement.focus();
    return false;
  }

  newTagDiscard() {
    this.newTagInput = false;
    this.newTagName = '';
  }

  recoveryForm() {
    this.jsonErrorToast = false;
    this.algorithmJSON = JSON.stringify(this.algorithmData, null, 4);
  }
}

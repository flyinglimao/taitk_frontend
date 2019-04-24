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

  jsonMode: boolean = false;
  newAuthorInput: boolean = false;
  newAuthorName: string = '';
  algorithmData: {
    abbreviation: string,
    fullTitle: string,
    category: string,
    authors: Array<string>,
    features: string,
  } = {
    abbreviation: 'ADSA',
    fullTitle: 'Adversarial Domain Separation and Adaptation',
    category: '類別一',
    authors: ['Jen-Tzung Chien', 'Yu-Hsiu Chen'],
    features: 'Domain Adaptation, Pattern Classification',
  }
  algorithmJSON: string;
  jsonErrorToast: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  switchEditMode(json: boolean) {
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

  recoveryForm() {
    this.jsonErrorToast = false;
    this.algorithmJSON = JSON.stringify(this.algorithmData, null, 4);
  }
}

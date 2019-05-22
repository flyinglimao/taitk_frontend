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
    inputType: string,
    outputType: string,
  } = {
    abbreviation: '',
    fullTitle: '',
    category: '',
    authors: [],
    tags: [],
    features: '',
    links: [],
    inputType: '',
    outputType: '',
  };
  algorithmJSON: string;
  jsonErrorToast: boolean = false;

  constructor() { }

  ngOnInit() {
    this.algorithmJSON = JSON.stringify(this.algorithmData, null, 4);
  }

  renderUnderLine(raw: string) {
    raw = raw.replace(/&/g, '&amp;');
    raw = raw.replace(/</g, '&lt;');
    raw = raw.replace(/>/g, '&gt;');
    raw = raw.replace(/\\_/g, '&lowbar;');
    raw = raw.replace(/\\\\/g, '&bsol;');
    raw.match(/_\S*_/g).forEach(match => {
      let content = match.match(/_(\S*)_/)[1]
      raw = raw.replace(match, '<u>' + content + '</u>');
    });
    return raw;
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
    if (this.newAuthorInput && this.newAuthorName) {
      this.newAuthorSubmit();
    }
    this.newAuthorInput = true;
  }

  newAuthorSubmit() {
    this.newAuthorInput = false;
    if (this.newAuthorName) {
      this.algorithmData.authors.push(this.newAuthorName);
      this.newAuthorName = '';
      this.authorInput.nativeElement.focus(); 
    }
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
    if (this.newTagInput && this.newTagName) {
      this.newTagSubmit();
    } 
    this.newTagInput = true;
  }

  newTagSubmit() {
    this.newTagInput = false;
    if (this.newTagName) {
      this.algorithmData.tags.push(this.newTagName);
      this.newTagName = '';
      this.tagInput.nativeElement.focus();
    }
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

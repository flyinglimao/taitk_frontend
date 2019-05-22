import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-algorithm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AlgorithmFormComponent implements OnInit {
  @Input()
  editing: boolean;
  @Input()
  algorithmData: {
    abbreviation: string,
    fullTitle: string,
    category: string,
    authors: Array<{name: string, id: number, algorithm_id: number}>,
    tags: Array<{tag: string, id: number, algorithm_id: number}>,
    features: string,
    links: Array<{link: string, description: string, id: number, algorithm_id: number}>,
    parameters: Array<{label: string, description: string, id: number, algorithm_id: number}>,
    datasets: Array<{name: string, link: string, license: string, id: number, algorithm_id: number}>,
    inputType: string,
    outputType: string,
  };

  @ViewChild('authorInput')
  authorInput: ElementRef;
  @ViewChild('tagInput')
  tagInput: ElementRef;

  jsonMode: boolean = false;
  newAuthorInput: boolean = false;
  newAuthorName: string = '';
  newTagInput: boolean = false;
  newTagName: string = '';
  algorithmForm: {
    abbreviation: string,
    fullTitle: string,
    category: string,
    authors: Array<{name: string, id: number}>,
    tags: Array<{tag: string, id: number}>,
    features: string,
    links: Array<{link: string, description: string, id: number}>,
    parameters: Array<{label: string, description: string, id: number}>,
    datasets: Array<{name: string, link: string, license: string, id: number}>,
    inputType: string,
    outputType: string,
  } = {
    abbreviation: null,
    fullTitle: null,
    category: null,
    authors: null,
    tags: null,
    features: null,
    links: null,
    parameters: null,
    datasets: null,
    inputType: null,
    outputType: null,
  };
  algorithmJSON: string;
  jsonErrorToast: boolean = false;

  constructor() { }

  ngOnInit() {
    this.algorithmJSON = JSON.stringify(this.algorithmForm, null, 4);
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
    this.algorithmForm.links = this.algorithmForm.links.filter(e => e.link.length);
    if (!json) {
      try {
        this.algorithmForm = JSON.parse(this.algorithmJSON);
      } catch {
        this.jsonErrorToast = true;
        return false;
      }
    } else {
      this.algorithmJSON = JSON.stringify(this.algorithmForm, null, 4);
    }
    this.jsonMode = json;
    return true;
  }

  deleteAuthor(search: string | number) {
    if (typeof(search) === 'string')
      this.algorithmForm.authors = this.algorithmForm.authors.filter(e => e.name !== search);
    else
      this.algorithmForm.authors = this.algorithmForm.authors.filter(e => e.id !== search);
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
      this.algorithmForm.authors.push({name: this.newAuthorName, id: -1});
      this.newAuthorName = '';
      this.authorInput.nativeElement.focus(); 
    }
    return false;
  }

  newAuthorDiscard() {
    this.newAuthorInput = false;
    this.newAuthorName = '';
  }

  deleteTag(search: string | number) {
    if (typeof(search) === 'string')
      this.algorithmForm.tags = this.algorithmForm.tags.filter(e => e.tag !== search);
    else
      this.algorithmForm.tags = this.algorithmForm.tags.filter(e => e.id !== search);
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
      this.algorithmForm.tags.push({tag: this.newTagName, id: -1});
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
    this.algorithmJSON = JSON.stringify(this.algorithmForm, null, 4);
  }
}

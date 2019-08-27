import { EventEmitter, Component, OnInit, Input, ViewChild, ElementRef, Output } from '@angular/core';
import { AlgorithmService } from 'src/app/algorithm.service';

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
    id: number,
    abbreviation: string,
    title: string,
    category: string,
    authors: Array<{name: string, id: number}>,
    unit: string,
    tags: Array<{tag: string, id: number}>,
    features: string,
    links: Array<{link: string, description: string, id: number}>,
    parameters: Array<{label: string, description: string, id: number, variable: string}>,
    datasets: Array<{name: string, link: string, license: string, id: number}>,
    input_type: string,
    output_type: string,
    remote_secret: string,
  } = {
    id: -1,
    abbreviation: '',
    title: '',
    category: '',
    authors: [],
    unit: '',
    tags: [],
    features: '',
    links: [],
    parameters: [],
    datasets: [],
    input_type: '',
    output_type: '',
    remote_secret: ''
  };

  @Output()
  @Input()
  algorithmDataChange = new EventEmitter<{
    id: number,
    abbreviation: string,
    title: string,
    category: string,
    authors: Array<{name: string, id: number, delete: boolean}>,
    unit: string,
    tags: Array<{tag: string, id: number, delete: boolean}>,
    features: string,
    links: Array<{link: string, description: string, id: number, delete: boolean}>,
    parameters: Array<{label: string, description: string, id: number, delete: boolean, variable: string}>,
    datasets: Array<{name: string, link: string, license: string, id: number, delete: boolean}>,
    input_type: string,
    output_type: string,
    remote_secret: string,
  }>();

  @ViewChild('authorInput', { static: false })
  authorInput: ElementRef;
  @ViewChild('tagInput', { static: false })
  tagInput: ElementRef;

  jsonMode: boolean = false;
  newAuthorInput: boolean = false;
  newAuthorName: string = '';
  newTagInput: boolean = false;
  newTagName: string = '';
  newDataset: {name: string, link: string, license: string, id: number, delete: boolean} =
  {
    name: '',
    link: '',
    license: '',
    id: -1,
    delete: false
  };
  newParameter: {label: string, description: string, id: number, delete: boolean, variable: string} = 
  {
    label: '',
    variable: '',
    description: '',
    id: -1,
    delete: false
  };
  secret: string;

  algorithmJSON: string;
  jsonErrorToast: boolean = false;

  constructor(private algorithmService: AlgorithmService) { }

  ngOnInit() {
    this.algorithmJSON = JSON.stringify(this.algorithmData, null, 4); 
  }

  switchEditMode(json: boolean) {
    if (this.newAuthorName) {
      this.algorithmData.authors.push({name: this.newAuthorName, id: -1});
      this.newAuthorName = '';
    }
    if (this.newTagName) {
      this.algorithmData.tags.push({tag: this.newTagName, id: -1});
      this.newTagName = '';
    }
    if (this.newDataset.name && this.newDataset.link && this.newDataset.license) {
      this.newDatasetSubmit()
    }
    if (this.newParameter.label && this.newParameter.description) {
      this.newParameterSubmit()
    }
    return true;
  }

  deleteFilter(data) {
    if (data && data.length) {
      return data.filter(e => !e.delete);
    } else {
      return [];
    }
  }

  deleteAuthor(data) {
    data.delete = true;
  }

  deleteItem(data) {
    data.delete = true
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
      this.algorithmData.authors.push({name: this.newAuthorName, id: -1});
      this.newAuthorName = '';
      this.authorInput.nativeElement.focus(); 
    }
    return false;
  }

  newAuthorDiscard() {
    this.newAuthorInput = false;
    this.newAuthorName = '';
  }

  deleteTag(data) {
    data.delete = true;
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
      this.algorithmData.tags.push({tag: this.newTagName, id: -1});
      this.newTagName = '';
      this.tagInput.nativeElement.focus();
    }
    return false;
  }

  newTagDiscard() {
    this.newTagInput = false;
    this.newTagName = '';
  }

  newDatasetSubmit() {
    this.algorithmData.datasets.push(this.newDataset);
    this.newDataset =
    {
      name: '',
      link: '',
      license: '',
      id: -1,
      delete: false
    };
  }

  newParameterSubmit() {
    this.algorithmData.parameters.push(this.newParameter);
    this.newParameter =
    {
      label: '',
      variable: '',
      description: '',
      id: -1,
      delete: false
    };
  }

  recoveryForm() {
    this.jsonErrorToast = false;
    this.algorithmJSON = JSON.stringify(this.algorithmData, null, 4);
  }
}

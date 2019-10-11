import { EventEmitter, Component, OnInit, Input, ViewChild, ElementRef, Output } from '@angular/core';
import { AlgorithmService } from 'src/app/algorithm.service';
import { Algorithm } from '../../algorithm.model';

@Component({
  selector: 'app-algorithm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AlgorithmFormComponent implements OnInit {
  @Input()
  editing: boolean;
  @Input()
  algorithmData: Algorithm;

  @Output()
  @Input()
  algorithmDataChange = new EventEmitter<Algorithm>();

  @ViewChild('authorInput', { static: false })
  authorInput: ElementRef;
  @ViewChild('tagInput', { static: false })
  tagInput: ElementRef;
  @ViewChild('unitInput', { static: false })
  unitInput: ElementRef;
  @ViewChild('categoryInput', { static: false })
  categoryInput: ElementRef;

  newAuthorInput: boolean = false;
  newAuthorName: string = '';
  newUnitInput: boolean = false;
  newUnitName: string = '';
  newCategoryInput: boolean = false;
  newCategoryName: string = '';
  newTagInput: boolean = false;
  newTagName: string = '';
  newParameter: {label: string, description: string, id: number, delete: boolean, variable: string} = 
  {
    label: '',
    variable: '',
    description: '',
    id: -1,
    delete: false
  };
  secret: string;

  constructor(private algorithmService: AlgorithmService) { }

  ngOnInit() {
  }

  switchEditMode() {
    if (this.newAuthorName) {
      this.algorithmData.authors.push({name: this.newAuthorName, id: -1, delete: false});
      this.newAuthorName = '';
    }
    if (this.newTagName) {
      this.algorithmData.tags.push({tag: this.newTagName, id: -1, delete: false});
      this.newTagName = '';
    }
    if (this.newParameter.label && this.newParameter.description) {
      this.newParameterSubmit()
    }
    if (this.newUnitName) {
      this.newUnitSubmit()
    }
    if (this.newCategoryName) {
      this.newCategorySubmit()
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
  deleteUnit(data) {
    if (this.algorithmData.units.indexOf(data) !== -1)
      this.algorithmData.units.splice(this.algorithmData.units.indexOf(data), 1);
  }
  deleteCategory(data) {
    if (this.algorithmData.categories.indexOf(data) !== -1)
      this.algorithmData.categories.splice(this.algorithmData.categories.indexOf(data), 1);
  }
  newAuthor() {
    if (this.newAuthorInput && this.newAuthorName) {
      this.newAuthorSubmit();
    }
    this.newAuthorInput = true;
  }
  newUnit() {
    if (this.newUnitInput && this.newUnitName) {
      this.newUnitSubmit();
    }
    this.newUnitInput = true;
  }
  newCategory() {
    if (this.newCategoryInput && this.newCategoryName) {
      this.newCategorySubmit();
    }
    this.newCategoryInput = true;
  }

  newAuthorSubmit() {
    this.newAuthorInput = false;
    if (this.newAuthorName) {
      this.algorithmData.authors.push({name: this.newAuthorName, id: -1, delete: false});
      this.newAuthorName = '';
      this.authorInput.nativeElement.focus(); 
    }
    return false;
  }

  newUnitSubmit() {
    this.newUnitInput = false;
    if (this.newUnitName) {
      this.algorithmData.units.push(this.newUnitName);
      this.newUnitName = '';
      this.unitInput.nativeElement.focus();
    }
    return false;
  }

  newCategorySubmit() {
    this.newCategoryInput = false;
    if (this.newCategoryName) {
      this.algorithmData.categories.push(this.newCategoryName);
      this.newUnitName = '';
      this.categoryInput.nativeElement.focus(); 
      console.log(this.algorithmData.categories)
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
      this.algorithmData.tags.push({tag: this.newTagName, id: -1, delete: false});
      this.newTagName = '';
      this.tagInput.nativeElement.focus();
    }
    return false;
  }

  newTagDiscard() {
    this.newTagInput = false;
    this.newTagName = '';
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
}

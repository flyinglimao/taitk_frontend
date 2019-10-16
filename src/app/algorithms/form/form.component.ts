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
  
  tags: Array<string> = [];
  tagOptions = {
    '—(類別)—': [
      '知覺與情緒  Perception & Emotion',
      '機器學習與深度學習 Machine Learning & Deep Learning',
      '自然語言處理 Natural Language Processing',
      '資料探勘與巨量資料分析 Data Mining & Big Data Analytics',
      '晶片與硬體設計 Chip & Hardware Design',
      '群眾,安全與隱私 Crowd, Security & Privacy',
      '通訊&AIoT Communication & AIoT',
      '社會政策與法律 Policy Society & Law',
      '輔助決策 Decision Support',
      '醫學影像 Medical Imaging',
      '精神照護 Mental Healthcare',
      '精準醫療 Precision Medicine',
    ],
    '—(關鍵字)—': [
      '語意分析',
      '語意理解',
      '物體辨識',
      '語者辨識',
      '情緒分類',
      '群眾行為分析',
      '多媒體檢索',
      '多媒體問答',
      '預防老年癡呆',
      '決策分析',
      '多組學分析',
      '精神照護',
      '醫學影像',
      '臨床決策輔助',
      '智慧用藥',
      '倫理法律與社會衝擊',
    ]
  }
  
  constructor(private algorithmService: AlgorithmService) { }
  public keepOriginalOrder = (a, _) => a.key;

  ngOnInit() {
  }
  
  startEdit() {
    this.algorithmData.tags.forEach(tag => {
      this.tags.push(tag.tag)
    })
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
    if (this.newParameter.variable && this.newParameter.description) {
      this.newParameterSubmit()
    }
    if (this.newUnitName) {
      this.newUnitSubmit()
    }
    if (this.newCategoryName) {
      this.newCategorySubmit()
    }
    this.algorithmData.tags.forEach(tag => {
      tag.delete = true
    })
    this.algorithmData.tags.forEach(tag => {
      if (this.tags.indexOf(tag.tag) !== -1) {
        tag.delete = false
        this.tags.splice(this.tags.indexOf(tag.tag), 1)
      }
    })
    this.tags.forEach(tag => {
      this.algorithmData.tags.push({id: -1, delete: false, tag: tag})
    })
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
    }
    this.authorInput.nativeElement.focus(); 
    return false;
  }
  
  newUnitSubmit() {
    this.newUnitInput = false;
    if (this.newUnitName) {
      this.algorithmData.units.push(this.newUnitName);
      this.newUnitName = '';
    }
    this.unitInput.nativeElement.focus();
    return false;
  }
  
  newCategorySubmit() {
    this.newCategoryInput = false;
    if (this.newCategoryName) {
      this.algorithmData.categories.push(this.newCategoryName);
      this.newCategoryName = ''; 
    }
    this.categoryInput.nativeElement.focus();
    return false;
  }
  
  newAuthorDiscard() {
    this.newAuthorInput = false;
    this.newAuthorName = '';
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

  updateTags(evt) {
    this.tags = Array.from(evt.target.selectedOptions).map((e: any) => e.value)
  }
}

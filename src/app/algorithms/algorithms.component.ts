import { Component, OnInit, ViewChild } from '@angular/core';
import { AlgorithmFormComponent } from './form/form.component';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {

  editing: boolean = false;
  discardPrompt: boolean = false;
  jsonMode: boolean = false;

  @ViewChild('form')
  private form: AlgorithmFormComponent;

  
  constructor() { }

  ngOnInit() {
  }

  startEdit() {
    this.editing = true;
  }

  finishEdit() {
    if (!this.form.switchEditMode(false)) return;
    this.jsonMode = false;
    this.editing = false;
  }
  
  discardEdit() {
    this.discardPrompt = true;
  }

  discardEditCancel() {
    this.discardPrompt = false;
  }

  discardEditConfirm() {
    this.discardPrompt = false;
    this.editing = false;
    this.jsonMode = false;
    // TODO: recovery data
    this.form.recoveryForm();
    this.form.switchEditMode(false);
  }

  switchEditMode(json: boolean = false) {
    if(!this.form.switchEditMode(json)) return;
    this.jsonMode = json;
  }

}

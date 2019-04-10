import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {

  editing: boolean = false;
  discardPrompt: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  startEdit() {
    this.editing = true;
  }

  finishEdit() {
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
  }

}

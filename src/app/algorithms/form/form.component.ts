import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-algorithm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class AlgorithmFormComponent implements OnInit {
  @Input()
  editing: boolean;

  constructor() { }

  ngOnInit() {
  }

}

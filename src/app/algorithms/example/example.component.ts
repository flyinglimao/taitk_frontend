import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-algorithm-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class AlgorithmExampleComponent implements OnInit {

  @Input()
  example: boolean;
  @Output()
  exampleChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
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

}

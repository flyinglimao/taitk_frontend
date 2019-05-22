import { Component, OnInit, ViewChild } from '@angular/core';
import { AlgorithmFormComponent } from './form/form.component';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlgorithmService } from '../algorithm.service';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {

  editing: boolean = false;
  discardPrompt: boolean = false;
  jsonMode: boolean = false;
  algorithms: Array<{id: number, abbreivation: string}> = [];
  algorithm;

  @ViewChild('form')
  private form: AlgorithmFormComponent;

  constructor(
    private userService: UserService,
    private algorithmService: AlgorithmService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let self = this;
    this.userService.registerInitedCallback(()=> {
      if (!self.userService.logined) {
        self.router.navigateByUrl('/login');
      }
      self.algorithmService.list().then((data: Array<{id: number, abbreivation: string}>) => {
        self.algorithms = data;
        self.route.paramMap.subscribe(params => {
          if (+params['algorithm']) {
            self.loadAlgorithm(+params['algorithm']);
          } else {
            self.loadAlgorithm(+data[0].id);
          }
        });
      });
    })
  }

  loadAlgorithm(id: number) {
    this.algorithmService.get(id).then(data => {
      this.algorithm = data;
    });
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

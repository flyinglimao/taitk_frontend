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
  example: boolean = false;
  algorithms: Array<{id: number, abbreivation: string}> = [];
  algorithm: {
    id: number,
    abbreviation: string,
    title: string,
    category: string,
    authors: Array<{name: string, id: number, algorithm_id: number}>,
    tags: Array<{tag: string, id: number, algorithm_id: number}>,
    features: string,
    links: Array<{link: string, description: string, id: number, algorithm_id: number}>,
    parameters: Array<{label: string, description: string, id: number, algorithm_id: number}>,
    datasets: Array<{name: string, link: string, license: string, id: number, algorithm_id: number}>,
    input_type: string,
    output_type: string,
  } = {
    id: -1,
    abbreviation: null,
    title: null,
    category: null,
    authors: null,
    tags: null,
    features: null,
    links: null,
    parameters: null,
    datasets: null,
    input_type: null,
    output_type: null,
  };
  algorithmBackup: {
    id: number,
    abbreviation: string,
    title: string,
    category: string,
    authors: Array<{name: string, id: number, algorithm_id: number}>,
    tags: Array<{tag: string, id: number, algorithm_id: number}>,
    features: string,
    links: Array<{link: string, description: string, id: number, algorithm_id: number}>,
    parameters: Array<{label: string, description: string, id: number, algorithm_id: number}>,
    datasets: Array<{name: string, link: string, license: string, id: number, algorithm_id: number}>,
    input_type: string,
    output_type: string,
  } = {
    id: -1,
    abbreviation: null,
    title: null,
    category: null,
    authors: null,
    tags: null,
    features: null,
    links: null,
    parameters: null,
    datasets: null,
    input_type: null,
    output_type: null,
  };

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
      Object.assign(this.algorithm, data['data']);
    });
  }

  startEdit(create: boolean = false) {
    this.editing = true;
    if (create) {
      this.algorithm = {
        id: -1,
        abbreviation: null,
        title: null,
        category: null,
        authors: null,
        tags: null,
        features: null,
        links: null,
        parameters: null,
        datasets: null,
        input_type: null,
        output_type: null,
      }
    }
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

  switchExample(example: boolean = false) {
    this.example = example;
    if (example) {
      this.algorithmBackup  = {
        id: -1,
        abbreviation: null,
        title: null,
        category: null,
        authors: null,
        tags: null,
        features: null,
        links: null,
        parameters: null,
        datasets: null,
        input_type: null,
        output_type: null,
      };
      Object.assign(this.algorithmBackup, this.algorithm);
      this.algorithm = {
        id: -1,
        abbreviation: 'AV-SpNET',
        title: 'Arousal Valence Speech Front-End Network',
        category: 'SER',
        authors: [{id: -1, name: 'Chih-Chuan Lu', algorithm_id: -1}],
        tags: [{id: -1, tag: 'Speech Emotion Recognition', algorithm_id: -1}],
        features: 'Speech Emotion Recognition (SER) across diverse application domains is still challenging due to the …',
        links: [{id: -1, description: 'GitHub', link: 'https://github.com/some/one', algorithm_id: -1},
        {id: -2, description: 'School', link: 'https://csie.ntu.edu.tw/some/one', algorithm_id: -1}],
        parameters: [],
        datasets: [],
        input_type: 'audio/*',
        output_type: 'text/json',
      };
    } else {
      Object.assign(this.algorithm, this.algorithmBackup);
    }
  }

}

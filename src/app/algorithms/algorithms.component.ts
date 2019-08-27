import { Component, OnInit, ViewChild } from '@angular/core';
import { AlgorithmFormComponent } from './form/form.component';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlgorithmService } from '../algorithm.service';
import { variable } from '@angular/compiler/src/output/output_ast';

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
  algorithms: Array<{id: number, abbreviation: string}> = [];
  algorithm: {
    id: number,
    abbreviation: string,
    title: string,
    category: string,
    authors: Array<{name: string, id: number, algorithm_id: number}>,
    unit: string,
    tags: Array<{tag: string, id: number, algorithm_id: number}>,
    features: string,
    links: Array<{link: string, description: string, id: number, algorithm_id: number}>,
    parameters: Array<{label: string, description: string, id: number, algorithm_id: number}>,
    datasets: Array<{name: string, link: string, license: string, id: number, algorithm_id: number}>,
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
    remote_secret: '',
  };
  algorithmBackup: {
    id: number,
    abbreviation: string,
    title: string,
    category: string,
    authors: Array<{name: string, id: number, algorithm_id: number}>,
    unit: string,
    tags: Array<{tag: string, id: number, algorithm_id: number}>,
    features: string,
    links: Array<{link: string, description: string, id: number, algorithm_id: number}>,
    parameters: Array<{label: string, description: string, id: number, algorithm_id: number, variable: string}>,
    datasets: Array<{name: string, link: string, license: string, id: number, algorithm_id: number}>,
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
    remote_secret: '',
  };

  @ViewChild('form', { static: true })
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
      self.algorithmService.list().then((data: Array<{id: number, abbreviation: string}>) => {
        self.algorithms = [...data];
        self.route.paramMap.subscribe(e => {
          let params = e['params'];
          if (params['algorithm'] === 'new') {
            self.startEdit(true);
          } else if (+params['algorithm']) {
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
    }).catch(_ => {
      this.router.navigate(['/algorithms/', this.algorithms[0].id]);
    });
  }

  startEdit(create: boolean = false) {
    if (create) {
      this.algorithm = {
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
        remote_secret: '',
      };
    } else {
      Object.assign(this.algorithmBackup, this.algorithm);
    }
    this.editing = true;
  }

  async finishEdit() {
    if (!this.form.switchEditMode(false)) return;
    if (this.algorithm.id === -1) {
      try {
        let id = await this.algorithmService.create(this.algorithm);
        this.algorithms.push({id: +id, abbreviation: this.algorithm.abbreviation});
        this.algorithm.id = +id;
        this.router.navigate(['/algorithms/', id]);
      } catch (e) {
        alert('err')
      }
    } else {
      this.algorithmService.update(this.algorithm).then(_ => {
        console.log('done')
      });
    }
    this.jsonMode = false;
    this.editing = false;
  }
  
  discardEdit() {
    this.discardPrompt = true;
    Object.assign(this.algorithm, this.algorithmBackup);
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

  toggleExample() {
    this.example = true;
  }

}

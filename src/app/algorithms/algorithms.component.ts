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
  example: boolean = false;
  algorithms: Array<{id: number, abbreviation: string}> = [];
  algorithm = {
    id: -1,
    abbreviation: '',
    title: '',
    categories: [],
    authors: [],
    units: [],
    tags: [],
    features: '',
    links: [],
    parameters: [],
    datasets: [],
    input_type: '',
    output_type: '',
    remote_secret: '',
    email: '',
  };
  algorithmBackup = {
    id: -1,
    abbreviation: '',
    title: '',
    categories: [],
    authors: [],
    units: [],
    tags: [],
    features: '',
    links: [],
    parameters: [],
    datasets: [],
    input_type: '',
    output_type: '',
    remote_secret: '',
    email: '',
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
        categories: [],
        authors: [],
        units: [],
        tags: [],
        features: '',
        links: [],
        parameters: [],
        datasets: [],
        input_type: '',
        output_type: '',
        remote_secret: '',
        email: '',
      };
    } else {
      Object.assign(this.algorithmBackup, this.algorithm);
    }
    this.editing = true;
  }

  async finishEdit() {
    if (!this.form.switchEditMode()) return;
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
    Object.assign(this.algorithm, this.algorithmBackup);
    this.form.switchEditMode();
  }

  switchEditMode() {
    if(!this.form.switchEditMode()) return;
  }

  toggleExample() {
    console.log(this.algorithm)
    this.example = true;
  }

}

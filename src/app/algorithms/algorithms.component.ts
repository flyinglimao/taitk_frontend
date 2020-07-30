import { Component, OnInit, ViewChild } from '@angular/core';
import { AlgorithmFormComponent } from './form/form.component';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlgorithmService } from '../algorithm.service';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Algorithm } from '../algorithm.model';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {
  locked: boolean = false;
  full: boolean = false;
  editing: boolean = false;
  discardPrompt: boolean = false;
  example: boolean = false;
  algorithms: Array<{id: number, abbreviation: string, belong_to: string, created_at: string}> = [];
  algorithm: Algorithm = {
    id: -1,
    abbreviation: '',
    title: '',
    categories: [],
    authors: [],
    units: [],
    tags: [],
    features: '',
    links: [{id: -1, link: '', description:'', delete: false}],
    parameters: [],
    datasets: [],
    input_type: '',
    output_type: '',
    remote_secret: '',
    email: '',
    description: '',
    belong_to: '',
    executable: '',
    created_at: '1970-01-01 00:00:00',
  };
  algorithmBackup: Algorithm = {
    id: -1,
    abbreviation: '',
    title: '',
    categories: [],
    authors: [],
    units: [],
    tags: [],
    features: '',
    links: [{id: -1, link: '', description:'', delete: false}],
    parameters: [],
    datasets: [],
    input_type: '',
    output_type: '',
    remote_secret: '',
    email: '',
    belong_to: '',
    description: '',
    executable: '',
    created_at: '1970-01-01 00:00:00',
  };
  year: string = '2020';
  years: string[] = ['2020', '2019', '2018'];
  collection = false;

  @ViewChild('form', { static: true })
  private form: AlgorithmFormComponent;

  constructor(
    private userService: UserService,
    private algorithmService: AlgorithmService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  get logined () {
    return this.userService.logined;
  }

  get sortedAlgorithms () {
    let obj: Object = {}
    this.algorithms.forEach(algorithm => {
      if (!obj[algorithm.belong_to.substr(-8)]) {
        obj[algorithm.belong_to.substr(-8)] = []
      }
      obj[algorithm.belong_to.substr(-8)].push(algorithm)
    })
    obj['無所屬'] = obj['']
    delete obj['']
    return obj
  }

  ngOnInit() {
    let self = this;
    this.userService.registerInitedCallback(()=> {
      self.route.paramMap.subscribe(e => {
        let params = e['params'];
        this.route.fragment.subscribe((fragment: string) => {
          if (!self.userService.logined || fragment === 'all' ) {
            self.full = true;
            self.algorithmService.list(null, true).then((data: Array<{id: number, abbreviation: string, belong_to: string, created_at: string}>) => {
              self.algorithms = [...data];
              if (+params['algorithm']) {
                self.loadAlgorithm(+params['algorithm']);
              } else {
                self.loadAlgorithm(+data[0].id);
              }
            });
          } else {
            self.full = false;
            self.algorithmService.list().then((data: Array<{id: number, abbreviation: string, belong_to: string, created_at: string}>) => {
              self.algorithms = [...data];
              if (params['algorithm'] === 'new') {
                self.startEdit(true);
              } else if (+params['algorithm']) {
                self.loadAlgorithm(+params['algorithm']);
              } else if (data[0]) {
                self.loadAlgorithm(+data[0].id);
              } else {
                // self.router.navigate(['/algorithms/new']);
              }
            });
          }
        })
      });
    })
  }

  loadAlgorithm(id: number) {
    this.algorithmService.get(id).then((data: Algorithm) => {
      this.algorithm = data;
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
        description: '',
        categories: [],
        authors: [],
        units: [],
        tags: [],
        features: '',
        links: [{id: -1, link: '', description:'', delete: false}],
        parameters: [],
        datasets: [],
        input_type: '',
        output_type: '',
        remote_secret: '',
        email: '',
        belong_to: '',
        executable: '',
        created_at: '1970-01-01 00:00:00',
      };
    } else {
      Object.assign(this.algorithmBackup, this.algorithm);
    }
    this.form.startEdit();
    this.editing = true;
  }

  async finishEdit() {
    if (!this.form.switchEditMode()) return;
    if (this.algorithm.id === -1) {
      try {
        if (!this.locked) {
          this.locked = true
          this.algorithmService.create(this.algorithm).then(id => {
            this.algorithms.push({id: +id, abbreviation: this.algorithm.abbreviation, belong_to: this.algorithm.belong_to, created_at: '-1'});
            this.algorithm.id = +id;
            this.router.navigate(['/algorithms/', id]);
            this.locked = false;
            this.editing = false;
          });
        }
      } catch (e) {
        alert('遭遇未預期錯誤，請協助通報')
        console.log(e)
      }
    } else {
      if (!this.locked) {
        this.locked = true
        this.algorithmService.update(this.algorithm).then((id: number) => {
          this.loadAlgorithm(id);
          this.locked = false;
          this.editing = false;
        });
      }
    }
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
    if (this.algorithm.id === -1) this.router.navigate(['/algorithms/']);
    Object.assign(this.algorithm, this.algorithmBackup);
  }

  switchEditMode() {
    if(!this.form.switchEditMode()) return;
  }

  toggleExample() {
    this.example = true;
  }

  algorithmBelongToFilter(belong_to) {
    return this.algorithms.filter(e => e.created_at.slice(0, 4) === this.year).filter(e => e.belong_to.substr(-8) === belong_to);
  }

  algorithmAuthorFormatter(authors) {
    if (authors) return authors.map(e => e.name).join('、');
    else return '';
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) { }

  public list(page: number = 1, full: boolean = false) {
    let self = this;
    let api = `${environment.api}algorithms?`;
    if (this.userService.token) {
      api += `token=${this.userService.token}&`
    }
    if (full) {
      api += `full=true&`
    }
    if (page) {
      api += `page=${page}`
    }
    return new Promise(function (resolve, reject) {
      let request = self.httpClient.get(api);
      request.subscribe(
        function (data) {
          resolve(data);
        },
        function (err) {
          reject(err);
        }
      );
    });
  }

  public get(id: number) {
    let self = this;
    let headers = new HttpHeaders({
      'Authorization': this.userService.token,
    })
    let api = `${environment.api}algorithms/${id}`;
    return new Promise(function (resolve, reject) {
      let request = self.httpClient.get(api, {headers});
      request.subscribe(
        function (data) {
          data['data']['units'] = data['data']['unit'].split('、');
          data['data']['categories'] = data['data']['category'].split(', ');
          resolve(data);
        },
        function (err) {
          reject(err);
        }
      );
    });
  }

  public create(input) {
    let self = this;
    let api = `${environment.api}algorithms`;
    input['token'] = this.userService.token;
    input['unit'] = input['units'].join('、');
    input['category'] = input['categories'].join(', ');
    
    return new Promise(function (resolve, reject) {
      let request = self.httpClient.post(api, input);
      request.subscribe(function (data) {
        if (data['success']) {
          data = data['data']
          self.handleAuthors(data['id'], input['authors'], null);
          self.handleTags(data['id'], input['tags'], null);
          self.handleLinks(data['id'], input['links'], null);
          self.handleDatasets(data['id'], input['datasets'], null);
          self.handleParameters(data['id'], input['parameters'], null);
          resolve(data['id']);
        } else {
          reject(data['reason']);
        }
      }, function (err) {
        console.error(err);
        reject(err);
      })
    })
  }

  public async update(data) {
    let self = this;
    let api = `${environment.api}algorithms/${data.id}`;
    let oldData = (await this.get(data.id))['data'];
    data['token'] = this.userService.token;
    data['unit'] = data['units'].join('、');
    data['category'] = data['categories'].join(', ');
    return new Promise(function (resolve, reject) {
      let request = self.httpClient.patch(api, data);
      self.handleAuthors(data['id'], data['authors'], oldData['authors']);
      self.handleTags(data['id'], data['tags'], oldData['tags']);
      self.handleLinks(data['id'], data['links'], oldData['links']);
      self.handleDatasets(data['id'], data['datasets'], oldData['datasets']);
      self.handleParameters(data['id'], data['parameters'], oldData['parameters']);
      request.subscribe(async function (data) {
        if (data['success']) {
          resolve(data['data']['id']);
        } else {
          reject(data['reason']);
        }
      }, function (err) {
        console.error(err);
        reject(err);
      })
    })
  }

  private handleTags(id, data, oldData) {
    let self = this;
    let api = `${environment.api}algorithms/${id}/tags`;
    data.forEach((tag, index) => {
      tag['token'] = this.userService.token;
      if (tag.id === -1) {
        self.httpClient.post(api, tag).subscribe();
      } else if (tag.delete || !tag.tag.length) {
        self.deleteAttribute('tags', id, tag.id);
      } else if (tag.tag !== oldData[index].tag) {
        self.updateAttribute('tags', id, tag.id, tag);
      }
    });
  }

  private handleAuthors(id, data, oldData) {
    let self = this;
    data.forEach((author, index) => {
      if (author.id === -1) {
        self.createAttribute('authors', id, author);
      } else {
        if (author.name.length) {
          if (author.name !== oldData[index].name)
          self.updateAttribute('authors', id, author.id, author);
        } else {
          self.deleteAttribute('authors', id, author.id);
        }
      }
    });
  }

  private handleLinks(id, data, oldData) {
    let self = this;
    let api = `${environment.api}algorithms/${id}/links`;
    data.forEach((link, index) => {
      link['token'] = this.userService.token;
      link['description'] = 'none';
      if (link.id === -1) {
        self.httpClient.post(api, link).subscribe();
      } else {
        if (link['delete']) {
          self.deleteAttribute('links', id, link.id);
        }
        else if (link.link !== oldData[index].link || link.description !== oldData[index].description) {
          self.updateAttribute('links', id, link.id, link);
        } 
      }
    });
  }

  private handleDatasets(id, data, oldData) {
    let self = this;
    let api = `${environment.api}algorithms/${id}/datasets`;
    data.forEach((dataset, index) => {
      dataset['token'] = this.userService.token;
      if (dataset.id === -1) {
        self.httpClient.post(api, dataset).subscribe();
      } else {
        if (dataset['delete']) {
          self.deleteAttribute('datasets', id, dataset.id);
        }
        else if (dataset.description !== oldData[index].description || dataset.link !== oldData[index].link
            || dataset.name !== oldData[index].name || dataset.license !== oldData[index].license) {
          self.updateAttribute('datasets', id, dataset.id, dataset);
        } 
      }
    });
  }

  private handleParameters(id, data, oldData) {
    let self = this;
    let api = `${environment.api}algorithms/${id}/parameters`;
    data.forEach((dataset, index) => {
      dataset['token'] = this.userService.token;
      if (dataset.id === -1) {
        self.httpClient.post(api, dataset).subscribe();
      } else {
        if (dataset['delete']) {
          self.deleteAttribute('parameters', id, dataset.id);
        }
        else if (dataset.label !== oldData[index].label || dataset.description !== oldData[index].description || dataset.variable !== oldData[index].variable) {
          self.updateAttribute('parameters', id, dataset.id, dataset);
        } 
      }
    });
  }

  public createAttribute(attr, id, data) {
    if (data.delete) {
      return;
    }
    let api = `${environment.api}algorithms/${id}/${attr}`;
    data['token'] = this.userService.token;
    this.httpClient.post(api, data).subscribe();
  }

  public updateAttribute(attr, id, subid, data) {
    let api = `${environment.api}algorithms/${id}/${attr}/${subid}`;
    data['token'] = this.userService.token;
    this.httpClient.patch(api, data).subscribe();
  }

  public deleteAttribute(attr, id, subid) {
    let api = `${environment.api}algorithms/${id}/${attr}/${subid}`;
    this.httpClient.delete(api, {params: {'token': this.userService.token}}).subscribe();
  }
}

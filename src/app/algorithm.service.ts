import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Algorithm } from './algorithm.model';
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
        function (data: Array<any>) {
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
          resolve(new Algorithm(data['data']));
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
          let x = 
          [
          ...self.handleAuthors(data['id'], input['authors'], null),
          ...self.handleTags(data['id'], input['tags'], null),
          ...self.handleLinks(data['id'], input['links'], null),
          ...self.handleDatasets(data['id'], input['datasets'], null),
          ...self.handleParameters(data['id'], input['parameters'], null),
          ]
          Promise.all(x)
           .then(_ => resolve(data['id']))
           .catch(reject);
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
    let oldData = (await this.get(data.id));
    data['token'] = this.userService.token;
    data['unit'] = data['units'].join('、');
    data['category'] = Array.from(new Set<string>(data['categories'])).join(', ');
    return new Promise((resolve, reject) => {
      let request = self.httpClient.patch(api, data);
      let x = 
      [
       ...self.handleAuthors(data['id'], data['authors'], oldData['authors']),
       ...self.handleTags(data['id'], data['tags'], oldData['tags']),
       ...self.handleLinks(data['id'], data['links'], oldData['links']),
       ...self.handleDatasets(data['id'], data['datasets'], oldData['datasets']),
       ...self.handleParameters(data['id'], data['parameters'], oldData['parameters']),
      ]
      Promise.all(x).then(_ => {
          request.subscribe(function (data) {
            if (data['success']) {
              resolve(data['data']['id']);
            } else {
              reject(data['reason']);
            }
          }, function (err) {
            reject(err);
          })
        } 
      );
    })
  }

  private handleTags(id, data, oldData) {
    let self = this;
    let old
    let api = `${environment.api}algorithms/${id}/tags`;
    return data.map((tag, index) => {
      tag['token'] = this.userService.token;
      if (tag.id === -1) {
        return self.httpClient.post(api, tag).toPromise();
      } else if (tag.delete || !tag.tag.length) {
        return self.deleteAttribute('tags', id, tag.id);
      } else if (oldData.filter(e => e.id === tag.id)[0].tag === tag.tag) {
        return self.updateAttribute('tags', id, tag.id, tag);
      }
    })
  }

  private handleAuthors(id, data, oldData) {
    let self = this;
    return data.map(author => {
      if (author.id === -1) {
        if (!author.delete)
          return self.createAttribute('authors', id, author);
      } else if (author.delete) {
          return self.deleteAttribute('authors', id, author.id);
      } else if (oldData.filter(e => e.id === author.id)[0].name !== author.name) {
        return self.updateAttribute('authors', id, author.id, author);
      }
    })
  }

  private handleLinks(id, data, oldData) {
    let self = this;
    let api = `${environment.api}algorithms/${id}/links`;
    return data.map((link, index) => {
      link['token'] = this.userService.token;
      link['description'] = 'none';
      if (link.id === -1) {
        return self.httpClient.post(api, link).toPromise();
      } else {
        if (link['delete']) {
          return self.deleteAttribute('links', id, link.id)
        }
        else if (link.link !== oldData[index].link 
          || link.description !== oldData[index].description) {
          return self.updateAttribute('links', id, link.id, link)
        } 
      }
    })
  }

  private handleDatasets(id, data, oldData) {
    let self = this;
    let api = `${environment.api}algorithms/${id}/datasets`;
    return data.map((dataset, index) => {
      dataset['token'] = this.userService.token;
      if (dataset.id === -1) {
        return self.httpClient.post(api, dataset).toPromise();
      } else {
        if (dataset['delete']) {
          return self.deleteAttribute('datasets', id, dataset.id);
        }
        else if (dataset.description !== oldData[index].description 
          || dataset.link !== oldData[index].link
          || dataset.name !== oldData[index].name 
          || dataset.free !== oldData[index].free
          || dataset.open !== oldData[index].open  
          || dataset.resource !== oldData[index].resource) {
          return self.updateAttribute('datasets', id, dataset.id, dataset);
        } 
      }
    })
  }

  private handleParameters(id, data, oldData) {
    let self = this;
    let api = `${environment.api}algorithms/${id}/parameters`;
    return data.map((params, index) => {
      params['token'] = this.userService.token;
      if (params.id === -1) {
        return self.httpClient.post(api, params).toPromise();
      } else {
        if (params['delete']) {
          return self.deleteAttribute('parameters', id, params.id);
        }
        else if (params.label !== oldData[index].label
          || params.description !== oldData[index].description 
          || params.variable !== oldData[index].variable) {
          return self.updateAttribute('parameters', id, params.id, params);
        } 
      }
    })
  }

  public createAttribute(attr, id, data) {
    let api = `${environment.api}algorithms/${id}/${attr}`;
    data['token'] = this.userService.token;
    return this.httpClient.post(api, data).toPromise();
  }

  public updateAttribute(attr, id, subid, data) {
    let api = `${environment.api}algorithms/${id}/${attr}/${subid}`;
    data['token'] = this.userService.token;
    return this.httpClient.patch(api, data).toPromise();
  }

  public deleteAttribute(attr, id, subid) {
    let api = `${environment.api}algorithms/${id}/${attr}/${subid}`;
    return this.httpClient.delete(api, {params: {'token': this.userService.token}}).toPromise();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    let api = `${environment.api}algorithms/?`;
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
    let api = `${environment.api}algorithms/${id}`;
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
}

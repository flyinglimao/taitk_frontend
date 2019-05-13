import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _token: string = '';
  private _name: string = '';
  private _logined: boolean = false;

  get name() {
    return this._name;
  }

  get logined() {
    return this._logined;
  }

  get token() {
    return this._token;
  }

  constructor(private httpClient: HttpClient) { }

  public login(email: string, password: string) {
    let self = this;
    return new Promise(function (resolve, reject) {
      let request = self.httpClient.post(`${environment.api}auth/login`, { email: email, password: password });
      request.subscribe(function (data: {
        success: boolean,
        reason: string,
        token: string,
        name: string,
      }) {
        if (data.success) {
          self._token = data.token;
          self._logined = true;
          self._name = data.name;
          resolve(data.name);
        } else {
          reject(data.reason);
        }
      });
    });
  }

  public logout() {
    let self = this;
    return new Promise(function (resolve, reject) {
      let request = self.httpClient.post(`${environment.api}auth/logout`, { token: self.token });

      request.subscribe(function (data: {
        success: boolean,
        error: string,
      }) {
        if (data.success) {
          self._token = '';
          self._logined = false;
          self._name = '';
          resolve(true);
        } else {
          reject(false);
        }
      });
    });
  }

  public register(data) {
    let self = this;
    return new Promise(function (resolve, reject) {
      let request = self.httpClient.post(`${environment.api}auth/register`, data);
      request.subscribe(function (data: {
        success: boolean,
        reason: string,
        token: string,
        name: string,
      }) {
        if (data.success) {
          self._token = data.token;
          self._logined = true;
          self._name = data.name;
          resolve(data.name);
        } else {
          reject(data.reason);
        }
      });
    });

  }

  public getProfile() {

  }

  public updateProfile() {

  }
}

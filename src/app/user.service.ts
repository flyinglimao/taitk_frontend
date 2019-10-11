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
  private inited: boolean = false;
  private initedCallback: Array<Function> = [];

  get name() {
    return this._name;
  }

  get logined() {
    return this._logined;
  }

  get token() {
    return this._token;
  }

  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem('token')) {
      let request = httpClient.get(`${environment.api}auth/status`, {params: {
        token: localStorage.getItem('token')
      }});
      let self = this;
      request.subscribe(
        function (data: {
          success: boolean,
          error: string,
          name: string,
        }) {
          if (data.success) {
            self._token = localStorage.getItem('token');
            self._logined = true;
            self._name = data.name;
          } else {
            console.log(data);
            localStorage.removeItem('token');
          }
          self.inited = true;
          self.initedCallback.forEach(cb => cb())
        },
        function (err) {
          console.error(err);
          localStorage.removeItem('token')
          self.inited = true;
          self.initedCallback.forEach(cb => cb())
        }
      );
    } else {
      this.inited = true;
      this.initedCallback.forEach(cb => cb())
    }
  }

  public registerInitedCallback(callback: Function) {
    if (this.inited) callback();
    else this.initedCallback.push(callback)
  }

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
          localStorage.setItem('token', data.token);
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

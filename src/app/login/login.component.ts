import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public group: string = '';
  public email: string = '';
  public remeber: boolean;
  public errorToast: string;
  public formType: string = 'login';

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.email = localStorage.getItem('email');
    this.group = localStorage.getItem('group');
    this.remeber = localStorage.getItem('remeber') === 'true';
  }

  login() {
    let self = this;
    this.userService.login(this.email, this.group).then(function (name: string) {
      if (self.remeber) {
        localStorage.setItem('email', self.email);
        localStorage.setItem('group', self.group);
        localStorage.setItem('remeber', 'true');
      }
      self.router.navigateByUrl('/algorithms');
    }).catch (function (reason) {
      self.errorToast = '登入失敗，錯誤訊息：' + reason;
    });
  }

  register () {
    let self = this;
    this.userService.register({
      email: this.email,
      group: this.group,
    }).then(function (name: string) {
      self.router.navigateByUrl('/algorithms');
    }).catch (function (reason) {
      self.errorToast = '登入失敗，錯誤訊息：' + reason;
    });
  }

  useForm(type: string) {
    this.formType = type;
  }
}

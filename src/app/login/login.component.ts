import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public email: string = '';
  public password: string = '';
  public passwordCheck: string = '';
  public website: string = '';
  public avatar: string = '';
  public remeber: boolean;
  public errorToast: string;
  public formType: string = 'login';

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.email = localStorage.getItem('email');
    this.password = localStorage.getItem('password');
    this.remeber = localStorage.getItem('remeber') === 'true';
  }

  login() {
    let self = this;
    this.userService.login(this.email, this.password).then(function (name: string) {
      if (self.remeber) {
        localStorage.setItem('email', self.email);
        localStorage.setItem('password', self.password);
        localStorage.setItem('remeber', 'true');
      }
      self.router.navigateByUrl('/news');
    }).catch (function (reason) {
      self.errorToast = '登入失敗，錯誤訊息：' + reason;
    });
  }

  register () {
    let self = this;
    this.userService.register({
      email: this.email,
      password: this.password,
      password_confirmation: this.passwordCheck,
      name: this.username,
      website: this.website,
      avatar: this.avatar,
    }).then(function (name: string) {
      self.router.navigateByUrl('/news');
    }).catch (function (reason) {
      self.errorToast = '登入失敗，錯誤訊息：' + reason;
    });
  }

  useForm(type: string) {
    this.formType = type;
  }
}

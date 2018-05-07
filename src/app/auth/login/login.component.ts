import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.models';
import { AuthService } from '../../shared/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'hm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.message = new Message('danger', '');

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage({text: 'Теперь вы можете зайти в систему', type: 'success'});
        }
      });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  private showMessage(message: Message) {
    this.message = message;
    setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit() {
    const formData = this.form.value;
    this.userService.getUserByEmail(formData.email).subscribe((user: User) => {
      if (user) {
        if (user.password === formData.password) {
          this.showMessage({text: '', type: ''});
          this.authService.login();
          if (user.type === 'customer') {
            this.router.navigate(['/system', 'statistics']);
          } else if (user.type === 'supplier') {
            this.router.navigate(['/system-delivery', 'statistics']);
          } else if (user.type === 'admin') {
            this.router.navigate(['/system-admin', 'bill']);
          }

          window.localStorage.setItem('user', JSON.stringify(user));
        } else {
          this.showMessage({text: 'Пароль не верный', type: 'danger'});
        }
      } else {
        this.showMessage({text: 'Логин не верный', type: 'danger'});
      }
    });
  }
}

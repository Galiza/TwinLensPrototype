import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Album, User } from '../model/model';
import { ErrorService } from '../error/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public showError = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    public errorService: ErrorService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  public submit(): void {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.loginService.login(email, password).then(
      (user: User) => {
        if (user !== undefined || user !== null) {
          if (user.name === 'Admin') {
            user.isAdmin = true;
          } else {
            user.isAdmin = false;
          }
          this.loginService.setUser(user);
          this.router.navigate(['/customer-area']);
        }
      }
    ).catch(
      (error) => {
        this.errorService.errorHandler(error);
      }
    );
  }

  public cancel(): void {
    this.router.navigate(['/home']);
  }
}

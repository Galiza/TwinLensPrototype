import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Album } from '../model/model';
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
    private errorService: ErrorService
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
    this.loginService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).then(
      () => {
        this.router.navigate(['/customer-area']);
      }
    ).catch(
      (error) => {
        if (error.status === 503) {
          this.errorService.setErrorTextSubject('Sem conexão com servidor');
        }

        this.showError = true;
      }
    );
  }

  public cancel(): void {
    this.router.navigate(['/home']);
  }

}

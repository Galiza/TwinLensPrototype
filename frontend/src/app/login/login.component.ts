import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

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
    private router: Router
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
        this.showError = true;
      }
    );
  }

  public cancel(): void {
    this.router.navigate(['/home']);
  }

}

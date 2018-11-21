import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerAreaService } from '../customer-area/customer-area.service';
import { User } from '../model/model';
import { ErrorService } from '../error/error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public newUserForm: FormGroup;

  @Output() newUserAdded: EventEmitter<User> = new EventEmitter();

  constructor(
    private customerService: CustomerAreaService,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.newUserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      confirmPass: new FormControl('', Validators.required),
    });
  }

  public register(): void {
    const newUser: User = {} as User;
    newUser.name = this.newUserForm.get('name').value;
    newUser.email = this.newUserForm.get('email').value;
    newUser.password = this.newUserForm.get('password').value;
    if (this.newUserForm.get('password').value !== this.newUserForm.get('confirmPass').value) {
      this.errorService.setErrorTextSubject('A senha e confirmação de senha não coincidem.');
      return;
    }

    this.customerService.addNewClient(newUser).then(
      (addedUser: User) => {
        this.newUserForm.reset();
        this.newUserAdded.emit(addedUser);
      }
    );
  }
}

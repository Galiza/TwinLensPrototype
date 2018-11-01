import { Component, OnInit } from '@angular/core';
import { PlainGalleryConfig, PlainGalleryStrategy, Image, GridLayout } from '@ks89/angular-modal-gallery';
import { User } from '../model/user.model';
import { MenuItem } from 'primeng/api';
import { CustomerAreaService } from './customer-area.service';
import { LoginService } from '../login/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-area',
  templateUrl: './customer-area.component.html',
  styleUrls: ['./customer-area.component.scss']
})
export class CustomerAreaComponent implements OnInit {

  public images: Image[] = [];

  public menuItems: MenuItem[];

  public user: User = {} as User;
  public userList: User[] = [];

  public isRegister = false;
  public isListClient = false;

  private newUserForm: FormGroup;

  plainGalleryRow: PlainGalleryConfig;
  constructor(
    private customerService: CustomerAreaService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.createForm();
    this.loginService.getUserSubject().subscribe(
      (user: User) => {
        this.user = user;
      }
    );

    if (this.userList.length === 0) {
      this.fetchClients();
    }
    // if (this.user.isAdmin) {
    this.menuItems = [
      { label: 'Clientes', icon: 'fa fa-fw fa-bar-chart' },
      { label: 'Álbum', icon: 'fa fa-fw fa-calendar' }
    ];
    // }
    this.images.push(new Image(
      0,
      {
        img: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ));
    this.images.push(new Image(
      1,
      {
        img: 'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ));
    this.images.push(new Image(
      2,
      {
        img: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ));
    this.images.push(new Image(
      3,
      {
        img: 'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ));
    this.images.push(new Image(
      4,
      {
        img: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ));
    this.images.push(new Image(
      5,
      {
        img: 'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
    ));

    this.plainGalleryRow = {
      strategy: PlainGalleryStrategy.GRID,
      layout: new GridLayout({ width: '240px', height: '190px' }, { length: 5, wrap: true })
    };
  }

  private createForm(): void {
    this.newUserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      confirmPass: new FormControl('', Validators.required),
    });
  }

  public fetchClients(): void {
    this.customerService.fetchClientList().then(
      (userList: User[]) => {
        this.userList = userList;
      }
    );
  }

  public registerNewClient(): void {
    this.isRegister = true;
  }

  public register(): void {
    const newUser: User = {} as User;
    newUser.name = this.newUserForm.get('name').value;
    newUser.email = this.newUserForm.get('email').value;
    newUser.password = this.newUserForm.get('password').value;

    this.customerService.addNewClient(newUser).then(
      (addedUser: User) => {
        this.userList.push(addedUser);
        this.newUserForm.reset();
      }
    );
  }


}

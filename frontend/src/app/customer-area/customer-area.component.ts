import { Component, OnInit } from '@angular/core';
import { PlainGalleryConfig, PlainGalleryStrategy, Image, GridLayout } from '@ks89/angular-modal-gallery';
import { User, Album } from '../model/model';
import { MenuItem } from 'primeng/api';
import { CustomerAreaService } from './customer-area.service';
import { LoginService } from '../login/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-customer-area',
  templateUrl: './customer-area.component.html',
  styleUrls: ['./customer-area.component.scss']
})
export class CustomerAreaComponent implements OnInit {

  public images: Image[] = [];

  private album: Album = {} as Album;

  public user: User = {} as User;
  public userList: User[] = [];

  public isRegister = false;
  public isListClient = true;
  public isGallery = false;

  private newUserForm: FormGroup;
  public selectedUser: User = {} as User;

  public uploadPhoto = false;

  public multiple = true;

  plainGalleryRow: PlainGalleryConfig;
  constructor(
    private customerService: CustomerAreaService,
    private loginService: LoginService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.createForm();
    this.user = this.loginService.getUser();
    if (Object.keys(this.user).length === 0 || this.user === undefined || this.user === null) {
      this.router.navigate(['/home']);
    }
    if (this.user.isAdmin) {
      if (this.userList.length === 0) {
        this.fetchClients();
      }
    } else {
      this.customerService.getClientPhotos(this.user.id).then(
        (album: Album) => {
          const files = JSON.parse(album.photo);
          let index = 0;
          files.forEach(
            (file) => {
              this.images.push(new Image(
                index,
                {
                  img: this.sanitizeBase64(file)
                }
              ));
              index++;
            }
          );
          this.isGallery = true;
        }
      );
    }

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
    this.isListClient = true;
    this.isRegister = false;
    this.images = [];
    if (this.userList.length === 0) {
      this.customerService.fetchClientList().then(
        (userList: User[]) => {
          this.userList = userList;
        }
      );
    }
  }

  public fetchAlbum(selectedUser: User): void {
    this.selectedUser = selectedUser;
    this.isListClient = false;
    this.customerService.getClientPhotos(selectedUser.id).then(
      (album: Album) => {
        const files = JSON.parse(album.photo);
        let index = 0;
        files.forEach(
          (file) => {
            this.images.push(new Image(
              index,
              {
                img: this.sanitizeBase64(file)
              }
            ));
            index++;
          }
        );
        this.isGallery = true;
      }
    );
  }

  public registerNewClient(): void {
    this.isRegister = true;
    this.isListClient = false;
    this.isGallery = false;
    this.uploadPhoto = false;
    this.images = [];
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
        this.isListClient = true;
      }
    );
  }

  public returnToClients(): void {
    this.isListClient = true;
    this.isGallery = false;
    this.uploadPhoto = false;
    this.images = [];
  }

  public uploadPhotos(): void {
    this.uploadPhoto = true;
  }

  public galleryPhotos(): void {
    this.uploadPhoto = false;
  }

  myUploader(event) {
    const files: string[] = [];
    event.files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        files.push(reader.result);
      };
      reader.readAsDataURL(file);
    });

    if (files.length === event.files.length) {
      this.album.id = this.selectedUser.id;
      this.album.photo = JSON.stringify(files);
      this.customerService.uploadClientPhotos(this.album).then(
        (uploaded: boolean) => {
          if (uploaded) {
            this.album = {} as Album;
            let index = 0;
            files.forEach(
              (file) => {
                this.images.push(new Image(
                  index,
                  {
                    img: this.sanitizeBase64(file)
                  }
                ));
                index++;
              }
            );
          }
          this.isGallery = true;
          this.uploadPhoto = false;
        }
      );
    }
  }

  private sanitizeBase64(base64: string): SafeResourceUrl {
    const sanitizedBase64: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(base64);
    return sanitizedBase64;
  }
}

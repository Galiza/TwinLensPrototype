import { Component, OnInit } from '@angular/core';
import { PlainGalleryConfig, PlainGalleryStrategy, Image, GridLayout } from '@ks89/angular-modal-gallery';
import { User, Album } from '../model/model';
import { MenuItem } from 'primeng/api';
import { CustomerAreaService } from './customer-area.service';
import { LoginService } from '../login/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ErrorService } from '../error/error.service';

@Component({
  selector: 'app-customer-area',
  templateUrl: './customer-area.component.html',
  styleUrls: ['./customer-area.component.scss']
})
export class CustomerAreaComponent implements OnInit {

  public images: Image[] = [];
  public files: string[] = [];
  private album: Album = {} as Album;

  public user: User = {} as User;
  public userList: User[] = [];

  public isRegister = false;
  public isUserList = true;
  public isGallery = false;
  public uploadPhoto = false;

  public fetchingPhotos = false;

  public newUserForm: FormGroup;
  public selectedUser: User = {} as User;

  plainGalleryRow: PlainGalleryConfig;

  constructor(
    private customerService: CustomerAreaService,
    private loginService: LoginService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.user = this.loginService.getUser();
    /*if (Object.keys(this.user).length === 0 || this.user === undefined || this.user === null) {
      this.router.navigate(['/home']);
    }*/
    if (this.user.isAdmin) {
      this.goToClients();
    } else {
      this.downloadAlbum(this.user.id);
    }

    this.plainGalleryRow = {
      strategy: PlainGalleryStrategy.GRID,
      layout: new GridLayout({ width: '240px', height: 'auto' }, { length: 5, wrap: true })
    };
  }

  public goToClients(): void {
    this.isUserList = true;
    this.isRegister = false;
    this.isGallery = false;
    this.images = [];
    this.files = [];
    this.album = {} as Album;
    if (this.userList.length === 0) {
      this.customerService.fetchClientList().then(
        (userList: User[]) => {
          this.userList = userList;
        }
      );
    }
  }

  public userClicked(selectedUser: User): void {
    this.selectedUser = selectedUser;
    this.isUserList = false;
    this.downloadAlbum(selectedUser.id);
  }

  public registerNewUser(): void {
    this.isRegister = true;
    this.isUserList = false;
    this.isGallery = false;
    this.uploadPhoto = false;
    this.images = [];
  }

  public showUploader(): void {
    this.uploadPhoto = true;
  }

  public showGallery(): void {
    this.uploadPhoto = false;
  }

  public onUploadFinished(event): void {
    this.files.push(event.src);
  }

  public uploadPhotos(): void {
    this.album.id = this.selectedUser.id;
    this.album.photo = JSON.stringify(this.files);
      this.customerService.uploadClientPhotos(this.album).then(
        (uploaded: boolean) => {
          if (uploaded) {
            this.insertIntoGalleryImage(this.files);
          }
          console.log(this.images);
          this.isGallery = true;
          this.uploadPhoto = false;
        }
      );
  }

  private downloadAlbum(id: number): void {
    this.isGallery = true;
    this.fetchingPhotos = true;
    this.customerService.getClientPhotos(id).then(
      (album: Album) => {
        this.fetchingPhotos = false;
        if (album.photo === '' || this.selectedUser.id !== album.id) {
          return;
        }
        this.album = album;
        const fileList: string[] = JSON.parse(album.photo);
        this.files = fileList;
        if (fileList !== null && fileList.length > 0) {
          this.insertIntoGalleryImage(fileList);
        }
        this.uploadPhoto = false;
      }
    );
  }

  private insertIntoGalleryImage(files: string[]): void {
    let index = 0;
    const galleryImages: Image[] = [];
    files.forEach(
      (file) => {
        galleryImages.push(new Image(
          index,
          {
            img: this.sanitizeBase64(file)
          }
        ));
        index++;
      }
    );
    this.images = galleryImages;
  }

  public onRemoved(event): void {
    const index = this.files.findIndex(file => file === event.src);
    if (index !== -1) {
      this.files.splice(index, 1);
    }
  }

  private sanitizeBase64(base64: string): SafeResourceUrl {
    const sanitizedBase64: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(base64);
    return sanitizedBase64;
  }

  public removeUser(user: User): void {
    this.customerService.removeClient(user).then(
      (userList: User[]) => {
        this.userList = userList;
      }
    );
  }

  public logout(): void {
    this.loginService.setUser({} as User);
  }

  public newUserAdded(newUser: User): void {
    this.userList.push(newUser);
    this.isRegister = false;
    this.isUserList = true;
  }
}

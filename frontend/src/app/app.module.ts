// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Created Modules
import { AppComponent } from './app.component';
import { CustomerAreaComponent } from './customer-area/customer-area.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './util/auth-guard';

// Imported Modules
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ModalGalleryModule } from '@ks89/angular-modal-gallery';
import { ImageUploadModule } from 'angular2-image-upload';
import 'hammerjs';
import 'mousetrap';

const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'customer-area', component: CustomerAreaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerAreaComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FileUploadModule,
    DialogModule,
    TabMenuModule,
    ProgressSpinnerModule,
    TableModule,
    ImageUploadModule.forRoot(),
    ModalGalleryModule.forRoot({ shortcuts: ['ctrl+a', 'ctrl+s', 'meta+s'] }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

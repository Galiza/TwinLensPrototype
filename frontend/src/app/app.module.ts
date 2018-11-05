import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { CustomerAreaComponent } from './customer-area/customer-area.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';

import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { ModalGalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'customer-area', component: CustomerAreaComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' }
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
    TableModule,
    ModalGalleryModule.forRoot({ shortcuts: ['ctrl+a', 'ctrl+s', 'meta+s'] }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }

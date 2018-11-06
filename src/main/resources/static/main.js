(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _customer_area_customer_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-area/customer-area.component */ "./src/app/customer-area/customer-area.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "./node_modules/@ks89/angular-modal-gallery/esm5/ks89-angular-modal-gallery.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mousetrap */ "./node_modules/mousetrap/mousetrap.js");
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'customer-area', component: _customer_area_customer_area_component__WEBPACK_IMPORTED_MODULE_5__["CustomerAreaComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: '**', redirectTo: 'home' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _customer_area_customer_area_component__WEBPACK_IMPORTED_MODULE_5__["CustomerAreaComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
                primeng_tabmenu__WEBPACK_IMPORTED_MODULE_11__["TabMenuModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_14__["ModalGalleryModule"].forRoot({ shortcuts: ['ctrl+a', 'ctrl+s', 'meta+s'] }),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer-area/customer-area.component.html":
/*!************************************************************!*\
  !*** ./src/app/customer-area/customer-area.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand text-white home\">{{user.name}}</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n      aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      Menu\n      <i class=\"fas fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Sair</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div style=\"padding-top: 56px; background-color: #dadada; height: -webkit-fill-available; width: 100%;\">\n  <div *ngIf=\"user.isAdmin\">\n    <div class=\"row\" style=\"margin: 0; border-bottom: 1px solid black\">\n      <div class=\"buttons\" style=\"padding-left: 75px;\">\n        <button (click)=\"fetchClients()\" style=\"margin-right: 20px;\">\n          Cliente\n        </button>\n        <button (click)=\"registerNewClient()\">\n          Registrar Novo Cliente\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"isListClient\">\n      <div class=\"list-client-div\">\n        <div class=\"client-list-title\">\n          <span>Lista de Clientes</span>\n        </div>\n        <p-table [value]=\"userList\">\n          <ng-template pTemplate=\"header\">\n            <tr>\n              <th class=\"client-name\">Nome</th>\n              <th class=\"client-email\">Email</th>\n            </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-user>\n            <tr class=\"body-tr\" (click)=\"fetchAlbum(user)\">\n              <td>{{user.name}}</td>\n              <td>{{user.email}}</td>\n            </tr>\n          </ng-template>\n          <ng-template pTemplate=\"emptymessage\">\n            <tr>\n              <td style=\"border-right: unset; font-weight: bold;\" colspan=2>Não há clientes cadastrados</td>\n            </tr>\n          </ng-template>\n        </p-table>\n      </div>\n    </div>\n    <div *ngIf=\"isRegister\">\n      <form [formGroup]=\"newUserForm\" class=\"new-user-form\">\n        <div style=\"padding-bottom: 0;\">\n          <label>Nome:</label>\n          <input class=\"form-control flex-fill mr-1\" formControlName=\"name\">\n        </div>\n        <div>\n          <label>Email:</label>\n          <input class=\"form-control flex-fill mr-1\" formControlName=\"email\">\n        </div>\n        <div>\n          <label>Senha:</label>\n          <input type=\"password\" class=\"form-control flex-fill mr-1\" formControlName=\"password\">\n        </div>\n        <div>\n          <label>Confirme a senha:</label>\n          <input type=\"password\" class=\"form-control flex-fill mr-1\" formControlName=\"confirmPass\">\n        </div>\n        <div>\n          <button [disabled]=\"!newUserForm.valid\" class=\"btn btn-success btn-lg btn-block register-btn\" (click)=\"register()\">Entrar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div *ngIf=\"isGallery\">\n    <div *ngIf=\"user.isAdmin\" class=\"row\" style=\"padding-top: 10px; padding-left: 30px; margin: 0; padding-right: 30px;\">\n      <div class=\"col\">\n        <button (click)=\"returnToClients()\" style=\"border: unset; background-color: transparent;\">\n          <i class=\"fa fa-arrow-left\"></i>\n          Retornar para lista de clientes\n        </button>\n      </div>\n      <div class=\"col\" style=\"padding-left: 310px; font-size: 25px; font-weight: 600;\">\n        <span>{{selectedUser.name}}</span>\n      </div>\n      <div class=\"col\">\n        <button *ngIf=\"!uploadPhoto\" (click)=\"uploadPhotos()\" style=\"border: unset; background-color: transparent;\">\n          Upload de imagens</button>\n        <button *ngIf=\"uploadPhoto\" (click)=\"galleryPhotos()\" style=\"border: unset; background-color: transparent;\">Retornar\n          para galeria</button>\n      </div>\n    </div>\n    <div *ngIf=\"!uploadPhoto\">\n      <ks-modal-gallery [id]=\"0\" [modalImages]=\"images\" [plainGalleryConfig]=\"plainGalleryRow\"></ks-modal-gallery>\n    </div>\n    <div *ngIf=\"uploadPhoto\" style=\"padding-left: 30px; padding-right: 30px;\">\n      <p-fileUpload multiple=\"multiple\" accept=\"image/*\" mode=\"advanced\" customUpload=\"true\" (onSelect)=\"storeInFiles($event)\" (uploadHandler)=\"uploadFiles()\">\n        <ng-template pTemplate=\"content\">\n          <ul>\n            <li *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\n          </ul>\n        </ng-template>\n      </p-fileUpload>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/customer-area/customer-area.component.scss":
/*!************************************************************!*\
  !*** ./src/app/customer-area/customer-area.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Quicksand:400,300);\nbody {\n  font-family: 'Quicksand', sans-serif; }\n.gal-container {\n  padding: 12px; }\n.gal-item {\n  overflow: hidden;\n  padding: 3px; }\n.gal-item .box {\n  height: 350px;\n  overflow: hidden; }\n.box img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  -o-object-fit: cover; }\n.gal-item a:focus {\n  outline: none; }\n.gal-item a:after {\n  content: \"\\e003\";\n  font-family: 'Glyphicons Halflings';\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.75);\n  position: absolute;\n  right: 3px;\n  left: 3px;\n  top: 3px;\n  bottom: 3px;\n  text-align: center;\n  line-height: 350px;\n  font-size: 30px;\n  color: #fff;\n  transition: all 0.5s ease-in-out 0s; }\n.gal-item a:hover:after {\n  opacity: 1; }\n.modal-open .gal-container .modal {\n  background-color: rgba(0, 0, 0, 0.4); }\n.modal-open .gal-item .modal-body {\n  padding: 0px; }\n.modal-open .gal-item button.close {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  background-color: #000;\n  opacity: 1;\n  color: #fff;\n  z-index: 999;\n  right: -12px;\n  top: -12px;\n  border-radius: 50%;\n  font-size: 15px;\n  border: 2px solid #fff;\n  line-height: 25px;\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.35); }\n.modal-open .gal-item button.close:focus {\n  outline: none; }\n.modal-open .gal-item button.close span {\n  position: relative;\n  top: -3px;\n  font-weight: lighter;\n  text-shadow: none; }\n.gal-container .modal-dialogue {\n  width: 80%; }\n.gal-container .description {\n  position: relative;\n  height: 40px;\n  top: -40px;\n  padding: 10px 25px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  text-align: left; }\n.gal-container .description h4 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 300;\n  line-height: 20px; }\n.gal-container .modal.fade .modal-dialog {\n  -webkit-transform: scale(0.1);\n  transform: scale(0.1);\n  top: 100px;\n  opacity: 0;\n  transition: all 0.3s; }\n.gal-container .modal.fade.in .modal-dialog {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transform: translate3d(0, -100px, 0);\n  transform: translate3d(0, -100px, 0);\n  opacity: 1; }\n@media (min-width: 768px) {\n  .gal-container .modal-dialog {\n    width: 55%;\n    margin: 50 auto; } }\n@media (max-width: 768px) {\n  .gal-container .modal-content {\n    height: 250px; } }\n/* Footer Style */\ni.red {\n  color: #BC0213; }\n.gal-container {\n  padding-top: 75px;\n  padding-bottom: 75px; }\nfooter {\n  font-family: 'Quicksand', sans-serif; }\nfooter a, footer a:hover {\n  color: #88C425; }\n.modal-body {\n  padding: 0;\n  padding-top: 1rem; }\n.modal-header {\n  border-bottom: unset;\n  padding: 0.5rem; }\n.close {\n  margin: 0;\n  margin-bottom: -1rem;\n  padding: 0;\n  padding-right: 7px; }\n.modal-footer {\n  border-top: unset;\n  padding: 5px 15px; }\n.modal-footer button {\n    padding: 10px 28px; }\n.buttons button {\n  border: unset;\n  background-color: transparent; }\n.buttons button:hover {\n    cursor: pointer; }\n.active {\n  font-weight: 600; }\ninput.ng-invalid.ng-touched {\n  border: 1px solid red; }\n.register-btn {\n  margin-top: 10px;\n  padding: 12px; }\n.list-client-div {\n  width: 500px;\n  padding-top: 20px; }\n.new-user-form {\n  width: 400px;\n  padding-top: 50px; }\n.list-client-div, .new-user-form {\n  margin: 0 auto; }\n.client-list-title {\n  font-size: 26px;\n  font-weight: 600;\n  text-align: center;\n  padding-bottom: 20px; }\ntd {\n  text-align: center;\n  width: 250px;\n  font-size: 18px; }\ntd:first-child {\n    border-right: 1px solid black; }\nth {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 600;\n  width: 250px; }\n.body-tr:hover {\n  background-color: white !important;\n  font-weight: 600;\n  cursor: pointer; }\n.client-name, .client-email {\n  border-bottom: 1px solid black; }\n.client-name {\n  border-right: 1px solid black; }\nbutton:hover {\n  cursor: pointer; }\n.btn-success.disabled, .btn-success:disabled {\n  background-color: #486f51 !important;\n  border-color: #486f51 !important; }\n"

/***/ }),

/***/ "./src/app/customer-area/customer-area.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer-area/customer-area.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAreaComponent", function() { return CustomerAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "./node_modules/@ks89/angular-modal-gallery/esm5/ks89-angular-modal-gallery.js");
/* harmony import */ var _customer_area_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-area.service */ "./src/app/customer-area/customer-area.service.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomerAreaComponent = /** @class */ (function () {
    function CustomerAreaComponent(customerService, loginService, router, sanitizer) {
        this.customerService = customerService;
        this.loginService = loginService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.images = [];
        this.files = [];
        this.album = {};
        this.user = {};
        this.userList = [];
        this.isRegister = false;
        this.isListClient = true;
        this.isGallery = false;
        this.selectedUser = {};
        this.uploadPhoto = false;
        this.multiple = true;
    }
    CustomerAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.user = this.loginService.getUser();
        if (Object.keys(this.user).length === 0 || this.user === undefined || this.user === null) {
            this.router.navigate(['/home']);
        }
        if (this.user.isAdmin) {
            if (this.userList.length === 0) {
                this.fetchClients();
            }
        }
        else {
            this.customerService.getClientPhotos(this.user.id).then(function (album) {
                var files = JSON.parse(album.photo);
                if (files !== null) {
                    if (files.length > 0) {
                        var index_1 = 0;
                        files.forEach(function (file) {
                            _this.images.push(new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](index_1, {
                                img: _this.sanitizeBase64(file)
                            }));
                            index_1++;
                        });
                    }
                }
                _this.isGallery = true;
            });
        }
        this.plainGalleryRow = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["PlainGalleryStrategy"].GRID,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["GridLayout"]({ width: '240px', height: '190px' }, { length: 5, wrap: true })
        };
    };
    CustomerAreaComponent.prototype.createForm = function () {
        this.newUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            confirmPass: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    };
    CustomerAreaComponent.prototype.fetchClients = function () {
        var _this = this;
        this.isListClient = true;
        this.isRegister = false;
        this.images = [];
        if (this.userList.length === 0) {
            this.customerService.fetchClientList().then(function (userList) {
                _this.userList = userList;
            });
        }
    };
    CustomerAreaComponent.prototype.fetchAlbum = function (selectedUser) {
        var _this = this;
        this.selectedUser = selectedUser;
        this.isListClient = false;
        this.customerService.getClientPhotos(selectedUser.id).then(function (album) {
            var files = JSON.parse(album.photo);
            if (files !== null) {
                if (files.length > 0) {
                    var index_2 = 0;
                    files.forEach(function (file) {
                        _this.images.push(new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](index_2, {
                            img: _this.sanitizeBase64(file)
                        }));
                        index_2++;
                    });
                }
            }
            _this.isGallery = true;
        });
    };
    CustomerAreaComponent.prototype.registerNewClient = function () {
        this.isRegister = true;
        this.isListClient = false;
        this.isGallery = false;
        this.uploadPhoto = false;
        this.images = [];
    };
    CustomerAreaComponent.prototype.register = function () {
        var _this = this;
        var newUser = {};
        newUser.name = this.newUserForm.get('name').value;
        newUser.email = this.newUserForm.get('email').value;
        newUser.password = this.newUserForm.get('password').value;
        this.customerService.addNewClient(newUser).then(function (addedUser) {
            _this.userList.push(addedUser);
            _this.newUserForm.reset();
            _this.isListClient = true;
        });
    };
    CustomerAreaComponent.prototype.returnToClients = function () {
        this.isListClient = true;
        this.isGallery = false;
        this.uploadPhoto = false;
        this.images = [];
    };
    CustomerAreaComponent.prototype.uploadPhotos = function () {
        this.uploadPhoto = true;
    };
    CustomerAreaComponent.prototype.galleryPhotos = function () {
        this.uploadPhoto = false;
    };
    CustomerAreaComponent.prototype.storeInFiles = function (event) {
        var _this = this;
        // const files: string[] = [];
        event.files.forEach(function (file) {
            var reader = new FileReader();
            reader.onloadend = function () {
                _this.files.push(reader.result);
            };
            reader.readAsDataURL(file);
        });
    };
    CustomerAreaComponent.prototype.uploadFiles = function () {
        var _this = this;
        // if (this.files.length === event.files.length) {
        this.album.id = this.selectedUser.id;
        this.album.photo = JSON.stringify(this.files);
        this.customerService.uploadClientPhotos(this.album).then(function (uploaded) {
            if (uploaded) {
                _this.album = {};
                var index_3 = 0;
                _this.files.forEach(function (file) {
                    _this.images.push(new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](index_3, {
                        img: _this.sanitizeBase64(file)
                    }));
                    index_3++;
                });
            }
            _this.isGallery = true;
            _this.uploadPhoto = false;
        });
        // }
    };
    CustomerAreaComponent.prototype.sanitizeBase64 = function (base64) {
        var sanitizedBase64 = this.sanitizer.bypassSecurityTrustResourceUrl(base64);
        return sanitizedBase64;
    };
    CustomerAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-area',
            template: __webpack_require__(/*! ./customer-area.component.html */ "./src/app/customer-area/customer-area.component.html"),
            styles: [__webpack_require__(/*! ./customer-area.component.scss */ "./src/app/customer-area/customer-area.component.scss")]
        }),
        __metadata("design:paramtypes", [_customer_area_service__WEBPACK_IMPORTED_MODULE_2__["CustomerAreaService"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], CustomerAreaComponent);
    return CustomerAreaComponent;
}());



/***/ }),

/***/ "./src/app/customer-area/customer-area.service.ts":
/*!********************************************************!*\
  !*** ./src/app/customer-area/customer-area.service.ts ***!
  \********************************************************/
/*! exports provided: CustomerAreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAreaService", function() { return CustomerAreaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerAreaService = /** @class */ (function () {
    function CustomerAreaService(http) {
        this.http = http;
        this.url = 'https://twin-lens.herokuapp.com/';
    }
    CustomerAreaService.prototype.fetchClientList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            header.append('Access-Control-Allow-Origin', '*');
            header.append('Access-Control-Allow-Headers', 'Content-Type');
            header.append('Access-Control-Allow-Methods', '*');
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: header });
            _this.http.get('/listUsers', options).toPromise()
                .then(function (response) {
                var user = JSON.parse(response.text());
                if (user !== undefined || user !== null) {
                    resolve(user);
                }
            }).catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    CustomerAreaService.prototype.addNewClient = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            header.append('Access-Control-Allow-Origin', '*');
            header.append('Access-Control-Allow-Headers', 'Content-Type');
            header.append('Access-Control-Allow-Methods', '*');
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: header });
            _this.http.post('/register', user, options).toPromise()
                .then(function (response) {
                if (response.status === 200) {
                    resolve(JSON.parse(response.text()));
                }
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    CustomerAreaService.prototype.uploadClientPhotos = function (album) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            header.append('Access-Control-Allow-Origin', '*');
            header.append('Access-Control-Allow-Headers', 'Content-Type');
            header.append('Access-Control-Allow-Methods', '*');
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: header });
            _this.http.post('/savePhotos', album, options).toPromise()
                .then(function (response) {
                if (response.status === 200) {
                    resolve(true);
                }
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    CustomerAreaService.prototype.getClientPhotos = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            header.append('Access-Control-Allow-Origin', '*');
            header.append('Access-Control-Allow-Headers', 'Content-Type');
            header.append('Access-Control-Allow-Methods', '*');
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: header });
            _this.http.get('/getPhotos/:' + id, options).toPromise()
                .then(function (response) {
                if (response.status === 200) {
                    resolve(JSON.parse(response.text()));
                }
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    CustomerAreaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CustomerAreaService);
    return CustomerAreaService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand text-white home\" (click)=\"goTo('header')\">Twin Lens Photography</a>\r\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\r\n            aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            Menu\r\n            <i class=\"fas fa-bars\"></i>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" (click)=\"goTo('about')\">Sobre</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" (click)=\"goTo('contact')\">Contato</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Área do\r\n                        Cliente</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<header class=\"masthead\" id=\"header\">\r\n    <div class=\"container d-flex h-100 align-items-center\">\r\n        <div class=\"mx-auto text-center\">\r\n            <span class=\"text-uppercase\">Twin Lens Photography</span>\r\n            <!-- <h2 class=\"text-white-50 mx-auto mt-2 mb-5\">A free, responsive, one page Bootstrap theme created by Start\r\n          Bootstrap.</h2>\r\n        <a href=\"#about\" class=\"btn btn-primary js-scroll-trigger\">Get Started</a> -->\r\n        </div>\r\n    </div>\r\n</header>\r\n\r\n<!-- About Section -->\r\n<!-- <section  class=\"about-section text-center\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 mx-auto\">\r\n                <h2 class=\"text-white mb-4\">Built with Bootstrap 4</h2>\r\n                <p class=\"text-white-50\">Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be\r\n                    yours right\r\n                    now, simply download the template on\r\n                    <a href=\"http://startbootstrap.com/template-overviews/grayscale/\">the preview page</a>. The theme\r\n                    is open\r\n                    source, and you can use it for any purpose, personal or commercial.</p>\r\n            </div>\r\n        </div>\r\n        <img src=\"img/ipad.png\" class=\"img-fluid\" alt=\"\">\r\n    </div>\r\n</section> -->\r\n<section id=\"about\" class=\"projects-section bg-light\">\r\n    <div class=\"container\">\r\n        <!-- Featured Project Row -->\r\n        <!-- <div class=\"row align-items-center no-gutters mb-4 mb-lg-5\">\r\n        <div class=\"col-xl-8 col-lg-7\">\r\n          <img class=\"img-fluid mb-3 mb-lg-0\" src=\"img/bg-masthead.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"col-xl-4 col-lg-5\">\r\n          <div class=\"featured-text text-center text-lg-left\">\r\n            <h4>Shoreline</h4>\r\n            <p class=\"text-black-50 mb-0\">Grayscale is open source and MIT licensed. This means you can use it for any\r\n              project - even commercial projects! Download it, customize it, and publish your website!</p>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n        <!-- Project One Row -->\r\n        <div class=\"row no-gutters mb-5 mb-lg-0\">\r\n            <!-- <div class=\"col-lg-6\">\r\n                \r\n            </div> -->\r\n            <div>\r\n                <div class=\"bg-black text-center h-100 project\">\r\n                    <div class=\"d-flex h-100\">\r\n                        <div class=\"project-text w-100 text-center text-lg-left\">\r\n                            <h2 class=\"text-white text-center text-uppercase\">As Gêmeas</h2>\r\n                            <h6 class=\"text-white text-center text-uppercase\">e suas lentes</h6>\r\n                            <img class=\"img-fluid misty\" src=\"../../assets/image/photo.jpeg\" alt=\"\">\r\n                            <p class=\"mb-0 text-white-50\">Olá, somos Isabelle e Gabrielle, conhecidas também como Isa e\r\n                                Gabe ou apenas, \"as gêmeas\". Somos duas irmãs explorando diversos Mundos através de\r\n                                nossas lentes. Sim, mundos, o plural, é dentro dessa palavra onde encontramos uma vasta\r\n                                possibilidade de retratar os diferentes sentimentos, as diferentes rotinas, pessoas,\r\n                                sentidos e acontecimentos.</p>\r\n                            <br>\r\n                            <p class=\"mb-0 text-white-50\">Amamos qualquer coisa fora do comum, excêntrica,\r\n                                encantadoramente peculiar e ao mesmo\r\n                                tempo apreciamos o genuíno, o natural e o real.</p>\r\n                            <br>\r\n                            <p class=\"mb-0 text-white-50\">\r\n                                Dois pontos de vista diferentes sincronizados pelo mesmo objetivo: a imersão nessa\r\n                                atmosfera mágica e sincera da fotografia.</p>\r\n                            <br>\r\n                            <p class=\"mb-0 text-white-50\">Tudo isso nos define, esta é a nossa paixão, nosso dia-a-dia,\r\n                                nossa vida.<br>\r\n                                Dessa paixão surgiu uma ideia e dessa ideia se fez Twin Lens, ou Lente Gêmeas,\r\n                                simpáticas câmeras do século passado, com duas lentes interligadas por uma engrenagem,\r\n                                traduzindo poeticamente a relação de irmãs e profissionais. As duas se completam e\r\n                                somente assim funcionam.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Project Two Row -->\r\n        <!-- <div class=\"row justify-content-center no-gutters\">\r\n            <div class=\"col-lg-6\">\r\n                <img class=\"img-fluid\" src=\"../../assets/image/photo.jpeg\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-lg-6 order-lg-first\">\r\n                <div class=\"bg-black text-center h-100 project\">\r\n                    <div class=\"d-flex h-100\">\r\n                        <div class=\"project-text w-100 my-auto text-center text-lg-right\">\r\n                            <h4 class=\"text-white\">Mountains</h4>\r\n                            <p class=\"mb-0 text-white-50\">Another example of a project with its respective description.\r\n                                These\r\n                                sections work well responsively as well, try this theme on a small screen!</p>\r\n                            <hr class=\"d-none d-lg-block mb-0 mr-0\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n</section>\r\n<section id=\"contact\" class=\"email-section bg-light\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-10 col-lg-8 mx-auto text-center\">\r\n                <h2 class=\"mb-5 text-uppercase\">vamos marcar um café?</h2>\r\n                <h6 class=\"mb-5 text-uppercase\">só mandar uma mensagem por aqui</h6>\r\n                <form [formGroup]=\"emailForm\" class=\"\">\r\n                    <div class=\"d-flex mb-2\">\r\n                        <input type=\"email\" class=\"form-control flex-fill mr-1\" id=\"inputEmail\" formControlName=\"email\"\r\n                            placeholder=\"SEU EMAIL\">\r\n                        <input type=\"text\" class=\"form-control flex-fill ml-1\" id=\"inputEmail\" formControlName=\"subject\"\r\n                            placeholder=\"SEU ASSUNTO\">\r\n                    </div>\r\n                    <textarea type=\"text\" class=\"form-control flex-fill mb-2\" id=\"textAreaContent\" formControName=\"content\"\r\n                        placeholder=\"CONTE PRA GENTE O QUE PROCURA...\"></textarea>\r\n                    <button type=\"submit\" class=\"btn btn-outline-secondary btn-lg send-btn\">ENVIAR</button>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"contact-section bg-black\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <!-- <div class=\"col-md-4 mb-3 mb-md-0\">\r\n          <div class=\"card py-4 h-100\">\r\n            <div class=\"card-body text-center\">\r\n              <i class=\"fas fa-map-marked-alt text-primary mb-2\"></i>\r\n              <h4 class=\"text-uppercase m-0\">Address</h4>\r\n              <hr class=\"my-4\">\r\n              <div class=\"small text-black-50\">4923 Market Street, Orlando FL</div>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n            <div class=\"col-md-4 mb-3 mb-md-0\">\r\n                <div class=\"card py-4 h-100\">\r\n                    <div class=\"card-body text-center\">\r\n                        <i class=\"fas fa-envelope text-primary mb-2\"></i>\r\n                        <h4 class=\"text-uppercase m-0\">Email</h4>\r\n                        <hr class=\"my-4\">\r\n                        <div class=\"small text-black-50\">\r\n                            <a href=\"#\">hello@yourdomain.com</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4 mb-3 mb-md-0\">\r\n                <div class=\"card py-4 h-100\">\r\n                    <div class=\"card-body text-center\">\r\n                        <i class=\"fas fa-mobile-alt text-primary mb-2\"></i>\r\n                        <h4 class=\"text-uppercase m-0\">Telefone</h4>\r\n                        <hr class=\"my-4\">\r\n                        <div class=\"small text-black-50\">+55 (41) 99999-9999</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"social d-flex justify-content-center\">\r\n            <a href=\"#\" class=\"mx-2\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"mx-2\">\r\n                <i class=\"fab fa-facebook-f\"></i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".masthead {\n  background-image: url('rafa-e-mila.jpeg');\n  background-repeat: no-repeat; }\n  .masthead span {\n    font-size: 6.5rem;\n    font-weight: 600;\n    color: white; }\n  .img-fluid {\n  max-width: 50%;\n  float: left;\n  padding: 15px; }\n  li {\n  cursor: pointer; }\n  p {\n  padding-top: 13px; }\n  .home:hover {\n  cursor: pointer; }\n  .send-btn {\n  width: 100%;\n  height: 40px;\n  padding: 0;\n  border: 1px solid #6c757d;\n  color: #6c757d; }\n  .send-btn:hover {\n    background-color: #e1e9f1 !important; }\n  .form-control {\n  border: 1px solid #6c757d; }\n  textarea {\n  resize: unset;\n  height: 100px; }\n  .projects-section, .email-section {\n  padding: 6rem 0; }\n  .contact-section {\n  padding: 3rem 0;\n  background-image: url('paisagem2.jpeg');\n  background-repeat: no-repeat; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.createEmailForm();
    };
    HomeComponent.prototype.goTo = function (idName) {
        var goToId = document.getElementById(idName);
        goToId.scrollIntoView();
    };
    HomeComponent.prototype.createEmailForm = function () {
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top: 200px; background-color: #dadada; height: -webkit-fill-available; width: 100%;\">\n  <div *ngIf=\"showError\" style=\"width: 400px; background: red; border-radius: 5px; margin: 0 auto; text-align: center;margin-bottom: 50px;\">\n    <span>\n      EMAIL/SENHA INCORRETOS\n    </span>\n  </div>\n  <div style=\"height: 328px; width: 400px; margin: 0 auto; background-color: white; border-radius: 10px;\">\n    <form [formGroup]=\"loginForm\">\n      <div style=\"padding-bottom: 0;\">\n        <label>Email:</label>\n        <input class=\"form-control flex-fill mr-1\" type=\"text\" formControlName=\"email\">\n      </div>\n      <div>\n        <label>Senha:</label>\n        <input class=\"form-control flex-fill mr-1\" type=\"password\" formControlName=\"password\">\n      </div>\n      <div>\n        <button class=\"btn btn-success btn-lg btn-block\" (click)=\"submit()\">Entrar</button>\n        <button class=\"btn btn-danger btn-lg btn-block\" (click)=\"cancel()\">Cancelar</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  padding: 15px; }\n\nbutton {\n  padding: 12px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.showError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.loginService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).then(function () {
            _this.router.navigate(['/customer-area']);
        }).catch(function (error) {
            _this.showError = true;
        });
    };
    LoginComponent.prototype.cancel = function () {
        this.router.navigate(['/home']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        // private url = 'http://localhost:8080/';
        this.user = {};
    }
    LoginService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            header.append('Access-Control-Allow-Origin', '*');
            header.append('Access-Control-Allow-Headers', 'Content-Type');
            header.append('Access-Control-Allow-Methods', '*');
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: header });
            var login = {
                email: email,
                password: password
            };
            if (email === 'admin' && password === 'admin') {
                var adminUser = {
                    password: 'admin',
                    name: 'Admin',
                    email: 'admin@admin',
                    id: -1,
                    isAdmin: true
                };
                resolve(adminUser);
                _this.setUser(adminUser);
            }
            else {
                _this.http.post('/login', login, options).toPromise()
                    .then(function (response) {
                    var user = JSON.parse(response.text());
                    if (user !== undefined || user !== null) {
                        user.isAdmin = false;
                        resolve(user);
                        _this.setUser(user);
                    }
                }).catch(function (error) {
                    console.log(error);
                    reject(error);
                });
            }
        });
    };
    LoginService.prototype.getUser = function () {
        return this.user;
    };
    LoginService.prototype.setUser = function (user) {
        this.user = user;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yuri\Desktop\Trabalho\TwinLensPrototype\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
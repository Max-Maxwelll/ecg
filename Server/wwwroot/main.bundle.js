webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n<modal-dialog *ngIf='this.userService.isModalDialogVisible' [(description)]=\"this.userService.modal_message\" (isConfirmed)=\"this.userService.closeModal($event)\"></modal-dialog>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isLoggedIn = false;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_error_error_component__ = __webpack_require__("./src/app/components/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_forgot_password_forgot_password_component__ = __webpack_require__("./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_reset_password_reset_password_component__ = __webpack_require__("./src/app/components/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_modal_dialog_modal_dialog_component__ = __webpack_require__("./src/app/components/modal-dialog/modal-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_patient_patient_component__ = __webpack_require__("./src/app/components/patient/patient.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_13__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
    { path: 'reset', component: __WEBPACK_IMPORTED_MODULE_14__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */] },
    { path: 'patients', component: __WEBPACK_IMPORTED_MODULE_19__components_patient_patient_component__["a" /* PatientComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */] },
    // , canActivate: [AuthGuard]
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_modal_dialog_modal_dialog_component__["a" /* ModalDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_patient_patient_component__["a" /* PatientComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService) {
        this.userService = userService;
        this.isLoggedIn = false;
    }
    AuthGuard.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isLoggedIn()
            .subscribe(function (res) {
            if (res == "true") {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        this.userService.isLoggedIn()
            .subscribe(function (res) {
            if (res == "true") {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
        return this.isLoggedIn;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"flex-box\">\n  <p>\n    <label>Data: {{UserName || \"None\"}}</label>\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = /** @class */ (function () {
    //id:string = this.responce.json().responces
    function ErrorComponent(userService) {
        this.userService = userService;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.userData()
            .subscribe(function (data) {
            _this.responce = data;
            _this.Id = _this.responce.Id;
            _this.UserName = _this.responce.UserName;
        });
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error',
            template: __webpack_require__("./src/app/components/error/error.component.html"),
            styles: [__webpack_require__("./src/app/components/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"flex-box\">\n  <form class=\"form-authorization\" #ForgotPasswordForm=\"ngForm\" (ngSubmit)=\"OnSubmit(ForgotPasswordForm)\">\n    <h2>Забув пароль</h2>\n      <input class=\"validate\" type=\"text\" name=\"Email\" #Email=\"ngModel\" [(ngModel)]=\"model.Email\" placeholder=\"E-mail\" [pattern]=\"emailPattern\">\n      <div [hidden]=\"Email.valid || Email.untouched\" class=\"auth-exception\">\n        Некоректний E-mail\n      </div>\n      <button [disabled]=\"!ForgotPasswordForm.valid\" class=\"btn-submit\" type=\"submit\">Відправити</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(userService) {
        this.userService = userService;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.resetForm();
        console.log("ngOnInit()");
    };
    ForgotPasswordComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.reset();
            console.log("resetForm()");
        }
        this.model = {
            Email: ''
        };
    };
    ForgotPasswordComponent.prototype.OnSubmit = function (form) {
        console.log("OnSubmit()");
        console.log(form.value);
        this.userService.forgot(form.value);
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'forgot-password',
            template: __webpack_require__("./src/app/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("./src/app/components/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".main-nav {\r\n\r\n    height: 50px;\r\n    width: 100%;\r\n    background: crimson;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n.link-menu{\r\n    color: white;\r\n    margin: 0 10px;\r\n    text-decoration: none;\r\n    display: table;\r\n    cursor: pointer;\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n}\r\n.link-menu:hover{\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n.link-menu-user {\r\n    background: crimson;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 0px;\r\n    padding: 20px;\r\n    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n    color: white;\r\n    cursor: pointer;\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n}\r\n.link-menu-user:hover {\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n    background: white;\r\n    color: crimson;\r\n}\r\n.submenu{\r\n    position: fixed;\r\n    background: white;\r\n    border: 4px solid crimson;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    top: 0; left: 0;\r\n    right: 0; bottom: 0;\r\n    z-index: 999;\r\n    -webkit-animation: fade 0.3s linear 0s 1 normal;\r\n            animation: fade 0.3s linear 0s 1 normal;\r\n}\r\n.submenu nav{\r\n    display: table;\r\n    min-width: 300px;\r\n}\r\n.submenu a{\r\n    color: crimson;\r\n    display: table;\r\n    margin: 0 auto;\r\n    font-size: 1.5em;\r\n    padding: 15px;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n}\r\n.submenu a:hover{\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n.submenu-btn-close{\r\n    position: absolute;\r\n    right: 0; top: 0;\r\n    line-height: 0.5;\r\n    padding: 10px;\r\n    background: none;\r\n    font-size: 3em;\r\n    border: 0;\r\n    cursor: pointer;\r\n    color: crimson;\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n}\r\n.submenu-btn-close:hover{\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n/*анимация появления*/\r\n@-webkit-keyframes fade {\r\n\t/*прозрачность*/\r\n    0% { opacity: 0; } \r\n    50% { opacity: 0.5; }\r\n    100% { opacity: 1; }\r\n}\r\n@keyframes fade {\r\n\t/*прозрачность*/\r\n    0% { opacity: 0; } \r\n    50% { opacity: 0.5; }\r\n    100% { opacity: 1; }\r\n}\r\n/*анимация затухания*/\r\n@-webkit-keyframes fadeOff{\r\n\t/*прозрачность*/\r\n\t0% { opacity: 1; } \r\n\t50% { opacity: 0.5; }\r\n\t100% { opacity: 0; }\r\n}\r\n@keyframes fadeOff{\r\n\t/*прозрачность*/\r\n\t0% { opacity: 1; } \r\n\t50% { opacity: 0.5; }\r\n\t100% { opacity: 0; }\r\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-nav\">\n  <a  class=\"link-menu\" routerLink=\"/home\" routerLinkActive=\"active\" *ngIf=\"isLoggedIn == true\">Домашня</a>\n  <a class=\"link-menu\" routerLink=\"/patients\" routerLinkActive=\"active\" *ngIf=\"isLoggedIn == true\">Пацієнти</a>\n  <!-- *ngIf=\"isLoggedIn == true\" -->\n  <a  class=\"link-menu\" routerLink=\"/login\" routerLinkActive=\"active\" *ngIf=\"isLoggedIn == false\">Авторизація</a>\n  <a class=\"link-menu\" routerLink=\"../register\" routerLinkActive=\"active\" *ngIf=\"isLoggedIn == false\">Реєстрація</a>\n</nav>\n<a class=\"link-menu-user\" *ngIf=\"isLoggedIn == true\" (click)=\"submenu()\">{{LastName || \"FirstName\"}} {{FirstName || \"LastName\"}}</a>\n<div class=\"submenu\" *ngIf=\"statusSubmenu\" [ngStyle]=\"remove\">\n  <button class=\"submenu-btn-close\" (click)=\"submenu()\"> x </button>\n  <nav>\n    <a routerLink=\"../reset\" routerLinkActive=\"active\">Змінити пароль</a>\n    <a (click)=\"userService.logout()\">Вийти</a>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.statusSubmenu = false;
        this.remove = {
            'animation': 'fade 0.3s linear 0s 1 normal'
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.userData()
            .subscribe(function (data) {
            _this.responce = data;
            _this.FirstName = _this.responce.FirstName;
            _this.LastName = _this.responce.LastName;
        });
        this.userService.isLoggedIn()
            .subscribe(function (res) {
            if (res == "true") {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
        console.log("Init -> header");
    };
    HeaderComponent.prototype.submenu = function () {
        var _this = this;
        if (this.statusSubmenu == true) {
            this.remove.animation = "remove 0.3s linear 0s 1 forwards";
            setTimeout(function () { _this.statusSubmenu = !_this.statusSubmenu; }, 300);
        }
        else {
            this.remove.animation = "fade 0.3s linear 0s 1 normal";
            this.statusSubmenu = !this.statusSubmenu;
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".home-content {\r\n    width: 1000px;\r\n    margin: 75px auto 0 auto;\r\n}\r\n.home-content-logo{\r\n    width: 100%;\r\n    background: crimson;\r\n    overflow: hidden;\r\n    color: white;\r\n}\r\n.home-content-logo h3, .board-data h4{\r\n    padding: 20px 10px;\r\n    display: table;\r\n    float: left;\r\n}\r\n.home-content-logo button, .btn-load-file{\r\n    float: right;\r\n    padding: 1px;\r\n    color: white;\r\n    cursor: pointer;\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n}\r\n.home-content-logo button:hover, .btn-load-file:hover{\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n}\r\n.btn-load-file h4{\r\n    padding: 13px;\r\n}\r\n.img-reset-scale, .img-open{\r\n    padding: 15px;\r\n}\r\n/* СТИЛИ ДЛЯ КАРДИОГРАММЫ */\r\n.block-cardiogram{\r\n    width: 100%;\r\n    height: 300px;\r\n    overflow: hidden;\r\n    border: 2px solid crimson;\r\n    -webkit-transition: 0.2s all;\r\n    transition: 0.2s all;\r\n}\r\n.block-cardiogram-content{\r\n    width: 100%;\r\n    height: 100px;\r\n    padding: 150px 0;\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAC4jAAAuIwF4pT92AAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAMhJREFUeNrs2TEOgzAMheFnSukhMmXr9XsiD4VT0EKHGimicyoRfkuWV384kZJg4ziqViR3m3JeJJnqxtqpkbCaE9m+1uEnktyNiZx1jwABAgQIECBAgAABAgQIECDf6ONO/Y97e11Ict9jLLIr8hLZFzkU9Ro5SLpFHaacH5LW5H6X9JI0R30Xdcsl+lh2PW69WPTw08+U85NXFDY7ECBAgAABcjYIf6w4azWwtGpPpBmImAiQgy9dIEAqHlFWNRAfAAAA//8DAIdcOvyPqbc5AAAAAElFTkSuQmCC);\r\n    -webkit-transform: scale(1, -1);\r\n            transform: scale(1, -1);\r\n    cursor: pointer;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    -webkit-transition: 0.2s all;\r\n    transition: 0.2s all;\r\n}\r\n.text-axis-y {\r\n    color: crimson; \r\n    line-height: 1;\r\n    position: absolute;\r\n    font-size: 1em;\r\n    z-index: 998;\r\n    padding: 5px 4px;\r\n}\r\n.board-data {\r\n    width: 100%;\r\n    background: crimson;\r\n    border-bottom: 2px solid crimson;\r\n    overflow: hidden;\r\n}\r\n.board-data span {\r\n    line-height: 1;\r\n    color: white;\r\n    padding: 15px 10px;\r\n    display: table;\r\n    float: left;\r\n}\r\n.patient-table{\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    border-collapse: collapse;\r\n    line-height: 2;\r\n    font-size: 1.2em;\r\n}\r\n.patient-table-header th{\r\n    background: crimson;\r\n    color: white;\r\n    font-weight: normal;\r\n    padding: 10px 0;\r\n}\r\n.patient-table td{\r\n    text-align: center;\r\n    border: 1px solid #e1e1e1;\r\n}\r\n.patient-table td span{\r\n    border-bottom: 2px solid crimson;\r\n}\r\n.patient-table td button{\r\n    font-size: 1.2em;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n    color: crimson;\r\n}\r\n.patient-table td button:hover{\r\n    font-size: 1em;\r\n    border-bottom: 2px solid crimson;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n}\r\n/* СТИЛИ ДЛЯ КАРДИОГРАММЫ */\r\n@media print {\r\n   app-header {\r\n       display: none !important;\r\n   }\r\n   .home-content-info{\r\n       display: none;\r\n   }\r\n   path{\r\n       display: none;\r\n   }\r\n   .home-content-logo{\r\n       display: none;\r\n   }\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"home-content\" *ngIf=\"this.userService.loggedIn\">\n  <div class=\"home-content-logo\">\n    <h3 >ЕКГ ЗЧИТУВАЧ </h3>\n    <button (click)=\"return_scale()\" title=\"Повернути масштаб\"><img class=\"img-reset-scale\" src=\"../../../assets/images/reset_scale.png\" alt=\"\"></button>\n    <button (click)=\"jump(130)\" title=\"Пройти 1 секунду\"><h3>+1с</h3></button>\n    <button (click)=\"jump(7680)\" title=\"Пройти 1 минуту\"><h3>+1м</h3></button>\n    <button (click)=\"jump(76800)\" title=\"Пройти 10 минуту\"><h3>+10м</h3></button>\n    <button (click)=\"jump(230400)\" title=\"Пройти 30 минуту\"><h3>+30м</h3></button>\n    <button (click)=\"jump(-start_point)\" title=\"До початку\"><img class=\"img-reset-scale\" src=\"../../../assets/images/to_the_start.png\" alt=\"\"></button>\n  </div>\n  <div class=\"block-cardiogram\" id=\"workBlock\">\n    <svg class=\"block-cardiogram-content\" id=\"svg\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"\n    (click)=\"svg_click($event)\" (mousewheel)=\"svg_wheel($event)\" \n    (mouseover)=\"svg_over()\" (mouseleave)=\"svg_leave()\" [ngStyle]=\"svgTransform\">\n      <!-- X  and Y -->\n      <polyline id=\"polyline\" [attr.points]=\"polyline_points\" stroke=\"red\" stroke-width=\"0.6\" fill=\"none\">\n      </polyline>  \n      \n      <path d=\"M 0 125 h 1000\" stroke=\"green\" stroke-width=\"1\" stroke-dasharray=\"1 5\" />\n      <path d=\"M 0 100 h 1000\" stroke=\"green\" stroke-width=\"1\" stroke-dasharray=\"1 5\" />\n      <path d=\"M 0 50 h 1000\" stroke=\"green\" stroke-width=\"1\" stroke-dasharray=\"1 5\" />\n      <path d=\"M 0 0 h 1000\" stroke=\"gray\" stroke-width=\"1\" stroke-dasharray=\"8\" />\n      <path d=\"M 0 -50 h 1000\" stroke=\"green\" stroke-width=\"1\" stroke-dasharray=\"1 5\" />\n      <path d=\"M 0 -100 h 1000\" stroke=\"green\" stroke-width=\"1\" stroke-dasharray=\"1 5\" />\n      <path d=\"M 0 -125 h 1000\" stroke=\"green\" stroke-width=\"1\" stroke-dasharray=\"1 5\" />\n    </svg>\n    <b class=\"text-axis-y\" style=\"margin-top: -290px;\">125</b>\n    <b class=\"text-axis-y\" style=\"margin-top: -265px;\">100</b>\n    <b class=\"text-axis-y\" style=\"margin-top: -215px;\">50</b>\n    \n    <b class=\"text-axis-y\" style=\"margin-top: -115px;\">-50</b>\n    <b class=\"text-axis-y\" style=\"margin-top: -65px;\">-100</b>\n    <b class=\"text-axis-y\" style=\"margin-top: -40px;\">-125</b>\n    \n  </div>\n  <div class=\"board-data\">\n    <span>{{counter_time}}</span>\n    <span>{{counter_points}}</span>\n    <label class=\"btn-load-file\">\n      <input (change)=\"convert($event.target.files)\" type=\"file\" name=\"file\" style=\"display: none;\">\n      <h4>Відкрити</h4>\n    </label>\n    <label class=\"btn-load-file\">\n      <input (change)=\"ChangeData($event.target.files)\" type=\"file\" name=\"changeFile\" style=\"display: none;\">\n      <h4>Обробыти</h4>\n    </label>\n  </div>\n  <div class=\"home-content-info\">\n    <!-- <h3 style=\"color: green;\" *ngIf=\"this.userService.data != ''\">Файл загружен!</h3> -->\n    <!-- <h3 style=\"color: green;\" *ngIf=\"this.message != ''\">{{this.message}}</h3> -->\n    <!-- <span style=\"font-weight:bold;color:green;\" *ngIf=\"this.userService.message\">\n        {{this.userService.message}}\n    </span> -->\n    <!-- <h4>{{file.name}}, {{(file.size/1024)/1024}}</h4> -->\n    <!-- <input type=\"text\" [(ngModel)]=\"points\" style=\"width: 100%;\"/> -->\n    <!-- <button (click)=\"showDialog()\">click</button> -->\n  </div>\n  <table class=\"patient-table\">\n      <tr class=\"patient-table-header\">\n        <th>№</th><th>Им'я</th><th>Прізвище</th><th>Ім'я по батькові</th><th>Вік</th><th></th>\n      </tr>\n      <tr *ngFor=\"let patient of patients\">\n        <td><span>{{patient.id}}</span></td>\n        <td>{{patient.firstName}}</td>\n        <td>{{patient.lastName}}</td>\n        <td>{{patient.middleName}}</td>\n        <td>{{patient.age}}</td>\n        <td><button (click)=\"GetData(patient.id)\">Отримати</button></td>\n      </tr>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, http, userService, httpClient) {
        this.router = router;
        this.http = http;
        this.userService = userService;
        this.httpClient = httpClient;
        this.isModalDialogVisible = false;
        this.data = Array();
        this.start_point = 0;
        this.end_point = 0;
        this.scroll_count = 1;
        this.all_point = this.data.length;
        this.svgTransform = {
            'transform': '1, -1',
            'transform-origin': ''
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isLoggedIn()
            .subscribe(function (res) {
            if (res == "false") {
                _this.userService.loggedIn = false;
                _this.router.navigate(['/login']);
                console.log(res);
            }
            else
                _this.userService.loggedIn = true;
        });
        this.updateData();
        this.GetPatients();
    };
    HomeComponent.prototype.showDialog = function (event) {
        this.isModalDialogVisible = true;
        console.log(event);
    };
    HomeComponent.prototype.closeModal = function (isConfirmed) {
        if (!isConfirmed)
            this.isModalDialogVisible = false;
    };
    HomeComponent.prototype.open_file = function (files) {
        this.file = files.item(0);
    };
    HomeComponent.prototype.svg_click = function (event) {
        var delta = event.deltaY || event.detail || event.wheelDelta;
        // вывести тип события, элемент и координаты клика
        var x = event.offsetX == undefined ? event.layerX : event.offsetX;
        var y = event.offsetY;
        if (delta > 0)
            this.scroll_count += 0.5;
        else {
            if (this.scroll_count > 1)
                this.scroll_count -= 0.5;
        }
        this.svgTransform.transform = 'scale(' + this.scroll_count + ',-' + this.scroll_count + ')';
        this.svgTransform["transform-origin"] = x + 'px ' + y + 'px';
        console.log("svg_click");
    };
    HomeComponent.prototype.svg_wheel = function (event) {
        var delta = event.deltaY || event.detail || event.wheelDelta;
        if (delta > 0) {
            this.start_point += 10;
        }
        else {
            if (this.start_point > 9) {
                this.start_point -= 10;
            }
        }
        this.addPoints(this.start_point);
        this.updateData();
        console.log("svg_wheel");
    };
    HomeComponent.prototype.svg_over = function () {
        console.log("svg_over");
    };
    HomeComponent.prototype.svg_leave = function () {
        console.log("svg_over");
    };
    HomeComponent.prototype.GetPatients = function () {
        var _this = this;
        this.http.get(this.userService.rootUrl + "/api/Patients/Get")
            .map(function (res) {
            return res.json();
        }).subscribe(function (data) {
            console.log(data);
            _this.patients = data;
        });
    };
    HomeComponent.prototype.GetData = function (id) {
        var _this = this;
        this.http.get(this.userService.rootUrl + "/api/reader/Get/" + id)
            .subscribe(function (data) {
            console.log(id);
            var res = data.json();
            if (res[0] == "Exception") {
                _this.userService.isModalDialogVisible = true;
                _this.userService.modal_message = res[1];
            }
            else {
                console.log(res);
                _this.data = res;
                _this.userService.isModalDialogVisible = true;
                _this.userService.modal_message = "Дані отримані!";
                _this.addPoints(_this.start_point);
            }
        });
    };
    HomeComponent.prototype.convert = function (files) {
        var _this = this;
        this.userService.convert(files);
        var check = setInterval(function () {
            _this.data = _this.userService.data;
            _this.addPoints(_this.start_point);
            if (_this.userService.data.length > 0) {
                clearInterval(check);
                _this.userService.data = Array();
            }
            console.log("setTimeout()");
        }, 2000);
    };
    HomeComponent.prototype.ChangeData = function (files) {
        var _this = this;
        this.userService.ChangeData(files);
        var check = setInterval(function () {
            _this.data = _this.userService.data;
            _this.addPoints(_this.start_point);
            if (_this.userService.data.length > 0) {
                clearInterval(check);
                _this.userService.data = Array();
            }
            console.log("setTimeout()");
        }, 2000);
    };
    HomeComponent.prototype.return_scale = function () {
        this.svgTransform.transform = 'scale(1, -1)';
        this.svgTransform["transform-origin"] = "center center";
        this.scroll_count = 1;
    };
    HomeComponent.prototype.updateData = function () {
        this.end_point = this.start_point + 200;
        var seconds = Math.ceil(this.start_point / 128);
        var minutes = Math.ceil(seconds / 60);
        var hours = Math.ceil(minutes / 60);
        if (hours >= 1) {
            hours -= 1;
            minutes = Math.ceil(minutes - (hours * 60));
            seconds = Math.ceil(seconds - ((hours * 60) * 60));
        }
        if (minutes >= 1) {
            minutes -= 1;
            seconds = Math.ceil(seconds - (minutes * 60));
        }
        if (seconds >= 1)
            seconds -= 1;
        var new_hours = (hours < 10 ? '0' : '') + hours;
        var new_minutes = (minutes < 10 ? '0' : '') + minutes;
        var new_seconds = (seconds < 10 ? '0' : '') + seconds;
        var new_date = new_hours + " : " + new_minutes + " : " + new_seconds;
        this.counter_points = "Діапазон точок: " + (this.start_point) + " - " + (this.end_point);
        this.counter_time = "Час: " + new_date;
        console.log(this.start_point + " " + Math.ceil(seconds));
    };
    HomeComponent.prototype.addPoints = function (start_point) {
        this.polyline_points = "";
        for (var x = 0; x < 1000; x += 5) {
            this.addPoint(x, this.data[start_point]);
            start_point += 1;
        }
    };
    HomeComponent.prototype.addPoint = function (x, y) {
        this.polyline_points += x + " " + y + " ";
    };
    HomeComponent.prototype.jump = function (value) {
        //this.time+=1600;
        this.start_point += value;
        this.addPoints(this.start_point);
        this.updateData();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"flex-box\">\n  <form class=\"form-authorization\" #LoginForm=\"ngForm\" (ngSubmit)=\"OnSubmit(LoginForm)\">\n    <h2>Авторизація</h2>\n      <input class=\"validate\" type=\"text\" name=\"Email\" #Email=\"ngModel\" [(ngModel)]=\"model.Email\" placeholder=\"E-mail\" [pattern]=\"emailPattern\">\n      <div [hidden]=\"Email.valid || Email.untouched\" class=\"auth-exception\">\n        Некоректний E-mail\n      </div>\n      <input class=\"validate\" type=\"password\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"model.Password\" placeholder=\"Пароль\" required  minlength=\"3\">\n      <div [hidden]=\"Password.valid || Password.untouched\" class=\"auth-exception\">\n        Не менше 5 символів\n      </div>\n        <input style=\"float: left; width: 15px;\" type=\"checkbox\" name=\"RememberMe\" #RememberMe=\"ngModel\" [(ngModel)]=\"model.RememberMe\" placeholder=\"RememberMe\">\n        <label style=\"padding: 6px 0; display: table;\">Запам'ятати мене</label>\n\n      <button [disabled]=\"!LoginForm.valid\" value=\"RememberMe\" class=\"btn-submit\" type=\"submit\">Відправити</button>\n\n      <a routerLink=\"../forgot\">Забув пароль?</a>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.isLoggedIn = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isLoggedIn()
            .subscribe(function (res) {
            if (res == "true") {
                _this.router.navigate(['/']);
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
        this.resetForm();
    };
    LoginComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.model = {
            Email: '',
            Password: '',
            RememberMe: false
        };
    };
    // post the user's login details to server, if authenticated token is returned, then token is saved to session storage
    LoginComponent.prototype.OnSubmit = function (form) {
        console.log("OnSubmit()");
        console.log(form.value);
        var result = this.userService.login(form.value);
        // this.userService.loginUser(this.model)
        //     .subscribe((data: any) => {
        //         if (data.Succeeded == true) {
        //             this.resetForm(form);
        //             this.router.navigate(['/']);
        //         }
        //         else
        //             console.log(data.Errors[0]);
        //     });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-dialog/modal-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".modal-body{\r\n    width: 300px;\r\n    display: table;\r\n    position: fixed;\r\n    top: 0; bottom: 0;\r\n    left: 0; right: 0;\r\n    margin: auto;\r\n    background: white;\r\n    border: 2px solid crimson;\r\n    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n    z-index: 999;\r\n    -webkit-animation: fade 0.3s linear 0s 1 normal;\r\n            animation: fade 0.3s linear 0s 1 normal;\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n}\r\n.modal-body h2{\r\n    background: crimson;\r\n    padding: 20px 0;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n.modal-body h3{\r\n    text-align: center;\r\n    padding: 15px;\r\n}\r\n.modal-body-load{\r\n    display: table;\r\n    margin: 30px auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/modal-dialog/modal-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-back\">\n  <div [ngStyle]=\"remove\" [ngClass]=\"modalBody()\"> \n    <h2>ПОВІДОМЛЕННЯ</h2>\n    <h3 *ngIf='description != \"100%\" && description != null && description != \"\" && description != unexpected'>{{description}}</h3>\n    <img class=\"modal-body-load\" *ngIf='description == null || description == \"\" || description == unexpected || description == \"100%\"'src=\"../../../assets/images/loader.gif\" alt=\"\">\n    <button class=\"btn-submit\" (click)=\"close()\">ЗАКРИТИ</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/modal-dialog/modal-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalDialogComponent = /** @class */ (function () {
    function ModalDialogComponent(userService) {
        this.userService = userService;
        this.isConfirmed = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.remove = {
            'animation': 'fade 0.3s linear 0s 1 normal'
        };
    }
    ModalDialogComponent.prototype.ngOnInit = function () {
    };
    ModalDialogComponent.prototype.confirm = function () {
        this.isConfirmed.emit(true);
    };
    ModalDialogComponent.prototype.modalBody = function () {
        if (this.userService.isModalDialogVisible)
            return "modal-body";
        else
            return "";
    };
    ModalDialogComponent.prototype.close = function () {
        var _this = this;
        this.remove.animation = "remove 0.3s linear 0s 1 forwards";
        setTimeout(function () { _this.isConfirmed.emit(false); }, 300);
        //this.isConfirmed.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ModalDialogComponent.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */])
    ], ModalDialogComponent.prototype, "isConfirmed", void 0);
    ModalDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'modal-dialog',
            template: __webpack_require__("./src/app/components/modal-dialog/modal-dialog.component.html"),
            styles: [__webpack_require__("./src/app/components/modal-dialog/modal-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]])
    ], ModalDialogComponent);
    return ModalDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/patient/patient.component.css":
/***/ (function(module, exports) {

module.exports = ".patient{\r\n    width: 1000px;\r\n    margin: 100px auto 50px auto;;\r\n\r\n}\r\n.patient-data{\r\n    margin-bottom: 20px;\r\n    border: 2px solid crimson;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    overflow: auto;\r\n}\r\n.patient-data-title, .patient-add-title{\r\n    width: 100%;\r\n    display: block;\r\n    background: crimson;\r\n    color: white;\r\n    padding: 20px 15px;\r\n    margin-bottom: 10px;\r\n    font-size: 1.5em;\r\n    text-transform: uppercase;\r\n}\r\n.patient-data-data{\r\n    float: left;\r\n    padding: 5px;\r\n    font-size: 1.2em;\r\n    line-height: 2;\r\n    border-bottom: 3px solid #e1e1e1;\r\n    margin: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n.patient-data-data b{\r\n    color: crimson;\r\n}\r\n.patient-data label {\r\n    display: table;\r\n    clear: left;\r\n    margin: 10px;\r\n}\r\n.patient-data p {\r\n    clear: left;\r\n    margin: 0 10px 10px 10px;\r\n    line-height: 2;\r\n    border: 2px solid #e1e1e1;\r\n    padding: 5px 10px;\r\n    font-size: 1.1em;\r\n    text-align: justify;\r\n}\r\n.patient-add{\r\n    border: 2px solid crimson;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    overflow: auto;\r\n}\r\n.block-input{\r\n    width: 48%;\r\n    float: left;\r\n    margin: 1.5% 1%;\r\n}\r\n.patient-add input{\r\n    display: table;\r\n    width: 100%;\r\n    padding: 10px;\r\n    font-size: 1.2em;\r\n    overflow: auto;\r\n}\r\n.auth-exception{\r\n    position: absolute;\r\n    margin-top: 5px;\r\n}\r\n.patient-add textarea{\r\n    width: 98%;\r\n    margin: 1%;\r\n    font-size: 1.1em;\r\n    text-align: justify;\r\n    padding: 5px 10px;\r\n    line-height: 2;\r\n}\r\n.patient-add-loadFile{\r\n    float: left;\r\n    margin: 1% !important;\r\n}\r\n.patient-add-dataFile{\r\n    display: table;\r\n    float: left;\r\n    margin: 1%;\r\n    padding: 10px 0;\r\n    color: crimson;\r\n    font-size: 1.2em;\r\n}\r\n.btn-submit{ \r\n    margin: 10px auto;\r\n}\r\n.patient-add-submit{\r\n    float: right;\r\n    margin: 1%;\r\n}\r\n.patient-table{\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    border-collapse: collapse;\r\n    line-height: 2;\r\n    font-size: 1.2em;\r\n}\r\n.patient-table-header th{\r\n    background: crimson;\r\n    color: white;\r\n    font-weight: normal;\r\n    padding: 10px 0;\r\n}\r\n.patient-table td{\r\n    text-align: center;\r\n    border: 1px solid #e1e1e1;\r\n}\r\n.patient-table td span{\r\n    border-bottom: 2px solid crimson;\r\n}\r\n.patient-table td button{\r\n    font-size: 1.2em;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n    color: crimson;\r\n}\r\n.patient-table td button:hover{\r\n    font-size: 1em;\r\n    border-bottom: 2px solid crimson;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n}"

/***/ }),

/***/ "./src/app/components/patient/patient.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"patient\" *ngIf=\"this.userService.loggedIn\">\n  <div class=\"patient-data\">\n    <span class=\"patient-data-title\">№{{model.Id || \"0\"}} : {{model.FirstName || \"Им'я\"}} {{model.LastName || \"Прізвище\"}} {{model.MiddleName || \"Им'я по батькові\"}}</span>\n    <span class=\"patient-data-data\">Вік <b>{{model.Age || \"0\"}}</b> років</span>\n    <span class=\"patient-data-data\">Вага <b>{{model.Weight || \"0\"}}</b> кг.</span>\n    <span class=\"patient-data-data\">Зріст <b>{{model.Height || \"0\"}}</b> см.</span>\n    <span class=\"patient-data-data\"> Стать <b>{{model.Sex || \"___\"}}</b></span>\n    <span  class=\"patient-data-data\" style=\"clear: left;\">Мобільний телефон <b>{{model.PhoneNumber || \"0000000000\"}}</b></span>\n    <span class=\"patient-data-data\">Домашній телефон <b>{{model.HomeNumber || \"0000000\"}}</b></span>\n    <span class=\"patient-data-data\">E-mail <b>{{model.Email || \"___\"}}</b></span>\n    <span class=\"patient-data-data\" style=\"clear: left;\">Стан пацієнта</span>\n    <p>{{model.Condition || \"___\"}}</p>\n  </div>\n  <form class=\"patient-add\" #PatientForm=\"ngForm\">\n    <span class=\"patient-add-title\">Додати пацієнта</span>\n    <div class=\"block-input\">\n      <input type=\"text\" name=\"FirstName\" #FirstName=\"ngModel\" [(ngModel)]=\"model.FirstName\" placeholder=\"Ім'я\" minlength=\"3\">\n      <div [hidden]=\"FirstName.valid || FirstName.untouched\" class=\"auth-exception\" style=\"clear: left;\">\n        Не меньше 3 літер\n      </div>\n    </div>\n    <div class=\"block-input\">\n      <input type=\"text\" name=\"LastName\" #LastName=\"ngModel\" [(ngModel)]=\"model.LastName\" placeholder=\"Прізвище\" minlength=\"3\">\n      <div [hidden]=\"LastName.valid || LastName.untouched\" class=\"auth-exception\" style=\"clear: left;\">\n        Не меньше 3 літер\n      </div>\n    </div>\n    <div class=\"block-input\">\n      <input type=\"text\" name=\"MiddleName\" #MiddleName=\"ngModel\" [(ngModel)]=\"model.MiddleName\" placeholder=\"Ім'я по батькові\" minlength=\"3\">\n      <div [hidden]=\"MiddleName.valid || MiddleName.untouched\" class=\"auth-exception\" style=\"clear: left;\">\n        Не меньше 3 літер\n      </div>\n    </div>\n    <div class=\"block-input\">\n      <input type=\"text\" name=\"Age\" #Age=\"ngModel\" [(ngModel)]=\"model.Age\" placeholder=\"Вік\" [pattern]=\"agePattern\">\n      <div [hidden]=\"Age.valid || Age.untouched\" class=\"auth-exception\" style=\"clear: left;\">\n        Не меньше 0\n      </div>\n    </div>\n    <div class=\"block-input\">\n      <input type=\"text\" name=\"Weight\" #Weight=\"ngModel\" [(ngModel)]=\"model.Weight\" placeholder=\"Вага\" minlength=\"2\">\n      <div [hidden]=\"Weight.valid || Weight.untouched\" class=\"auth-exception\" style=\"clear: left;\">\n        Двозначне число і більше\n      </div>\n    </div>\n    <div class=\"block-input\">\n      <input type=\"text\" name=\"Height\" #Height=\"ngModel\" [(ngModel)]=\"model.Height\" placeholder=\"Зріст\" minlength=\"2\">\n      <div [hidden]=\"Height.valid || Height.untouched\" class=\"auth-exception\" style=\"clear: left;\">\n        Двозначне число і більше\n      </div>\n    </div>\n    <div class=\"block-input\">\n      <input type=\"text\" name=\"Sex\" #Sex=\"ngModel\" [(ngModel)]=\"model.Sex\" placeholder=\"Стать\">\n      <div [hidden]=\"Sex != 'Чоловіча' || Sex != 'Жіноча'\" class=\"auth-exception\" style=\"clear: left;\">\n        Стать \"Жіноча\" або \"Чоловіча\"\n      </div>\n    </div>\n    <div class=\"block-input\">\n      <input type=\"text\" name=\"PhoneNumber\" #PhoneNumber=\"ngModel\" [(ngModel)]=\"model.PhoneNumber\" placeholder=\"Мобільний телефон\" minlength=\"10\">\n      <div [hidden]=\"PhoneNumber.valid || PhoneNumber.untouched\" class=\"auth-exception\" style=\"clear: left;\">\n        Довжина 10 цифр\n      </div>\n    </div>\n    <div class=\"block-input\">\n      <input type=\"text\" name=\"HomeNumber\" #HomeNumber=\"ngModel\" [(ngModel)]=\"model.HomeNumber\" placeholder=\"Домашній телефон\" minlength=\"7\">\n      <div [hidden]=\"HomeNumber.valid || HomeNumber.untouched\" class=\"auth-exception\" style=\"clear: left;\">\n        Не меньше 3 літер\n      </div>\n    </div>\n    <div class=\"block-input\">\n      <input type=\"text\" name=\"Email\" #Email=\"ngModel\" [(ngModel)]=\"model.Email\" placeholder=\"E-mail\" [pattern]=\"emailPattern\">\n      <div [hidden]=\"Email.valid || Email.untouched\" class=\"auth-exception\" style=\"clear: left;\">\n        Некоректний E-mail\n      </div>\n    </div>\n    <textarea name=\"Condition\" #Condition=\"ngModel\" [(ngModel)]=\"model.Condition\" rows=\"5\" placeholder=\"Стан пацієнта\"></textarea>\n    <label class=\"btn-submit patient-add-loadFile\">\n      <input (change)=\"Open($event.target.files)\" type=\"file\" style=\"display: none;\">\n      Завантажити кардіограму\n    </label>\n    <span class=\"patient-add-dataFile\">{{this.model.Url}}</span>\n    <br>\n    <button [disabled]=\"!PatientForm.valid\" class=\"btn-submit patient-add-submit\" type=\"submit\" (click)=\"OnSubmit(PatientForm, file)\">Створити</button>\n    <button [disabled]=\"!PatientForm.valid\" class=\"btn-submit patient-add-submit\" (click)=\"Change()\">Оновити</button>\n  </form>\n  <table class=\"patient-table\">\n    <tr class=\"patient-table-header\">\n      <th>№</th><th>Им'я</th><th>Прізвище</th><th>Ім'я по батькові</th><th>Вік</th><th></th><th></th>\n    </tr>\n    <tr *ngFor=\"let patient of patients\">\n      <td><span>{{patient.id}}</span></td>\n      <td>{{patient.firstName}}</td>\n      <td>{{patient.lastName}}</td>\n      <td>{{patient.middleName}}</td>\n      <td>{{patient.age}}</td>\n      <td><button (click)=\"GetPatient(patient)\">Отримати</button></td>\n      <td><button (click)=\"DeletePatient(patient)\">Видалити</button></td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/patient/patient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
var PatientComponent = /** @class */ (function () {
    function PatientComponent(router, http, userService, httpClient) {
        this.router = router;
        this.http = http;
        this.userService = userService;
        this.httpClient = httpClient;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.agePattern = "^[0-9]{1,3}$";
        this.rootUrl = this.userService.rootUrl;
    }
    PatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isLoggedIn()
            .subscribe(function (res) {
            if (res == "false") {
                _this.userService.loggedIn = false;
                _this.router.navigate(['/login']);
            }
            else {
                _this.userService.loggedIn = true;
            }
        });
        this.resetForm();
        this.GetPatients();
    };
    PatientComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.model = {
            Id: null,
            FirstName: '',
            LastName: '',
            MiddleName: '',
            Age: '',
            Weight: '',
            Height: '',
            Sex: '',
            PhoneNumber: '',
            HomeNumber: '',
            Email: '',
            Condition: '',
            Doctor: ''
        };
    };
    PatientComponent.prototype.GetPatients = function () {
        var _this = this;
        this.http.get(this.rootUrl + "/api/Patients/Get")
            .map(function (res) {
            return res.json();
        }).subscribe(function (data) {
            console.log(data);
            _this.patients = data;
        });
    };
    PatientComponent.prototype.GetPatient = function (patient) {
        console.log(patient);
        this.model.Id = patient.id;
        this.model.FirstName = patient.firstName;
        this.model.LastName = patient.lastName;
        this.model.MiddleName = patient.middleName;
        this.model.Age = patient.age;
        this.model.Weight = patient.weight;
        this.model.Height = patient.height;
        this.model.Sex = patient.sex;
        this.model.PhoneNumber = patient.phoneNumber;
        this.model.HomeNumber = patient.homeNumber;
        this.model.Email = patient.email;
        this.model.Condition = patient.condition;
    };
    PatientComponent.prototype.DeletePatient = function (patient) {
        var _this = this;
        this.http.get(this.rootUrl + "/api/Patients/Delete/" + patient.id)
            .subscribe(function (data) {
            var res = data.toString().replace('"', "").split(",");
            if (res[0] == "Exception") {
                _this.userService.isModalDialogVisible = true;
                _this.userService.modal_message = res[1];
            }
            else {
                _this.userService.isModalDialogVisible = true;
                _this.userService.modal_message = "Пацієнта видалено!";
                _this.GetPatients();
            }
        });
    };
    PatientComponent.prototype.Open = function (files) {
        var _this = this;
        if (files.Length == 0)
            return;
        var formData = new FormData();
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
        }
        var uploadReq = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpRequest */]('POST', "api/Patients/UploadFile", formData, {
            reportProgress: true,
        });
        this.httpClient.request(uploadReq).subscribe(function (event) {
            _this.userService.isModalDialogVisible = true;
            if (event.type === __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpEventType */].UploadProgress)
                _this.userService.modal_message = (Math.round(100 * event.loaded / event.total)).toString() + "%";
            else if (event.type === __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpEventType */].Response) {
                var res = event.body.toString().replace('"', "").split(",");
                if (res[0] == "Exception") {
                    _this.userService.isModalDialogVisible = true;
                    _this.userService.modal_message = res[1];
                }
                else {
                    _this.userService.isModalDialogVisible = true;
                    _this.userService.data = res;
                    _this.userService.modal_message = "Файл завантажений!";
                }
                console.log(event.body.toString());
            }
        });
    };
    PatientComponent.prototype.Change = function () {
        var _this = this;
        var body = JSON.stringify(this.model);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(this.model.Id);
        this.http.post(this.rootUrl + "/api/Patients/Change", body, options)
            .subscribe(function (res) {
            console.log(res.json()[0]);
            if (res.json()[0] == "Exception") {
                _this.userService.isModalDialogVisible = true;
                _this.userService.modal_message = res.json()[1];
            }
            else {
                _this.userService.isModalDialogVisible = true;
                _this.userService.modal_message = "Пацієнта змінено!";
                _this.GetPatients();
            }
        }, function (errors) {
            _this.userService.isModalDialogVisible = true;
            errors = JSON.parse(errors._body);
            var results;
            var i = errors.errors.lenth;
            for (var key in errors.errors) {
                results += errors.errors[key].code + "  ";
            }
            _this.userService.modal_message = results;
        });
    };
    PatientComponent.prototype.OnSubmit = function (form) {
        var _this = this;
        //form.controls['Doctor'].setValue(this.model.Doctor);
        var body = JSON.stringify(form.value);
        console.log(JSON.stringify(this.model));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.rootUrl + "/api/Patients/Add", body, options)
            .subscribe(function (res) {
            console.log(res.json()[0]);
            //var res = res.body.toString().replace('"', "").split(",");
            if (res.json()[0] == "Exception") {
                _this.userService.isModalDialogVisible = true;
                _this.userService.modal_message = res.json()[1];
            }
            else {
                _this.userService.isModalDialogVisible = true;
                _this.userService.modal_message = "Пацієнта створено!";
                _this.GetPatients();
            }
        }, function (errors) {
            _this.userService.isModalDialogVisible = true;
            errors = JSON.parse(errors._body);
            var results;
            var i = errors.errors.lenth;
            for (var key in errors.errors) {
                results += errors.errors[key].code + "  ";
            }
            _this.userService.modal_message = results;
        });
    };
    PatientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'patient-form',
            template: __webpack_require__("./src/app/components/patient/patient.component.html"),
            styles: [__webpack_require__("./src/app/components/patient/patient.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"flex-box\">\n  <form class=\"form-authorization\" #RegistrationForm=\"ngForm\" (ngSubmit)=\"OnSubmit(RegistrationForm)\">\n    <h2>Реєстрація</h2>\n      <input class=\"validate\" type=\"text\" name=\"FirstName\" #FirstName=\"ngModel\" [(ngModel)]=\"model.FirstName\" placeholder=\"Ім'я\">\n\n      <input class=\"validate\" type=\"text\" name=\"LastName\" #LastName=\"ngModel\" [(ngModel)]=\"model.LastName\" placeholder=\"Прізвище\">\n\n      <input class=\"validate\" type=\"text\" name=\"Email\" #Email=\"ngModel\" [(ngModel)]=\"model.Email\" placeholder=\"E-mail\" [pattern]=\"emailPattern\">\n      <div [hidden]=\"Email.valid || Email.untouched\" class=\"auth-exception\">\n        Некоректний E-mail\n      </div>\n      \n      <input class=\"validate\" type=\"password\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"model.Password\" placeholder=\"Пароль\" required  minlength=\"5\">\n      <div [hidden]=\"Password.valid || Password.untouched\" class=\"auth-exception\">\n        Не менше 5 символов\n      </div>\n      \n      <input class=\"validate\" type=\"password\" name=\"ConfirmPassword\" #ConfirmPassword=\"ngModel\" [(ngModel)]=\"model.ConfirmPassword\" placeholder=\"Повторити пароль\" required  minlength=\"5\">\n      <div *ngIf=\"model.Password != ''\" [hidden]=\"model.Password == model.ConfirmPassword\" class=\"auth-exception\">\n        Пароль не збігається\n      </div>\n      <div [hidden]=\"ConfirmPassword.valid || ConfirmPassword.untouched\" class=\"auth-exception\">\n        Не менше 5 символів\n      </div>\n\n      <button [disabled]=\"!RegistrationForm.valid\" class=\"btn-submit\" type=\"submit\">Відправити</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.isLoggedIn = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isLoggedIn()
            .subscribe(function (res) {
            if (res == "true") {
                _this.isLoggedIn = true;
                _this.router.navigate(['/']);
            }
            else {
                _this.isLoggedIn = false;
            }
        });
        this.resetForm();
    };
    RegisterComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.reset();
            console.log("resetForm()");
        }
        this.model = {
            FirstName: '',
            LastName: '',
            Email: '',
            Password: '',
            ConfirmPassword: ''
        };
    };
    RegisterComponent.prototype.OnSubmit = function (form) {
        console.log("OnSubmit");
        console.log(form.value);
        var result = this.userService.register(form.value);
        //console.log(result);
        // this.userService.registerUser(form.value.Email, form.value.Password, form.value.ConfirmPassword)
        //   .subscribe((response: any) => {
        //     if (response.status == 200)
        //     {
        //         this.router.navigate(['/login']);
        //         console.log("Registered!");
        //     }
        //     else
        //     {
        //         console.log(response);
        //         console.log(response.json());
        //         console.log(response.json().messages[0]);
        //     }
        //   });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/reset-password/reset-password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"flex-box\">\n  <form class=\"form-authorization\" #ResetPasswordForm=\"ngForm\" (ngSubmit)=\"OnSubmit(ResetPasswordForm)\">\n    <h2>Оновити пароль</h2>\n      <input class=\"validate\" type=\"text\" name=\"Email\" #Email=\"ngModel\" [(ngModel)]=\"model.Email\" placeholder=\"E-mail\" [pattern]=\"emailPattern\">\n      <div [hidden]=\"Email.valid || Email.untouched\" class=\"auth-exception\">\n        Некорректный E-mail\n      </div>\n      \n      <input class=\"validate\" type=\"password\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"model.Password\" placeholder=\"Пароль\" required  minlength=\"5\">\n      <div [hidden]=\"Password.valid || Password.untouched\" class=\"auth-exception\">\n        Не менше 5 символів\n      </div>\n      \n      <input class=\"validate\" type=\"password\" name=\"ConfirmPassword\" #ConfirmPassword=\"ngModel\" [(ngModel)]=\"model.ConfirmPassword\" placeholder=\"Повторити пароль\" required  minlength=\"5\">\n      <div *ngIf=\"model.Password != ''\" [hidden]=\"model.Password == model.ConfirmPassword\" class=\"auth-exception\">\n        Пароль не збігається\n      </div>\n      <div [hidden]=\"ConfirmPassword.valid || ConfirmPassword.untouched\" class=\"auth-exception\">\n        Не менше 5 символів\n      </div>\n\n      <input type=\"hidden\" name=\"Code\" #Code=\"ngModel\" [(ngModel)]=\"model.Code\" value=\"12345\">\n\n      <button [disabled]=\"!ResetPasswordForm.valid\" class=\"btn-submit\" type=\"submit\">Відправити</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(userService) {
        this.userService = userService;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.resetForm();
        console.log("ngOnInit()");
    };
    ResetPasswordComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.reset();
            console.log("resetForm()");
        }
        this.model = {
            Email: '',
            Password: '',
            ConfirmPassword: '',
            Code: ''
        };
    };
    ResetPasswordComponent.prototype.OnSubmit = function (form) {
        console.log("OnSubmit()");
        console.log(form.value);
        this.userService.reset(form.value);
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'reset-password',
            template: __webpack_require__("./src/app/components/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("./src/app/components/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/models/UserDataViewModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataViewModel; });
var UserDataViewModel = /** @class */ (function () {
    function UserDataViewModel(_Id, _UserName, _FirstName, _LastName, _PhoneNumber) {
        this.Id = _Id;
        this.UserName = _UserName;
        this.FirstName = _FirstName;
        this.LastName = _LastName;
        this.PhoneNumber = _PhoneNumber;
    }
    return UserDataViewModel;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    // for requesting secure data using json
    AuthService.prototype.authJsonHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        header.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        return header;
    };
    // for requesting secure data from a form post
    AuthService.prototype.authFormHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        header.append('Accept', 'application/json');
        return header;
    };
    // for requesting unsecured data using json
    AuthService.prototype.jsonHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        return header;
    };
    // for requesting unsecured data using form post
    AuthService.prototype.contentHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        header.append('Accept', 'application/json');
        return header;
    };
    // called when logging out user; clears tokens from localStorage
    AuthService.prototype.logout = function () {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('expires_in');
    };
    AuthService.prototype.isLoggedIn = function () {
        var at = localStorage.getItem('access_token');
        if (at === null)
            return false;
        var expireStr = localStorage.getItem('expires_in');
        if (expireStr === null)
            return false;
        var expire = new Date(expireStr);
        var now = new Date();
        if (now >= expire)
            return false;
        return true;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_UserDataViewModel__ = __webpack_require__("./src/app/models/UserDataViewModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import '../../rxjs-operators';


var UserService = /** @class */ (function () {
    function UserService(http, authService, router, httpClient) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.httpClient = httpClient;
        this.loggedIn = false;
        this.data = Array();
        this.rootUrl = 'http://localhost:10847';
        this.loggedIn;
    }
    UserService.prototype.closeModal = function (isConfirmed) {
        if (!isConfirmed)
            this.isModalDialogVisible = false;
    };
    UserService.prototype.register = function (model) {
        var _this = this;
        console.log(model);
        var body = JSON.stringify(model);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.rootUrl + "/api/Register", body, options)
            .subscribe(function (res) {
            _this.isModalDialogVisible = true;
            _this.modal_message = "Реэстрація пройшла успішно!!";
            setTimeout(function () {
                _this.router.navigate(['/login']);
                _this.isModalDialogVisible = false;
            }, 2000);
        }, function (errors) {
            _this.isModalDialogVisible = true;
            errors = JSON.parse(errors._body);
            var results;
            var i = errors.errors.lenth;
            for (var key in errors.errors) {
                results += errors.errors[key].code + "  ";
            }
            _this.modal_message = results;
        });
        // let body = JSON.stringify({ Email, Password, ConfirmPassword });
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        // return this.http.post(this.rootUrl + 'Account/Register', body, options);
    };
    UserService.prototype.login = function (model) {
        var _this = this;
        console.log(model);
        var body = JSON.stringify(model);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Authorization', 'my-auth-token');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.rootUrl + "/api/Login", body, options)
            .subscribe(function (res) {
            _this.isModalDialogVisible = true;
            //this.router.navigate(['/']); 
            _this.modal_message = "Ви авторизовані!";
            setTimeout(function () {
                _this.router.navigate(['/home']);
                _this.isModalDialogVisible = false;
                _this.modal_message = '';
            }, 2000);
        }, function (errors) {
            _this.isModalDialogVisible = true;
            _this.modal_message = "Неправильний пароль або Email.";
        });
        // const model: LoginViewModel = {
        //   Email: user.Email,
        //   Password: user.Password,
        // }
        //return this.http.post(this.rootUrl + 'Account/Login', model);
    };
    UserService.prototype.logout = function () {
        var _this = this;
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.rootUrl + "/api/Logout", body, options)
            .subscribe(function (res) {
            _this.isModalDialogVisible = true;
            _this.modal_message = "Ви вийшли!";
            setTimeout(function () {
                _this.router.navigate(['/login']);
                _this.isModalDialogVisible = false;
            }, 2000);
        });
    };
    UserService.prototype.isLoggedIn = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Authorization', 'my-auth-token');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.rootUrl + "/api/User/isLoggedIn", options)
            .map(function (res) {
            return res.text();
        });
    };
    UserService.prototype.userData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Authorization', 'my-auth-token');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.rootUrl + "/api/user/data", options)
            .map(function (res) {
            return res.json();
        }).map(function (data) {
            return new __WEBPACK_IMPORTED_MODULE_0__models_UserDataViewModel__["a" /* UserDataViewModel */](data.id, data.userName, data.firstName, data.lastName, data.phoneNumber);
        });
    };
    UserService.prototype.convert = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var formData = new FormData();
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
        }
        var uploadReq = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpRequest */]('POST', "api/reader/convert", formData, {
            reportProgress: true,
        });
        this.httpClient.request(uploadReq).subscribe(function (event) {
            _this.isModalDialogVisible = true;
            if (event.type === __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpEventType */].UploadProgress)
                _this.modal_message = (Math.round(100 * event.loaded / event.total)).toString() + "%";
            else if (event.type === __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpEventType */].Response) {
                var res = event.body.toString().replace('"', "").split(",");
                if (res[0] == "Exception") {
                    _this.isModalDialogVisible = true;
                    _this.modal_message = res[1];
                }
                else {
                    _this.isModalDialogVisible = true;
                    _this.data = res;
                    _this.modal_message = "Файл завантажений!";
                }
                console.log(event.body.toString());
            }
        });
    };
    UserService.prototype.ChangeData = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var formData = new FormData();
        for (var _i = 0, files_2 = files; _i < files_2.length; _i++) {
            var file = files_2[_i];
            formData.append(file.name, file);
        }
        var uploadReq = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpRequest */]('POST', "api/reader/changedata", formData, {
            reportProgress: true,
        });
        this.httpClient.request(uploadReq).subscribe(function (event) {
            _this.isModalDialogVisible = true;
            if (event.type === __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpEventType */].UploadProgress)
                _this.modal_message = (Math.round(100 * event.loaded / event.total)).toString() + "%";
            else if (event.type === __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpEventType */].Response) {
                var res = event.body.toString().replace('"', "").split(",");
                if (res[0] == "Exception") {
                    _this.isModalDialogVisible = true;
                    _this.modal_message = res[1];
                }
                else {
                    _this.isModalDialogVisible = true;
                    _this.data = res;
                    _this.modal_message = "Файл завантажений!";
                }
                console.log(event.body.toString());
            }
        });
    };
    UserService.prototype.forgot = function (model) {
        console.log(model);
        // let body = JSON.stringify({ Email, Password, ConfirmPassword });
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        // return this.http.post(this.rootUrl + 'Account/Register', body, options);
    };
    UserService.prototype.reset = function (model) {
        console.log(model);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
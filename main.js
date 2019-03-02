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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image{\r\n  height:40em; background-size:cover; width:auto;\r\n  background-image:url('image.jpg');\r\n  background-position:50% 50%;\r\n  opacity: 0.8;\r\n}\r\n.serveimg{\r\n  height:30em; background-size:cover;\r\n  background-image:url('service.jpg');\r\n  background-position:10% 50%;\r\n  opacity: 0.6;\r\n}\r\n.aboutimg{\r\n  height:30em; background-size:cover;\r\n  background-image:url('about.jpg');\r\n  background-position:10% 50%;\r\n  opacity: 0.7;\r\n}\r\n.contactimg{\r\n  height:25em; background-size:cover;\r\n  background-image:url('contact.jpg');\r\n  background-position:50% 50%;\r\n  opacity: 0.8;\r\n}\r\n.menu{\r\n  font-size: 16px;\r\n}\r\n#navbar{\r\n  float: right;\r\n}\r\n#header a:hover{\r\n  color: black;\r\n  background-color: antiquewhite;\r\n}\r\n#header a{\r\n  font-family: Arial, sans-serif;\r\n  color: azure;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  padding: 0.5em;\r\n  font-weight: 500;\r\n  margin: 0.2em;\r\n}\r\n.col-md-4{\r\n  font-family: Arial, sans-serif;\r\n  text-align: center;\r\n  width: 150px;\r\n  margin: 15px;\r\n  padding: 25px;\r\n  background-color: antiquewhite;\r\n  opacity: 0.9;\r\n}\r\n#contact .form-control {\r\n  display: block;\r\n  width: 400px;\r\n  height: 55px;\r\n  padding: 6px 25px;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  color: #999999;\r\n  background: #f1f1f1;\r\n  background-image: none;\r\n  border: none;\r\n  border-radius: 0px;\r\n}\r\n.btn {\r\n  display: inline-block;\r\n  padding: 6px 12px;\r\n  margin-bottom: 0;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  line-height: 1.42857143;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  touch-action: manipulation;\r\n  cursor: pointer;}\r\n.form-group{\r\n    width: 30%;\r\n    margin: 0 auto;\r\n    margin-bottom: 24px;\r\n}\r\n#about{\r\n  font-family: Arial, sans-serif;\r\n  font-size: 18px;\r\n}\r\n.title{\r\n  font-family: DejaVu Sans Mono, monospace;\r\n  font-size: 65px;\r\n  width: 50px;\r\n  padding-left: 10px;\r\n  color: #fcf2e5;\r\n  font-weight: bold;\r\n  text-shadow: 1px 1px 2px black, 0 0 25px #443b2b, 0 0 5px #0c0b08;\r\n  opacity: 0.8;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div style=\"text-align:center\">\n  <!-- <h1>\n    Welcome to {{ title }}!\n    Welcome\n  </h1> -->\n  <div class=\"image\">\n      <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <header id=\"header\">\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\n        <a href=\"\">HOME</a>\n        <a href=\"#services\">SERVICES</a>\n        <a href=\"#about\">ABOUT US</a>\n        <a href=\"#contact\">CONTACT</a>\n        <input type=\"text\" placeholder=\"Search\">\n      </div>\n    </header>\n    </nav>\n    <div class=\"title\">a2z Solutions...</div>\n  <!-- <app-parent></app-parent> -->\n\n  </div>\n</div>\n\n<div id=\"services\">\n  <h1 style=\"text-align: cneter; font-family: Arial, sans-serif;text-align: center\">\n  OUR SERVICES\n</h1>\n<div class=\"serveimg\">\n<div class=\"container\" style=\"padding: 10px;\">\n  <div class=\"row\">\n    <div class = \"col-md-4\"><h2>Web Design</h2><p>Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque lau dantium, rem aperiam eaque ipsa ab illo inventore veritatis\n      </p></div>\n    <div class = \"col-md-4\">Blog/Forums</div>\n    <div class = \"col-md-4\">CSS/HTML</div>\n  </div>\n</div>\n</div>\n</div>\n\n<div id=\"about\" style=\"text-align: center\">\n    <h1 style=\"text-align: cneter; font-family: Arial, sans-serif;text-align: center\">\n       ABOUT US\n      </h1>\n      <div class=\"aboutimg\">\n        <p class=\"abt\" style=\"padding: 40px;\">Nike might seem like a company that's too big to inspire smaller businesses. You might even wonder if Nike even still has an \"About Us\" page. As a matter of fact, it does, and it hasn't forgotten the company's roots.\n            Nike began on the campus of the University of Oregon by the hand of the college's track coach, Bill Bowerman. And even though he no longer works at the company, one of his beloved quotes still brands the bottom of Nike's \"About Us\" page below: \"If you have a body, you are an athlete.\"\n            This bold sentence, referenced by the asterisked \"Athlete\" in the words right above it, sheds important light on Nike's audience. The brand may be big today, but Nike is all about the rising stars -- who Nike depends on to, according to the rest of its \"About Us\" page, \"expand human potential.\"\n            The takeaway for marketers? Know your audience, and make it obvious to that audience the instant they read about you on your website.</p>\n      </div>\n  </div>\n\n\n  <!----------------------------CONTACT FORM--------------------  -->\n<div id=\"contact\" style=\"text-align: center\">\n    <h1 style=\"text-align: cneter; font-family: Arial, sans-serif;text-align: center\">\n       CONTACT US\n      </h1>\n      <div class=\"contactimg\">\n              <form #addCustomerForm=\"ngForm\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"Name\" placeholder=\"Name\" required\n              [(ngModel)]=\"customer.name\" name=\"name\" #name=\"ngModel\">\n              <!-- <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n              class=\"alert alert-danger\">\n              <div *ngIf=\"name.errors.required\">\n              Name is required.\n            </div>\n            </div> -->\n            </div>\n            <div class=\"form-group\">\n              <input type=\"email\" class=\"form-control\" id=\"Email\" placeholder=\"Email\" required=\"\"\n              [(ngModel)]=\"customer.email\"pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"email\" #email=\"ngModel\">\n              <div *ngIf=\"email.errors &&(email.touched || email.dirty)\" class =\"aler alert-danger\">\n                <div [hidden]=\"!email.errors?.pattern\">\n                  Invalid pattern\n                </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" id=\"Subject\" placeholder=\"Subject\" required=\"\"\n              [(ngModel)]=\"customer.subject\" name=\"subject\" #name=\"ngModel\">\n            </div>\n            <div class=\"form-group\">\n              <textarea class=\"form-control\" rows=\"8\" placeholder=\"Message\" required=\"\"\n              [(ngModel)]=\"customer.message\" name=\"message\" #name=\"ngModel\"></textarea>\n            </div>\n            <div class=\"form-group text-center\">\n                <!-- <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addCustomer(); addCustomerForm.reset()\">Send Message</button> -->\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addCustomer(); addCustomerForm.reset()\" [disabled]=\"!addCustomerForm.form.valid\">Send Message</button>\n            </div>\n        </form>\n        </div>\n    </div>\n"

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
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer */ "./src/app/customer.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.service */ "./src/app/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(customerService
    //     private location: Location
    ) {
        this.customerService = customerService;
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_1__["Customer"]();
        this.submitted = false;
    }
    AppComponent.prototype.newCustomer = function () {
        this.submitted = false;
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_1__["Customer"]();
    };
    AppComponent.prototype.addCustomer = function () {
        this.submitted = true;
        this.save();
    };
    // goBack(): void {
    //   this.location.back();
    // }
    AppComponent.prototype.save = function () {
        console.log(this.customer);
        this.customerService.addCustomer(this.customer)
            .subscribe();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]
            //     private location: Location
        ])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _parent_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parent/popup/popup.component */ "./src/app/parent/popup/popup.component.ts");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parent/parent.component */ "./src/app/parent/parent.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _parent_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__["PopupComponent"],
                _parent_parent_component__WEBPACK_IMPORTED_MODULE_6__["ParentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer.service.ts":
/*!*************************************!*\
  !*** ./src/app/customer.service.ts ***!
  \*************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.customersUrl = 'http://localhost:8080/api/customers'; // URL to web api
    }
    CustomerService.prototype.getCustomers = function () {
        return this.http.get(this.customersUrl);
    };
    CustomerService.prototype.getCustomer = function (id) {
        var url = this.customersUrl + "/" + id;
        return this.http.get(url);
    };
    CustomerService.prototype.addCustomer = function (customer) {
        return this.http.post(this.customersUrl, customer, httpOptions);
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/customer.ts":
/*!*****************************!*\
  !*** ./src/app/customer.ts ***!
  \*****************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/parent/parent.component.css":
/*!*********************************************!*\
  !*** ./src/app/parent/parent.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parent/parent.component.html":
/*!**********************************************!*\
  !*** ./src/app/parent/parent.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: bisque;\">\n<p>\n  parent works!\n</p>\n<app-popup></app-popup>\n</div>\n"

/***/ }),

/***/ "./src/app/parent/parent.component.ts":
/*!********************************************!*\
  !*** ./src/app/parent/parent.component.ts ***!
  \********************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
    }
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parent',
            template: __webpack_require__(/*! ./parent.component.html */ "./src/app/parent/parent.component.html"),
            styles: [__webpack_require__(/*! ./parent.component.css */ "./src/app/parent/parent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/parent/popup/popup.component.css":
/*!**************************************************!*\
  !*** ./src/app/parent/popup/popup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parent/popup/popup.component.html":
/*!***************************************************!*\
  !*** ./src/app/parent/popup/popup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  popup works!\n</p>\n"

/***/ }),

/***/ "./src/app/parent/popup/popup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/parent/popup/popup.component.ts ***!
  \*************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupComponent = /** @class */ (function () {
    function PopupComponent() {
    }
    PopupComponent.prototype.ngOnInit = function () {
    };
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/parent/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/parent/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopupComponent);
    return PopupComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ang\myapp\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
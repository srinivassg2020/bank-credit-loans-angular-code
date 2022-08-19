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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRouting, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouting", function() { return appRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _componenet1_componenet1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componenet1/componenet1.component */ "./src/app/componenet1/componenet1.component.ts");
/* harmony import */ var _componenet2_componenet2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componenet2/componenet2.component */ "./src/app/componenet2/componenet2.component.ts");
/* harmony import */ var _componenet3_componenet3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componenet3/componenet3.component */ "./src/app/componenet3/componenet3.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/first', pathMatch: 'full' },
    { path: 'first', component: _componenet1_componenet1_component__WEBPACK_IMPORTED_MODULE_3__["Componenet1Component"] },
    { path: 'second', component: _componenet2_componenet2_component__WEBPACK_IMPORTED_MODULE_4__["Componenet2Component"] },
    { path: 'third', component: _componenet3_componenet3_component__WEBPACK_IMPORTED_MODULE_5__["Componenet3Component"] },
];
var appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\">\n  <span>Angular Material App With Tab and Routing </span>\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\"></span>\n</mat-toolbar>\n\n<nav mat-tab-nav-bar>\n  <a mat-tab-link\n  *ngFor=\"let link of navLinks\"\n  [routerLink]=\"link.link\"\n  routerLinkActive #rla=\"routerLinkActive\"\n  [active]=\"rla.isActive\">\n {{link.label}}\n</a>\n</nav>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(router) {
        this.router = router;
        this.title = 'angular-material-tab-router';
        this.activeLinkIndex = -1;
        this.navLinks = [
            {
                label: 'CUSTOMERS',
                link: './first',
                index: 0
            }, {
                label: 'LOANS',
                link: './second',
                index: 1
            }, {
                label: 'Third',
                link: './third',
                index: 2
            },
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (res) {
            _this.activeLinkIndex = _this.navLinks.indexOf(_this.navLinks.find(function (tab) { return tab.link === '.' + _this.router.url; }));
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componenet1_componenet1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componenet1/componenet1.component */ "./src/app/componenet1/componenet1.component.ts");
/* harmony import */ var _componenet2_componenet2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componenet2/componenet2.component */ "./src/app/componenet2/componenet2.component.ts");
/* harmony import */ var _componenet3_componenet3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componenet3/componenet3.component */ "./src/app/componenet3/componenet3.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ "./src/app/component/dashboard/dashboard.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _componenet1_componenet1_component__WEBPACK_IMPORTED_MODULE_8__["Componenet1Component"],
                _componenet2_componenet2_component__WEBPACK_IMPORTED_MODULE_9__["Componenet2Component"],
                _componenet3_componenet3_component__WEBPACK_IMPORTED_MODULE_10__["Componenet3Component"],
                _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componenet1/componenet1.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componenet1/componenet1.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXQxL2NvbXBvbmVuZXQxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componenet1/componenet1.component.html":
/*!********************************************************!*\
  !*** ./src/app/componenet1/componenet1.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n      <div class=\"container-fluid\">\n        <a class=\"navbar-brand\" href=\"#\">Customer Management System</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <button class=\"btn btn-outline-success\" data-bs-toggle=\"modal\" data-bs-target=\"#addCustomer\" type=\"submit\">Add Customer</button>\n        </div>\n      </div>\n    </nav>\n\n\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\">CustomerID</th>\n          <th scope=\"col\">CustomerName</th>\n          <th scope=\"col\">Email</th>\n          <th scope=\"col\">Mobile</th>\n          <th scope=\"col\">Address</th>\n          <th scope=\"col\">Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let customer of customerList\">\n          <td>{{customer.custId}}</td>\n          <td>{{customer.customerName}}</td>\n          <td>{{customer.email}}</td>\n          <td>{{customer.mobile}}</td>\n          <td>{{customer.address}}</td>\n          <td>\n              <button type=\"button\" class=\"btn btn-outline-primary me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#editCustomer\" (click)=\"editCustomer(customer)\">Edit</button>\n              <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"deleteCustomer(customer)\">Delete</button>\n          </td>\n\n        </tr>\n\n      </tbody>\n    </table>\n\n    <div class=\"modal fade\" id=\"addCustomer\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add new Customer</h5>\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n          </div>\n          <div class=\"modal-body\">\n\n              <form [formGroup]=\"customerDetail\">\n                  <div class=\"mb-3\">\n                      <label for=\"exampleInputEmail1\" class=\"form-label\">CustomerName </label>\n                      <input type=\"text\" formControlName=\"customerName\" class=\"form-control\" id=\"customerName\" aria-describedby=\"emailHelp\">\n                    </div>\n                  <div class=\"mb-3\">\n                    <label for=\"exampleInputEmail1\" class=\"form-label\">Email </label>\n                    <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\">\n                  </div>\n                  <div class=\"mb-3\">\n                      <label for=\"exampleInputEmail1\" class=\"form-label\">Mobile </label>\n                      <input type=\"text\" formControlName=\"mobile\" class=\"form-control\" id=\"mobile\" aria-describedby=\"emailHelp\">\n                    </div>\n                    <div class=\"mb-3\">\n                      <label for=\"exampleInputEmail1\" class=\"form-label\">Address </label>\n                      <input type=\"text\" formControlName=\"address\" class=\"form-control\" id=\"address\" aria-describedby=\"emailHelp\">\n                    </div>\n                  <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n                      <button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\" (click)=\"addCustomer()\">Add employee</button>\n                    </div>\n              </form>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n      <!-- Edit employee modal -->\n  <div class=\"modal fade\" id=\"editCustomer\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Customer details</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n        </div>\n        <div class=\"modal-body\">\n\n            <form  [formGroup]=\"customerDetail\">\n                <div class=\"mb-3\">\n                    <label for=\"exampleInputEmail1\" class=\"form-label\">CustomerName </label>\n                    <input type=\"text\" formControlName=\"customerName\" class=\"form-control\" id=\"customerName\" aria-describedby=\"emailHelp\">\n                  </div>\n                <div class=\"mb-3\">\n                  <label for=\"exampleInputEmail1\" class=\"form-label\">Email </label>\n                  <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\">\n                </div>\n                <div class=\"mb-3\">\n                    <label for=\"exampleInputEmail1\" class=\"form-label\">Mobile </label>\n                    <input type=\"text\" formControlName=\"mobile\" class=\"form-control\" id=\"mobile\" aria-describedby=\"emailHelp\">\n                  </div>\n                  <div class=\"mb-3\">\n                    <label for=\"exampleInputEmail1\" class=\"form-label\">Address </label>\n                    <input type=\"text\" formControlName=\"address\" class=\"form-control\" id=\"address\" aria-describedby=\"emailHelp\">\n                  </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"updateCustomer()\" data-bs-dismiss=\"modal\">Update </button>\n                  </div>\n              </form>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/componenet1/componenet1.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componenet1/componenet1.component.ts ***!
  \******************************************************/
/*! exports provided: Componenet1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Componenet1Component", function() { return Componenet1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_model_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/customer */ "./src/app/model/customer.ts");
/* harmony import */ var src_app_service_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/customer.service */ "./src/app/service/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Componenet1Component = /** @class */ (function () {
    function Componenet1Component(formBuilder, customerService) {
        this.formBuilder = formBuilder;
        this.customerService = customerService;
        this.custObj = new src_app_model_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.customerList = [];
    }
    Componenet1Component.prototype.ngOnInit = function () {
        this.getAllCustomer();
        this.customerDetail = this.formBuilder.group({
            custId: [''],
            customerName: [''],
            email: [''],
            mobile: [''],
            address: ['']
        });
    };
    Componenet1Component.prototype.addCustomer = function () {
        var _this = this;
        console.log(this.customerDetail);
        //this.custObj.custId = this.customerDetail.value.custId;
        this.custObj.customerName = this.customerDetail.value.customerName;
        this.custObj.email = this.customerDetail.value.email;
        this.custObj.mobile = this.customerDetail.value.mobile;
        this.custObj.address = this.customerDetail.value.address;
        this.customerService.addCustomer(this.custObj).subscribe(function (res) {
            console.log(res);
            _this.getAllCustomer();
        }, function (err) {
            console.log(err);
        });
    };
    Componenet1Component.prototype.getAllCustomer = function () {
        var _this = this;
        this.customerService.getAllCustomer().subscribe(function (res) {
            _this.customerList = res;
        }, function (err) {
            console.log("error while fetching data.");
        });
    };
    Componenet1Component.prototype.editCustomer = function (cust) {
        //this.customerDetail.controls['id'].setValue(cust.custId);
        this.customerDetail.controls['name'].setValue(cust.customerName);
        this.customerDetail.controls['email'].setValue(cust.email);
        this.customerDetail.controls['mobile'].setValue(cust.mobile);
        this.customerDetail.controls['address'].setValue(cust.address);
    };
    Componenet1Component.prototype.updateCustomer = function () {
        var _this = this;
        //this.empObj.id = this.customerDetail.value.id;
        this.custObj.customerName = this.customerDetail.value.customerName;
        this.custObj.email = this.customerDetail.value.email;
        this.custObj.mobile = this.customerDetail.value.mobile;
        this.custObj.address = this.customerDetail.value.address;
        this.customerService.updateCustomer(this.custObj).subscribe(function (res) {
            console.log(res);
            _this.getAllCustomer();
        }, function (err) {
            console.log(err);
        });
    };
    Componenet1Component.prototype.deleteCustomer = function (cust) {
        var _this = this;
        this.customerService.deleteCustomer(cust).subscribe(function (res) {
            console.log(res);
            alert('Customer deleted successfully');
            _this.getAllCustomer();
        }, function (err) {
            console.log(err);
        });
    };
    Componenet1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-componenet1',
            template: __webpack_require__(/*! ./componenet1.component.html */ "./src/app/componenet1/componenet1.component.html"),
            styles: [__webpack_require__(/*! ./componenet1.component.css */ "./src/app/componenet1/componenet1.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_service_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]])
    ], Componenet1Component);
    return Componenet1Component;
}());



/***/ }),

/***/ "./src/app/componenet2/componenet2.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componenet2/componenet2.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXQyL2NvbXBvbmVuZXQyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componenet2/componenet2.component.html":
/*!********************************************************!*\
  !*** ./src/app/componenet2/componenet2.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand\" href=\"#\"> All Credit Loans from the Bank</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <button class=\"btn btn-outline-success\" data-bs-toggle=\"modal\" data-bs-target=\"#addLoan\" type=\"submit\">Add Loan</button>\n      </div>\n    </div>\n  </nav>\n\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Loan ID</th>\n        <th scope=\"col\">CustomerName</th>\n        <th scope=\"col\">LoanType</th>\n        <th scope=\"col\">Currency</th>\n        <th scope=\"col\">loanAmount</th>\n        <th scope=\"col\">loanDueAmount</th>\n        <th scope=\"col\">IntRate</th>\n        <th scope=\"col\">TotalEMIs</th>\n        <th scope=\"col\">PendingEMIs</th>\n        <th scope=\"col\">LoanStartDate</th>\n        <th scope=\"col\">LoanEndDate</th>\n        <th scope=\"col\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let loan of loanList\">\n        <td><a (click)=\"getLoanDetails(loan)\">{{loan.loanId}}</a></td>\n        <td>{{loan.customerId}}</td>\n        <td>{{loan.loanType}}</td>\n        <td>{{loan.currency}}</td>\n        <td>{{loan.loanAmount}}</td>\n        <td>{{loan.loanPendingAmount}}</td>\n        <td>{{loan.interestRate}}</td>\n        <td>{{loan.totalInstalments}}</td>\n        <td>{{loan.remainingInstalments}}</td>\n        <td>{{loan.loanStartDate}}</td>\n        <td>{{loan.loanEndDate}}</td>\n        <td>\n            <button type=\"button\" class=\"btn btn-outline-primary me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#editLoan\" (click)=\"editLoan(loan)\">Edit</button>\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"deleteLoan(loan)\">Delete</button>\n        </td>\n\n      </tr>\n\n    </tbody>\n  </table>\n\n  <div class=\"modal fade\" id=\"addLoan\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Loan</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n        </div>\n        <div class=\"modal-body\">\n\n            <form [formGroup]=\"LoanFormDetail\">\n                <div class=\"mb-3\">\n                    <label for=\"exampleInputEmail1\" class=\"form-label\">CustomerNO </label>\n                    <input type=\"text\" formControlName=\"customerId\" class=\"form-control\" id=\"customerId\" aria-describedby=\"emailHelp\">\n                  </div>\n                <div class=\"mb-3\">\n                  <label for=\"exampleInputEmail1\" class=\"form-label\">LoanType </label>\n                  <input type=\"text\" formControlName=\"loanType\" class=\"form-control\" id=\"loanType\" aria-describedby=\"emailHelp\">\n                </div>\n                <div class=\"mb-3\">\n                    <label for=\"exampleInputEmail1\" class=\"form-label\">Currency </label>\n                    <input type=\"text\" formControlName=\"currency\" class=\"form-control\" id=\"currency\" aria-describedby=\"emailHelp\">\n                  </div>\n                  <div class=\"mb-3\">\n                    <label for=\"exampleInputEmail1\" class=\"form-label\">LoanAmount </label>\n                    <input type=\"text\" formControlName=\"loanAmount\" class=\"form-control\" id=\"loanAmount\" aria-describedby=\"emailHelp\">\n                  </div>\n                  <div class=\"mb-3\">\n                    <label for=\"exampleInputEmail1\" class=\"form-label\">LoanPendingAmount </label>\n                    <input type=\"text\" formControlName=\"loanPendingAmount\" class=\"form-control\" id=\"loanPendingAmount\" aria-describedby=\"emailHelp\">\n                  </div>\n                  <div class=\"mb-3\">\n                    <label for=\"exampleInputEmail1\" class=\"form-label\">InterestRate </label>\n                    <input type=\"text\" formControlName=\"interestRate\" class=\"form-control\" id=\"interestRate\" aria-describedby=\"emailHelp\">\n                  </div>\n                  <div class=\"mb-3\">\n                    <label for=\"exampleInputEmail1\" class=\"form-label\">TotalInstalments </label>\n                    <input type=\"text\" formControlName=\"totalInstalments\" class=\"form-control\" id=\"totalInstalments\" aria-describedby=\"emailHelp\">\n                  </div>\n                  <div class=\"mb-3\">\n                    <label for=\"exampleInputEmail1\" class=\"form-label\">RemainingInstalments </label>\n                    <input type=\"text\" formControlName=\"remainingInstalments\" class=\"form-control\" id=\"remainingInstalments\" aria-describedby=\"emailHelp\">\n                  </div>\n                  <div class=\"mb-3\">\n                    <label for=\"exampleInputEmail1\" class=\"form-label\">LoanStartDate </label>\n                    <input type=\"text\" formControlName=\"loanStartDate\" class=\"form-control\" id=\"loanStartDate\" aria-describedby=\"emailHelp\">\n                  </div>\n                  <div class=\"mb-3\">\n                    <label for=\"exampleInputEmail1\" class=\"form-label\">LoanEndDate </label>\n                    <input type=\"text\" formControlName=\"loanEndDate\" class=\"form-control\" id=\"loanEndDate\" aria-describedby=\"emailHelp\">\n                  </div>\n\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\" (click)=\"addLoan()\">Add Loan</button>\n                  </div>\n            </form>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/componenet2/componenet2.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componenet2/componenet2.component.ts ***!
  \******************************************************/
/*! exports provided: Componenet2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Componenet2Component", function() { return Componenet2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_model_loan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/loan */ "./src/app/model/loan.ts");
/* harmony import */ var src_app_service_loan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/loan.service */ "./src/app/service/loan.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Componenet2Component = /** @class */ (function () {
    function Componenet2Component(formBuilder, loanService) {
        this.formBuilder = formBuilder;
        this.loanService = loanService;
        this.loanObj = new src_app_model_loan__WEBPACK_IMPORTED_MODULE_2__["Loan"]();
        this.loanList = [];
    }
    Componenet2Component.prototype.ngOnInit = function () {
        this.getAllLoan();
        this.LoanFormDetail = this.formBuilder.group({
            loanId: [''],
            customerId: [''],
            loanType: [''],
            currency: [''],
            loanAmount: [''],
            loanPendingAmount: [''],
            interestRate: [''],
            totalInstalments: [''],
            remainingInstalments: [''],
            loanStartDate: [''],
            loanEndDate: ['']
        });
    };
    Componenet2Component.prototype.addLoan = function () {
        var _this = this;
        console.log(this.LoanFormDetail);
        this.loanObj.loanId = this.LoanFormDetail.value.loanId;
        this.loanObj.customerId = this.LoanFormDetail.value.customerId;
        this.loanObj.loanType = this.LoanFormDetail.value.loanType;
        this.loanObj.currency = this.LoanFormDetail.value.currency;
        this.loanObj.loanAmount = this.LoanFormDetail.value.loanAmount;
        this.loanObj.loanPendingAmount = this.LoanFormDetail.value.loanPendingAmount;
        this.loanObj.interestRate = this.LoanFormDetail.value.interestRate;
        this.loanObj.totalInstalments = this.LoanFormDetail.value.totalInstalments;
        this.loanObj.remainingInstalments = this.LoanFormDetail.value.remainingInstalments;
        this.loanObj.loanStartDate = this.LoanFormDetail.value.loanStartDate;
        this.loanObj.loanEndDate = this.LoanFormDetail.value.loanEndDate;
        this.loanService.addLoan(this.loanObj).subscribe(function (res) {
            console.log(res);
            _this.getAllLoan();
        }, function (err) {
            console.log(err);
        });
    };
    Componenet2Component.prototype.getAllLoan = function () {
        var _this = this;
        this.loanService.getAllLoans().subscribe(function (res) {
            _this.loanList = res;
        }, function (err) {
            console.log("error while fetching data.");
        });
    };
    Componenet2Component.prototype.editLoan = function (loan) {
        //this.customerDetail.controls['id'].setValue(cust.custId);
        this.LoanFormDetail.controls['currency'].setValue(loan.currency);
        this.LoanFormDetail.controls['loanPendingAmount'].setValue(loan.loanPendingAmount);
        this.LoanFormDetail.controls['interestRate'].setValue(loan.interestRate);
        this.LoanFormDetail.controls['totalInstalments'].setValue(loan.totalInstalments);
        this.LoanFormDetail.controls['remainingInstalments'].setValue(loan.remainingInstalments);
        this.LoanFormDetail.controls['loanStartDate'].setValue(loan.loanStartDate);
        this.LoanFormDetail.controls['loanEndDate'].setValue(loan.loanEndDate);
    };
    Componenet2Component.prototype.updateLoan = function () {
        var _this = this;
        this.loanObj.currency = this.LoanFormDetail.value.currency;
        this.loanObj.loanPendingAmount = this.LoanFormDetail.value.loanPendingAmount;
        this.loanObj.interestRate = this.LoanFormDetail.value.interestRate;
        this.loanObj.totalInstalments = this.LoanFormDetail.value.totalInstalments;
        this.loanObj.remainingInstalments = this.LoanFormDetail.value.remainingInstalments;
        this.loanObj.loanStartDate = this.LoanFormDetail.value.loanStartDate;
        this.loanObj.loanEndDate = this.LoanFormDetail.value.loanEndDate;
        this.loanService.updateLoan(this.loanObj).subscribe(function (res) {
            console.log(res);
            _this.getAllLoan();
        }, function (err) {
            console.log(err);
        });
    };
    Componenet2Component.prototype.deleteLoan = function (loan) {
        var _this = this;
        this.loanService.deleteLoan(loan).subscribe(function (res) {
            console.log(res);
            alert('Loans deleted successfully');
            _this.getAllLoan();
        }, function (err) {
            console.log(err);
        });
    };
    Componenet2Component.prototype.getLoanDetails = function (loan) {
        var _this = this;
        this.loanService.getAllLoans().subscribe(function (res) {
            console.log(res);
            alert('loanId loanType loanAmount loanInstalmentAmount');
            _this.getAllLoan();
        }, function (err) {
            console.log(err);
        });
    };
    Componenet2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-componenet2',
            template: __webpack_require__(/*! ./componenet2.component.html */ "./src/app/componenet2/componenet2.component.html"),
            styles: [__webpack_require__(/*! ./componenet2.component.css */ "./src/app/componenet2/componenet2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_service_loan_service__WEBPACK_IMPORTED_MODULE_3__["LoanService"]])
    ], Componenet2Component);
    return Componenet2Component;
}());



/***/ }),

/***/ "./src/app/componenet3/componenet3.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componenet3/componenet3.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXQzL2NvbXBvbmVuZXQzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componenet3/componenet3.component.html":
/*!********************************************************!*\
  !*** ./src/app/componenet3/componenet3.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  componenet3 works!\n</p>\n"

/***/ }),

/***/ "./src/app/componenet3/componenet3.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componenet3/componenet3.component.ts ***!
  \******************************************************/
/*! exports provided: Componenet3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Componenet3Component", function() { return Componenet3Component; });
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

var Componenet3Component = /** @class */ (function () {
    function Componenet3Component() {
    }
    Componenet3Component.prototype.ngOnInit = function () {
    };
    Componenet3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-componenet3',
            template: __webpack_require__(/*! ./componenet3.component.html */ "./src/app/componenet3/componenet3.component.html"),
            styles: [__webpack_require__(/*! ./componenet3.component.css */ "./src/app/componenet3/componenet3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Componenet3Component);
    return Componenet3Component;
}());



/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/component/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/component/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/model/customer.ts":
/*!***********************************!*\
  !*** ./src/app/model/customer.ts ***!
  \***********************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
        this.custId = 0;
        this.customerName = '';
        this.email = '';
        this.mobile = '';
        this.address = '';
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/model/loan.ts":
/*!*******************************!*\
  !*** ./src/app/model/loan.ts ***!
  \*******************************/
/*! exports provided: Loan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loan", function() { return Loan; });
var Loan = /** @class */ (function () {
    function Loan() {
        this.loanId = 0;
        this.customerId = 0;
        this.loanType = '';
        this.currency = '';
        this.loanAmount = 0;
        this.loanPendingAmount = 0;
        this.interestRate = '';
        this.totalInstalments = 0;
        this.remainingInstalments = 0;
        this.loanStartDate = '';
        this.loanEndDate = '';
    }
    return Loan;
}());



/***/ }),

/***/ "./src/app/service/customer.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/customer.service.ts ***!
  \*********************************************/
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


var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.addCustURL = 'http://localhost:9191/addCustomer';
        this.getCustURL = 'http://localhost:9191/customers';
        this.updateCustUrl = 'http://localhost:9191/update';
        this.deleteCustUrl = 'http://localhost:9191/delete/{id}';
    }
    CustomerService.prototype.addCustomer = function (cust) {
        return this.http.post(this.addCustURL, cust);
    };
    CustomerService.prototype.getAllCustomer = function () {
        return this.http.get(this.getCustURL);
    };
    CustomerService.prototype.updateCustomer = function (cust) {
        return this.http.put(this.updateCustUrl, cust);
    };
    CustomerService.prototype.deleteCustomer = function (cust) {
        return this.http.delete(this.deleteCustUrl + '/' + cust.custId);
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

/***/ "./src/app/service/loan.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/loan.service.ts ***!
  \*****************************************/
/*! exports provided: LoanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanService", function() { return LoanService; });
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


var LoanService = /** @class */ (function () {
    function LoanService(http) {
        this.http = http;
        this.addLoanURL = 'http://localhost:9191/addLoan';
        this.getLoanURL = 'http://localhost:9191/loans';
        this.getLoanByIdURL = 'http://localhost:9191/loan/{id}';
        this.updateLoanUrl = 'http://localhost:9191/update';
        this.deleteLoanUrl = 'http://localhost:9191/deleteLoan/{id}';
    }
    LoanService.prototype.addLoan = function (loan) {
        return this.http.post(this.addLoanURL, loan);
    };
    LoanService.prototype.getAllLoans = function () {
        return this.http.get(this.getLoanURL);
    };
    LoanService.prototype.updateLoan = function (loan) {
        return this.http.put(this.updateLoanUrl, loan);
    };
    LoanService.prototype.deleteLoan = function (loan) {
        return this.http.delete(this.deleteLoanUrl + '/' + loan.loanId);
    };
    LoanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoanService);
    return LoanService;
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

module.exports = __webpack_require__(/*! /Users/srinivasmekala/Downloads/angular-material-tab-router-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
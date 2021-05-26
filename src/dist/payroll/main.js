(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");





const routes = [
    {
        path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    { path: 'dash', loadChildren: () => __webpack_require__.e(/*! import() | dash-dash-module */ "dash-dash-module").then(__webpack_require__.bind(null, /*! ./dash/dash.module */ "./src/app/dash/dash.module.ts")).then(m => m.DashModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'payroll';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 23, vars: 0, consts: [[1, "wrapper"], ["type", "checkbox", "id", "show-search"], ["type", "checkbox", "id", "show-menu"], ["for", "show-menu", 1, "menu-icon"], [1, "fas", "fa-bars"], [1, "content"], [1, "logo"], ["href", "#"], [1, "links"], ["for", "show-search", 1, "search-icon"], [1, "fas", "fa-search"], ["action", "#", 1, "search-box"], ["type", "text", "placeholder", "Type Something to Search...", "required", ""], ["type", "submit", 1, "go-icon"], [1, "fas", "fa-long-arrow-alt-right"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "PayRoll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    text-decoration: none;\r\n    font-family: 'Poppins', sans-serif;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]{\r\n    background: white;\r\n    position: fixed;\r\n    width: 100%;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    display: flex;\r\n    max-width: calc(100% - 200px);\r\n    margin: 0 auto;\r\n    height: 70px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n  nav[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  nav[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n    margin-left: 80px;\r\n    display: flex;\r\n  }\r\n  .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: blue;\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n  }\r\n  .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    line-height: 70px;\r\n  }\r\n  .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    padding: 9px 17px;\r\n    border-radius: 5px;\r\n    transition: all 0.3s ease;\r\n  }\r\n  .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover{\r\n    background: #323c4e;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    line-height: 70px;\r\n    width: 70px;\r\n    text-align: center;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]   #show-search[_ngcontent-%COMP%]:checked    ~ .search-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::before{\r\n    content: \"\\f00d\";\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    height: 100%;\r\n    max-width: calc(100% - 50px);\r\n    width: 100%;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    transition: all 0.3s ease;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]   #show-search[_ngcontent-%COMP%]:checked    ~ .search-box[_ngcontent-%COMP%]{\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n  }\r\n  .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 17px;\r\n    color: #fff;\r\n    background: #171c24;\r\n    padding: 0 100px 0 15px;\r\n  }\r\n  .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\r\n    color: #f2f2f2;\r\n  }\r\n  .search-box[_ngcontent-%COMP%]   .go-icon[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    line-height: 60px;\r\n    width: 70px;\r\n    background: #171c24;\r\n    border: none;\r\n    outline: none;\r\n    color: #fff;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  \r\n  .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    background: #171c24;\r\n    top: 80px;\r\n    z-index: -1;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n  .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]{\r\n    top: 70px;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transition: all 0.3s ease;\r\n  }\r\n  .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    line-height: 30px;\r\n    border-radius: 0px!important;\r\n  }\r\n  .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    right: calc(-100% + 8px);\r\n  }\r\n  .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    position: relative;\r\n  }\r\n  .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%]{\r\n    top: 0;\r\n  }\r\n  \r\n  @media screen and (max-width: 1250px){\r\n    .wrapper[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\r\n      max-width: 100%;\r\n      padding: 0 20px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n      margin-left: 30px;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n      padding: 8px 13px;\r\n    }\r\n    .wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{\r\n      max-width: calc(100% - 100px);\r\n    }\r\n    .wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n      padding: 0 100px 0 15px;\r\n    }\r\n  }\r\n  @media screen and (max-width: 900px){\r\n    .wrapper[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{\r\n      display: block;\r\n    }\r\n    .wrapper[_ngcontent-%COMP%]   #show-menu[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::before{\r\n      content: \"\\f00d\";\r\n    }\r\n    nav[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n      display: block;\r\n      position: fixed;\r\n      background: #14181f;\r\n      height: 100%;\r\n      width: 100%;\r\n      top: 70px;\r\n      left: -100%;\r\n      margin-left: 0;\r\n      max-width: 350px;\r\n      overflow-y: auto;\r\n      padding-bottom: 100px;\r\n      transition: all 0.3s ease;\r\n    }\r\n    nav[_ngcontent-%COMP%]   #show-menu[_ngcontent-%COMP%]:checked    ~ .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n      left: 0%;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n      margin: 15px 20px;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n      line-height: 40px;\r\n      font-size: 20px;\r\n      display: block;\r\n      padding: 8px 18px;\r\n      cursor: pointer;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.desktop-link[_ngcontent-%COMP%]{\r\n      display: none;\r\n    }\r\n   \r\n    \r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n      position: static;\r\n      opacity: 1;\r\n      visibility: visible;\r\n      background: none;\r\n      max-height: 0px;\r\n      overflow: hidden;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   #show-features[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   #show-services[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   #show-items[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%]{\r\n      max-height: 100vh;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n      margin: 7px 20px;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n      font-size: 18px;\r\n      line-height: 30px;\r\n      border-radius: 5px!important;\r\n    }\r\n  }\r\n  @media screen and (max-width: 400px){\r\n    .wrapper[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\r\n      padding: 0 10px;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n      font-size: 27px;\r\n    }\r\n    .wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{\r\n      max-width: calc(100% - 70px);\r\n    }\r\n    .wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .go-icon[_ngcontent-%COMP%]{\r\n      width: 30px;\r\n      right: 0;\r\n    }\r\n    .wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n      padding-right: 30px;\r\n    }\r\n  }\r\n  .dummy-text[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 100%;\r\n    z-index: -1;\r\n    padding: 0 20px;\r\n    text-align: center;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  .dummy-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    margin: 5px 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTs7SUFFRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7O0lBRUUsbUJBQW1CO0VBQ3JCO0VBQ0E7O0lBRUUsV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFVBQVU7SUFDVixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBRUEsNkJBQTZCO0VBQzdCO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFFQSwwQkFBMEI7RUFDMUI7SUFDRTtNQUNFLGVBQWU7TUFDZixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsNkJBQTZCO0lBQy9CO0lBQ0E7TUFDRSx1QkFBdUI7SUFDekI7RUFDRjtFQUVBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGNBQWM7TUFDZCxlQUFlO01BQ2YsbUJBQW1CO01BQ25CLFlBQVk7TUFDWixXQUFXO01BQ1gsU0FBUztNQUNULFdBQVc7TUFDWCxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixxQkFBcUI7TUFDckIseUJBQXlCO0lBQzNCO0lBQ0E7TUFDRSxRQUFRO0lBQ1Y7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQjtJQUNBOztNQUVFLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7O0lBRUEsbUNBQW1DO0lBQ25DOztNQUVFLGdCQUFnQjtNQUNoQixVQUFVO01BQ1YsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsZ0JBQWdCO0lBQ2xCO0lBQ0E7OztNQUdFLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLDRCQUE0QjtJQUM5QjtFQUNGO0VBRUE7SUFDRTtNQUNFLGVBQWU7SUFDakI7SUFDQTtNQUNFLGVBQWU7SUFDakI7SUFDQTtNQUNFLDRCQUE0QjtJQUM5QjtJQUNBO01BQ0UsV0FBVztNQUNYLFFBQVE7SUFDVjtJQUNBO01BQ0UsbUJBQW1CO0lBQ3JCO0VBQ0Y7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLGVBQWU7SUFDZixhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAud3JhcHBlcntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC53cmFwcGVyIG5hdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgbmF2IC5jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIG5hdiAuY29udGVudCAubGlua3N7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5jb250ZW50IC5sb2dvIGF7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5jb250ZW50IC5saW5rcyBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICB9XHJcbiAgLmNvbnRlbnQgLmxpbmtzIGxpIGEsXHJcbiAgLmNvbnRlbnQgLmxpbmtzIGxpIGxhYmVse1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogOXB4IDE3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuICAuY29udGVudCAubGlua3MgbGkgbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY29udGVudCAubGlua3MgbGkgYTpob3ZlcixcclxuICAuY29udGVudCAubGlua3MgbGkgbGFiZWw6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzIzYzRlO1xyXG4gIH1cclxuICAud3JhcHBlciAuc2VhcmNoLWljb24sXHJcbiAgLndyYXBwZXIgLm1lbnUtaWNvbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLndyYXBwZXIgLm1lbnUtaWNvbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC53cmFwcGVyICNzaG93LXNlYXJjaDpjaGVja2VkIH4gLnNlYXJjaC1pY29uIGk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XHJcbiAgfVxyXG4gICBcclxuICAud3JhcHBlciAuc2VhcmNoLWJveHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIC53cmFwcGVyICNzaG93LXNlYXJjaDpjaGVja2VkIH4gLnNlYXJjaC1ib3h7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgfVxyXG4gIC5zZWFyY2gtYm94IGlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTcxYzI0O1xyXG4gICAgcGFkZGluZzogMCAxMDBweCAwIDE1cHg7XHJcbiAgfVxyXG4gIC5zZWFyY2gtYm94IGlucHV0OjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gIH1cclxuICAuc2VhcmNoLWJveCAuZ28taWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzE3MWMyNDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLndyYXBwZXIgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgIFxyXG4gIC8qIERyb3Bkb3duIE1lbnUgY29kZSBzdGFydCAqL1xyXG4gIC5jb250ZW50IC5saW5rcyB1bHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICMxNzFjMjQ7XHJcbiAgICB0b3A6IDgwcHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5jb250ZW50IC5saW5rcyBsaTpob3ZlciA+IHVse1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuICAuY29udGVudCAubGlua3MgdWwgbGkgYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb250ZW50IC5saW5rcyB1bCB1bHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiBjYWxjKC0xMDAlICsgOHB4KTtcclxuICB9XHJcbiAgLmNvbnRlbnQgLmxpbmtzIHVsIGxpe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuY29udGVudCAubGlua3MgdWwgbGk6aG92ZXIgdWx7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gICBcclxuICAvKiBSZXNwb25zaXZlIGNvZGUgc3RhcnQgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpe1xyXG4gICAgLndyYXBwZXIgbmF2e1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIH1cclxuICAgIG5hdiAuY29udGVudCAubGlua3N7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQgLmxpbmtzIGxpIGF7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxM3B4O1xyXG4gICAgfVxyXG4gICAgLndyYXBwZXIgLnNlYXJjaC1ib3h7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXBwZXIgLnNlYXJjaC1ib3ggaW5wdXR7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTAwcHggMCAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgLndyYXBwZXIgLm1lbnUtaWNvbntcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAud3JhcHBlciAjc2hvdy1tZW51OmNoZWNrZWQgfiAubWVudS1pY29uIGk6OmJlZm9yZXtcclxuICAgICAgY29udGVudDogXCJcXGYwMGRcIjtcclxuICAgIH1cclxuICAgIG5hdiAuY29udGVudCAubGlua3N7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxNDE4MWY7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRvcDogNzBweDtcclxuICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB9XHJcbiAgICBuYXYgI3Nob3ctbWVudTpjaGVja2VkIH4gLmNvbnRlbnQgLmxpbmtze1xyXG4gICAgICBsZWZ0OiAwJTtcclxuICAgIH1cclxuICAgIC5jb250ZW50IC5saW5rcyBsaXtcclxuICAgICAgbWFyZ2luOiAxNXB4IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCAubGlua3MgbGkgYSxcclxuICAgIC5jb250ZW50IC5saW5rcyBsaSBsYWJlbHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxOHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCAubGlua3MgbGkgYS5kZXNrdG9wLWxpbmt7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLyogZHJvcGRvd24gcmVzcG9uc2l2ZSBjb2RlIHN0YXJ0ICovXHJcbiAgICAuY29udGVudCAubGlua3MgdWwsXHJcbiAgICAuY29udGVudCAubGlua3MgdWwgdWx7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5jb250ZW50IC5saW5rcyAjc2hvdy1mZWF0dXJlczpjaGVja2VkIH4gdWwsXHJcbiAgICAuY29udGVudCAubGlua3MgI3Nob3ctc2VydmljZXM6Y2hlY2tlZCB+IHVsLFxyXG4gICAgLmNvbnRlbnQgLmxpbmtzICNzaG93LWl0ZW1zOmNoZWNrZWQgfiB1bHtcclxuICAgICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCAubGlua3MgdWwgbGl7XHJcbiAgICAgIG1hcmdpbjogN3B4IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCAubGlua3MgdWwgbGkgYXtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcclxuICAgIC53cmFwcGVyIG5hdntcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQgLmxvZ28gYXtcclxuICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgfVxyXG4gICAgLndyYXBwZXIgLnNlYXJjaC1ib3h7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XHJcbiAgICB9XHJcbiAgICAud3JhcHBlciAuc2VhcmNoLWJveCAuZ28taWNvbntcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLndyYXBwZXIgLnNlYXJjaC1ib3ggaW5wdXR7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICBcclxuICAuZHVtbXktdGV4dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICAuZHVtbXktdGV4dCBoMntcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class LoginComponent {
    constructor(router) {
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('admin@gmail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('12345', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    ngOnInit() {
        // const signUpButton = document.getElementById('signUp');
        // const signInButton = document.getElementById('signIn');
        // const container = document.getElementById('container');
        // signUpButton.addEventListener('click', () => {
        //     container.classList.add("right-panel-active");
        // });
        // signInButton.addEventListener('click', () => {
        //     container.classList.remove("right-panel-active");
        // });
    }
    onSubmit() {
        if (this.form.value.email == 'admin@gmail.com' && this.form.value.password == '12345') {
            this.router.navigate(['dash/dashboad1']);
        }
        else {
            console.log('fail to log ');
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 51, vars: 1, consts: [[1, "content"], ["id", "container", 1, "container"], [1, "form-container", "sign-up-container"], ["action", ""], [1, "social-container"], ["href", "#", 1, "social"], [1, "fa", "fa-facebook"], [1, "fa", "fa-google"], [1, "fa", "fa-linkedin"], ["type", "text", "name", "name", "placeholder", "Name"], ["type", "email", "name", "email", "placeholder", "Email"], ["type", "password", "name", "password", "placeholder", "Password"], [1, "form-container", "sign-in-container"], [3, "formGroup"], [2, "color", "orangered"], ["type", "email", "formControlName", "email", "name", "email", "placeholder", "Email"], ["type", "password", "formControlName", "password", "name", "password", "placeholder", "Password"], ["href", "#"], [3, "click"], [1, "overlay-container"], [1, "overlay"], ["src", "../../assets/weekend-3583629.png", 2, "width", "500px", "height", "500px", "margin-left", "420px"], [1, "overlay-panel", "overlay-left"], ["id", "signIn", 1, "ghost"], [1, "overlay-panel", "overlay-right"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "or use your email for registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "SignUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "PLEASE SIGN IN HERE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Forgot Your Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_37_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Welcome Back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "To keep connected with us please login with your personal info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');\r\n\r\n*[_ngcontent-%COMP%] {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n    height: 1000px;\r\n    background:skyblue;\r\n    \r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n\tbackground: #7819d8;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n\theight: 100vh;\r\n\tmargin: -20px 0 50px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n\tfont-size: 14px;\r\n\tfont-weight: 100;\r\n\tline-height: 20px;\r\n\tletter-spacing: 0.5px;\r\n\tmargin: 20px 0 30px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n\tfont-size: 12px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n\tcolor: #333;\r\n\tfont-size: 14px;\r\n\ttext-decoration: none;\r\n\tmargin: 15px 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n\tborder-radius: 20px;\r\n\tborder: 1px solid #FF4B2B;\r\n\tbackground-color: #FF4B2B;\r\n\tcolor: #FFFFFF;\r\n\tfont-size: 12px;\r\n\tfont-weight: bold;\r\n\tpadding: 12px 45px;\r\n\tletter-spacing: 1px;\r\n\ttext-transform: uppercase;\r\n\ttransition: transform 80ms ease-in;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:active {\r\n\ttransform: scale(0.95);\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus {\r\n\toutline: none;\r\n}\r\n\r\nbutton.ghost[_ngcontent-%COMP%] {\r\n\tbackground-color: transparent;\r\n\tborder-color: #FFFFFF;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n\tbackground-color: #FFFFFF;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\tpadding: 0 50px;\r\n\theight: 100%;\r\n\ttext-align: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n\tbackground-color: #eee;\r\n\tborder: none;\r\n\tpadding: 12px 15px;\r\n\tmargin: 8px 0;\r\n\twidth: 100%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n\tbackground-color: #fff;\r\n\tborder-radius: 10px;\r\n  \tbox-shadow: 0 14px 28px rgba(0,0,0,0.25), \r\n\t\t\t0 10px 10px rgba(0,0,0,0.22);\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\twidth: 890px;\r\n\tmax-width: 100%;\r\n\tmin-height: 480px;\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\theight: 100%;\r\n\ttransition: all 0.6s ease-in-out;\r\n}\r\n\r\n.sign-in-container[_ngcontent-%COMP%] {\r\n\tleft: 0;\r\n\twidth: 50%;\r\n\tz-index: 2;\r\n}\r\n\r\n.container.right-panel-active[_ngcontent-%COMP%]   .sign-in-container[_ngcontent-%COMP%] {\r\n\ttransform: translateX(100%);\r\n}\r\n\r\n.sign-up-container[_ngcontent-%COMP%] {\r\n\tleft: 0;\r\n\twidth: 50%;\r\n\topacity: 0;\r\n\tz-index: 1;\r\n}\r\n\r\n.container.right-panel-active[_ngcontent-%COMP%]   .sign-up-container[_ngcontent-%COMP%] {\r\n\ttransform: translateX(100%);\r\n\topacity: 1;\r\n\tz-index: 5;\r\n\tanimation: show 0.6s;\r\n}\r\n\r\n@keyframes show {\r\n\t0%, 49.99% {\r\n\t\topacity: 0;\r\n\t\tz-index: 1;\r\n\t}\r\n\t\r\n\t50%, 100% {\r\n\t\topacity: 1;\r\n\t\tz-index: 5;\r\n\t}\r\n}\r\n\r\n.overlay-container[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 50%;\r\n\twidth: 50%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\ttransition: transform 0.6s ease-in-out;\r\n\tz-index: 100;\r\n}\r\n\r\n.container.right-panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]{\r\n\ttransform: translateX(-100%);\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    \r\n\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: 0 0;\r\n\tcolor: #FFFFFF;\r\n\tposition: relative;\r\n\tleft: -100%;\r\n\theight: 100%;\r\n\twidth: 200%;\r\n  \ttransform: translateX(0);\r\n\ttransition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.container.right-panel-active[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n  \ttransform: translateX(50%);\r\n}\r\n\r\n.overlay-panel[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\tpadding: 0 40px;\r\n\ttext-align: center;\r\n\ttop: 0;\r\n\theight: 100%;\r\n\twidth: 50%;\r\n\ttransform: translateX(0);\r\n\ttransition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.overlay-left[_ngcontent-%COMP%] {\r\n\ttransform: translateX(-20%);\r\n}\r\n\r\n.container.right-panel-active[_ngcontent-%COMP%]   .overlay-left[_ngcontent-%COMP%] {\r\n\ttransform: translateX(0);\r\n}\r\n\r\n.overlay-right[_ngcontent-%COMP%] {\r\n\tright: 0;\r\n\ttransform: translateX(0);\r\n}\r\n\r\n.container.right-panel-active[_ngcontent-%COMP%]   .overlay-right[_ngcontent-%COMP%] {\r\n\ttransform: translateX(20%);\r\n}\r\n\r\n.social-container[_ngcontent-%COMP%] {\r\n\tmargin: 20px 0;\r\n}\r\n\r\n.social-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #DDDDDD;\r\n\tborder-radius: 50%;\r\n\tdisplay: inline-flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin: 0 5px;\r\n\theight: 40px;\r\n\twidth: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EseUVBQXlFOztBQUV6RTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7O0FBRXRCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixxQ0FBcUM7Q0FDckMsYUFBYTtDQUNiLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLDZCQUE2QjtDQUM3QixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLFdBQVc7QUFDWjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixtQkFBbUI7R0FDakI7K0JBQzRCO0NBQzlCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFlBQVk7Q0FDWixnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsVUFBVTtDQUNWLFVBQVU7QUFDWDs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLE9BQU87Q0FDUCxVQUFVO0NBQ1YsVUFBVTtDQUNWLFVBQVU7QUFDWDs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQixVQUFVO0NBQ1YsVUFBVTtDQUNWLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDO0VBQ0MsVUFBVTtFQUNWLFVBQVU7Q0FDWDs7Q0FFQTtFQUNDLFVBQVU7RUFDVixVQUFVO0NBQ1g7QUFDRDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sU0FBUztDQUNULFVBQVU7Q0FDVixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLHNDQUFzQztDQUN0QyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBRUE7SUFDSSx1REFBdUQ7QUFDM0QsK0JBQStCO0NBQzlCLDRCQUE0QjtDQUM1QixzQkFBc0I7Q0FDdEIsd0JBQXdCO0NBQ3hCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixXQUFXO0dBQ1Qsd0JBQXdCO0NBQzFCLHNDQUFzQztBQUN2Qzs7QUFFQTtHQUNHLDBCQUEwQjtBQUM3Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sWUFBWTtDQUNaLFVBQVU7Q0FDVix3QkFBd0I7Q0FDeEIsc0NBQXNDO0FBQ3ZDOztBQUVBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsUUFBUTtDQUNSLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLFlBQVk7Q0FDWixXQUFXO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsODAwJyk7XHJcblxyXG4qIHtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIGhlaWdodDogMTAwMHB4O1xyXG4gICAgYmFja2dyb3VuZDpza3libHVlO1xyXG4gICAgXHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGJhY2tncm91bmQ6ICM3ODE5ZDg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdG1hcmdpbjogLTIwcHggMCA1MHB4O1xyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMiB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblx0bWFyZ2luOiAyMHB4IDAgMzBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5hIHtcclxuXHRjb2xvcjogIzMzMztcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI0ZGNEIyQjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY0QjJCO1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRwYWRkaW5nOiAxMnB4IDQ1cHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUge1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLmdob3N0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0cGFkZGluZzogMCA1MHB4O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRwYWRkaW5nOiAxMnB4IDE1cHg7XHJcblx0bWFyZ2luOiA4cHggMDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIFx0Ym94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgXHJcblx0XHRcdDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0d2lkdGg6IDg5MHB4O1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRtaW4taGVpZ2h0OiA0ODBweDtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNpZ24taW4tY29udGFpbmVyIHtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0ei1pbmRleDogMjtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24taW4tY29udGFpbmVyIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbn1cclxuXHJcbi5zaWduLXVwLWNvbnRhaW5lciB7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogNTAlO1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24tdXAtY29udGFpbmVyIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcblx0b3BhY2l0eTogMTtcclxuXHR6LWluZGV4OiA1O1xyXG5cdGFuaW1hdGlvbjogc2hvdyAwLjZzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNob3cge1xyXG5cdDAlLCA0OS45OSUge1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHRcdHotaW5kZXg6IDE7XHJcblx0fVxyXG5cdFxyXG5cdDUwJSwgMTAwJSB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0ei1pbmRleDogNTtcclxuXHR9XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxuXHR6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lcntcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy5qcGcpOyAqL1xyXG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlOyAqL1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGxlZnQ6IC0xMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMjAwJTtcclxuICBcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXkge1xyXG4gIFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbn1cclxuXHJcbi5vdmVybGF5LXBhbmVsIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0cGFkZGluZzogMCA0MHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0b3A6IDA7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZlcmxheS1sZWZ0IHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWxlZnQge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLm92ZXJsYXktcmlnaHQge1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmlnaHQge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xyXG59XHJcblxyXG4uc29jaWFsLWNvbnRhaW5lciB7XHJcblx0bWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5zb2NpYWwtY29udGFpbmVyIGEge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNEREREREQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAwIDVweDtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0d2lkdGg6IDQwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ankit\Vdoit project\payroll\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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

/***/ "./src/app/algorithms/algorithms.component.css":
/*!*****************************************************!*\
  !*** ./src/app/algorithms/algorithms.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-action {\r\n    width: 90%;\r\n    border-radius: 99px;\r\n}\r\n.hide {\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtcy9hbGdvcml0aG1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWxnb3JpdGhtcy9hbGdvcml0aG1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1hY3Rpb24ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbn1cclxuLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/algorithms/algorithms.component.html":
/*!******************************************************!*\
  !*** ./src/app/algorithms/algorithms.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column col-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 col-mx-auto\">\n      <div class=\"container\">\n        <div class=\"columns\">\n          <div class=\"column\">\n            <div class=\"text-center\">\n              <a class=\"btn btn-primary edit-action\" [class.hide]=\"editing\">新增</a>\n              <a class=\"btn edit-action\" [class.hide]=\"!editing || jsonMode\" (click)=\"switchEditMode(true)\">JSON 模式</a>\n              <a class=\"btn edit-action\" [class.hide]=\"!editing || !jsonMode\" (click)=\"switchEditMode(false)\">表單模式</a>\n              <a class=\"btn edit-action mt-1\" [class.hide]=\"editing\" (click)=\"startEdit()\">編輯</a>\n              <a class=\"btn btn-success edit-action mt-1\" [class.hide]=\"!editing\" (click)=\"finishEdit()\">完成</a>\n              <a class=\"btn btn-error edit-action mt-1\" [class.hide]=\"!editing\" (click)=\"discardEdit()\">放棄</a>\n            </div>\n            <ul class=\"menu menu-nav\">\n              <li class=\"menu-item\"><a href=\"#\">演算法1</a></li>\n              <li class=\"menu-item\"><a href=\"#\">演算法2</a></li>\n              <li class=\"menu-item\"><a href=\"#\">演算法3</a></li>\n            </ul>\n          </div>\n          <div class=\"divider-vert\"></div>\n          <div class=\"column col-9\">\n            <app-algorithm-form [editing]=\"editing\" #form></app-algorithm-form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal modal-sm\" [class.active]=\"discardPrompt\">\n  <a class=\"modal-overlay\" aria-label=\"close\"></a>\n  <div class=\"modal-container text-center\">\n    <div class=\"modal-body\">\n      <p>你確定要放棄本次編輯嗎？</p>\n      <button class=\"btn btn-primary\" (click)=\"discardEditConfirm()\">確定</button>\n      <button class=\"btn mx-1\" (click)=\"discardEditCancel()\">返回</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/algorithms/algorithms.component.ts":
/*!****************************************************!*\
  !*** ./src/app/algorithms/algorithms.component.ts ***!
  \****************************************************/
/*! exports provided: AlgorithmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmsComponent", function() { return AlgorithmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "./src/app/algorithms/form/form.component.ts");



var AlgorithmsComponent = /** @class */ (function () {
    function AlgorithmsComponent() {
        this.editing = false;
        this.discardPrompt = false;
        this.jsonMode = false;
    }
    AlgorithmsComponent.prototype.ngOnInit = function () {
    };
    AlgorithmsComponent.prototype.startEdit = function () {
        this.editing = true;
    };
    AlgorithmsComponent.prototype.finishEdit = function () {
        if (!this.form.switchEditMode(false))
            return;
        this.jsonMode = false;
        this.editing = false;
    };
    AlgorithmsComponent.prototype.discardEdit = function () {
        this.discardPrompt = true;
    };
    AlgorithmsComponent.prototype.discardEditCancel = function () {
        this.discardPrompt = false;
    };
    AlgorithmsComponent.prototype.discardEditConfirm = function () {
        this.discardPrompt = false;
        this.editing = false;
        this.jsonMode = false;
        // TODO: recovery data
        this.form.recoveryForm();
        this.form.switchEditMode(false);
    };
    AlgorithmsComponent.prototype.switchEditMode = function (json) {
        if (json === void 0) { json = false; }
        if (!this.form.switchEditMode(json))
            return;
        this.jsonMode = json;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _form_form_component__WEBPACK_IMPORTED_MODULE_2__["AlgorithmFormComponent"])
    ], AlgorithmsComponent.prototype, "form", void 0);
    AlgorithmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-algorithms',
            template: __webpack_require__(/*! ./algorithms.component.html */ "./src/app/algorithms/algorithms.component.html"),
            styles: [__webpack_require__(/*! ./algorithms.component.css */ "./src/app/algorithms/algorithms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlgorithmsComponent);
    return AlgorithmsComponent;
}());



/***/ }),

/***/ "./src/app/algorithms/form/form.component.css":
/*!****************************************************!*\
  !*** ./src/app/algorithms/form/form.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\r\n    background: white;\r\n}\r\n.tile {\r\n    margin: .75em 0;\r\n}\r\n.panel-title > input {\r\n    font-size: 1.4rem;\r\n    border: none;\r\n}\r\n.hide {\r\n    display: none;\r\n}\r\n.json-textarea {\r\n    height: calc(70vh - 150px);\r\n}\r\n.author-input {\r\n    border: none;\r\n    background: none;\r\n}\r\n.json-error {\r\n    position: relative;\r\n    width: 80%;\r\n    left: 10%;\r\n    top: -100%;\r\n    -webkit-transform: translateY(-33%);\r\n            transform: translateY(-33%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtcy9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9hbGdvcml0aG1zL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi50aWxlIHtcclxuICAgIG1hcmdpbjogLjc1ZW0gMDtcclxufVxyXG4ucGFuZWwtdGl0bGUgPiBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uanNvbi10ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoNzB2aCAtIDE1MHB4KTtcclxufVxyXG5cclxuLmF1dGhvci1pbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uanNvbi1lcnJvciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgdG9wOiAtMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzMlKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/algorithms/form/form.component.html":
/*!*****************************************************!*\
  !*** ./src/app/algorithms/form/form.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel bg-light\" [class.hide]=\"jsonMode\">\n  <div class=\"panel-header text-center\">\n    <div class=\"panel-title h3\" [class.hide]=\"editing\">{{ algorithmData.abbreviation }}</div>\n    <div class=\"panel-title\" [class.hide]=\"!editing\">\n      <input type=\"text\" class=\"form-input text-center\" [(ngModel)]=\"algorithmData.abbreviation\" placeholder=\"簡稱\">\n    </div>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"tile tile-centered\">\n      <div class=\"tile-content\">\n        <div class=\"tile-title text-bold\">全稱</div>\n        <div class=\"tile-subtitle\" [class.hide]=\"editing\">{{ algorithmData.fullTitle }}</div>\n        <div class=\"tile-subtitle\" [class.hide]=\"!editing\">\n          <input type=\"text\" class=\"form-input\" [(ngModel)]=\"algorithmData.fullTitle\">\n        </div>\n      </div>\n    </div>\n    <div class=\"tile tile-centered\">\n      <div class=\"tile-content\">\n        <div class=\"tile-title text-bold\">類別</div>\n        <div class=\"tile-subtitle\" [class.hide]=\"editing\">{{ algorithmData.category }}</div>\n        <div class=\"tile-subtitle\" [class.hide]=\"!editing\">\n          <input type=\"text\" class=\"form-input\" [(ngModel)]=\"algorithmData.category\">\n        </div>\n      </div>\n    </div>\n    <div class=\"tile tile-centered\">\n      <div class=\"tile-content\">\n        <div class=\"tile-title text-bold\">作者</div>\n        <div class=\"tile-subtitle\">\n          <span class=\"chip\" *ngFor=\"let author of algorithmData.authors\">\n            {{ author }}\n            <a aria-label=\"close\" role=\"button\" class=\"btn btn-clear\" [class.hide]=\"!editing\"\n              (click)=\"deleteAuthor(author)\"></a>\n          </span>\n          <span class=\"chip\" [class.hide]=\"!newAuthorInput || !editing\">\n            <form (submit)=\"newAuthorSubmit()\">\n              <input class=\"author-input\" autofocus type=\"text\" [(ngModel)]=\"newAuthorName\"\n                [ngModelOptions]=\"{standalone: true}\" #authorInput>\n            </form>\n          </span>\n        </div>\n      </div>\n      <div class=\"tile-action\" [class.hide]=\"!editing\">\n        <button class=\"btn btn-link btn-action\" (click)=\"newAuthor()\">\n          <i class=\"icon icon-plus\"></i>\n        </button>\n      </div>\n    </div>\n    <div class=\"tile tile-centered\">\n      <div class=\"tile-content\">\n        <div class=\"tile-title text-bold\">功能</div>\n        <div class=\"tile-subtitle\" [class.hide]=\"editing\">\n          {{ algorithmData.features }}\n        </div>\n        <div class=\"tile-subtitle\">\n          <textarea class=\"form-input\" [class.hide]=\"!editing\" [(ngModel)]=\"algorithmData.features\"></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"panel bg-light\" [class.hide]=\"!jsonMode\">\n  <div class=\"panel-header\"></div>\n  <div class=\"panel-body\">\n    <div class=\"form-group\">\n      <textarea [(ngModel)]=\"algorithmJSON\" class=\"form-input json-textarea\">\n    </textarea>\n    </div>\n  </div>\n  <div class=\"panel-footer\"></div>\n</div>\n<div class=\"toast toast-error json-error\" [class.hide]=\"!jsonErrorToast\">\n  <button class=\"btn btn-clear float-right\" (click)=\"jsonErrorToast=false\"></button>\n  JSON 格式有誤，請檢查後重試。（或者 <a (click)=\"recoveryForm()\">重設</a>）\n</div>"

/***/ }),

/***/ "./src/app/algorithms/form/form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/algorithms/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: AlgorithmFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmFormComponent", function() { return AlgorithmFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlgorithmFormComponent = /** @class */ (function () {
    function AlgorithmFormComponent() {
        this.jsonMode = false;
        this.newAuthorInput = false;
        this.newAuthorName = '';
        this.algorithmData = {
            abbreviation: 'ADSA',
            fullTitle: 'Adversarial Domain Separation and Adaptation',
            category: '類別一',
            authors: ['Jen-Tzung Chien', 'Yu-Hsiu Chen'],
            features: 'Domain Adaptation, Pattern Classification',
        };
        this.jsonErrorToast = false;
    }
    AlgorithmFormComponent.prototype.ngOnInit = function () {
    };
    AlgorithmFormComponent.prototype.switchEditMode = function (json) {
        if (!json) {
            try {
                this.algorithmData = JSON.parse(this.algorithmJSON);
            }
            catch (_a) {
                this.jsonErrorToast = true;
                return false;
            }
        }
        else {
            this.algorithmJSON = JSON.stringify(this.algorithmData, null, 4);
        }
        this.jsonMode = json;
        return true;
    };
    AlgorithmFormComponent.prototype.deleteAuthor = function (author) {
        this.algorithmData.authors.splice(this.algorithmData.authors.indexOf(author), 1);
    };
    AlgorithmFormComponent.prototype.newAuthor = function () {
        this.newAuthorInput = true;
    };
    AlgorithmFormComponent.prototype.newAuthorSubmit = function () {
        this.newAuthorInput = false;
        this.algorithmData.authors.push(this.newAuthorName);
        this.newAuthorName = '';
        this.authorInput.nativeElement.focus();
        return false;
    };
    AlgorithmFormComponent.prototype.recoveryForm = function () {
        this.jsonErrorToast = false;
        this.algorithmJSON = JSON.stringify(this.algorithmData, null, 4);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AlgorithmFormComponent.prototype, "editing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('authorInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AlgorithmFormComponent.prototype, "authorInput", void 0);
    AlgorithmFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-algorithm-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/algorithms/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/algorithms/form/form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlgorithmFormComponent);
    return AlgorithmFormComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithms/algorithms.component */ "./src/app/algorithms/algorithms.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _news_post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/post/post.component */ "./src/app/news/post/post.component.ts");









var routes = [
    { path: 'algorithms', component: _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_4__["AlgorithmsComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"] },
    { path: 'news/:post', component: _news_post_post_component__WEBPACK_IMPORTED_MODULE_8__["NewsPostComponent"] },
    { path: 'tasks', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: '', redirectTo: 'news', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "app-footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _news_info_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news/info/info.component */ "./src/app/news/info/info.component.ts");
/* harmony import */ var _tasks_form_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tasks/form/form.component */ "./src/app/tasks/form/form.component.ts");
/* harmony import */ var _tasks_info_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tasks/info/info.component */ "./src/app/tasks/info/info.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./algorithms/algorithms.component */ "./src/app/algorithms/algorithms.component.ts");
/* harmony import */ var _news_post_post_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./news/post/post.component */ "./src/app/news/post/post.component.ts");
/* harmony import */ var _tasks_item_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tasks/item/item.component */ "./src/app/tasks/item/item.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _algorithms_form_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./algorithms/form/form.component */ "./src/app/algorithms/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"],
                _news_post_post_component__WEBPACK_IMPORTED_MODULE_14__["NewsPostComponent"],
                _news_info_info_component__WEBPACK_IMPORTED_MODULE_9__["NewsInfoComponent"],
                _tasks_form_form_component__WEBPACK_IMPORTED_MODULE_10__["FormComponent"],
                _tasks_info_info_component__WEBPACK_IMPORTED_MODULE_11__["InfoComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_12__["TasksComponent"],
                _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_13__["AlgorithmsComponent"],
                _algorithms_form_form_component__WEBPACK_IMPORTED_MODULE_17__["AlgorithmFormComponent"],
                _tasks_item_item_component__WEBPACK_IMPORTED_MODULE_15__["ItemComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns bg-dark\">\n    <div class=\"column col-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 col-mx-auto text-center text-light\">\n      <p>&copy; Taitk 2019</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-section {\r\n    align-items: end;\r\n}\r\n.container {\r\n    margin-bottom: 18px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLXNlY3Rpb24ge1xyXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns bg-dark\">\n    <div class=\"column col-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 col-mx-auto\">\n      <header class=\"navbar\">\n        <section class=\"navbar-section\">\n          <a routerLink=\"\" class=\"navbar-brand mr-2\"><img src=\"https://taitk.org/app-assets/images/logo5.png\" alt=\"TAITK Server\"></a>\n        </section>\n        <section class=\"navbar-section\">\n          <a routerLink=\"login\" class=\"btn btn-link text-light\">登入</a>\n        </section>\n      </header>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: auto;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n            transform: translateX(-50%) translateY(-50%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxvREFBNEM7WUFBNUMsNENBQTRDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"form-group\">\n      <label for=\"username\" class=\"form-label\">帳號</label>\n      <input type=\"text\" class=\"form-input\" id=\"username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\" class=\"form-label\">密碼</label>\n      <input type=\"text\" class=\"form-input\" id=\"password\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"remeber\" class=\"form-checkbox\">\n        <input type=\"checkbox\" id=\"remeber\"><i class=\"form-icon\"></i>記住我\n      </label>\n    </div>\n  </div>\n  <div class=\"card-footer text-center\">\n    <button class=\"btn btn-primary\">登入</button>\n    <div class=\"divider\" data-content=\"OR\"></div>\n\n  </div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/news/info/info.component.css":
/*!**********************************************!*\
  !*** ./src/app/news/info/info.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-image img {\r\n    height: 180px;\r\n    width: 100%;\r\n}\r\n.card-body {\r\n    max-height: 130px;\r\n    overflow: hidden;\r\n}\r\n.overflow-cover {\r\n    position: relative;\r\n    margin-top: -30px;\r\n    height: 30px;\r\n    background: linear-gradient(\r\n    rgb(255, 255, 255, 0) 15%,\r\n    rgba(255, 255, 255, 1) 100%\r\n    );\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9pbmZvL2luZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaOzs7S0FHQztBQUNMIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9pbmZvL2luZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWltYWdlIGltZyB7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcmQtYm9keSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm92ZXJmbG93LWNvdmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiKDI1NSwgMjU1LCAyNTUsIDApIDE1JSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJVxyXG4gICAgKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/news/info/info.component.html":
/*!***********************************************!*\
  !*** ./src/app/news/info/info.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n  <div class=\"column text-right\">\n    <span style=\"font-size: 2em; margin-bottom: -2px;\">{{ post.date.getMonth()+1 }}/{{ post.date.getDate() }}</span>\n    <br>{{ post.date.getFullYear() }}\n  </div>\n  <div class=\"divider-vert\"></div>\n  <div class=\"column col-9\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"card-title h3\"><a [routerLink]=\"'/news/' + this.post['id']\" class=\"text-dark\">{{ post.title }}</a></div>\n      </div>\n      <div class=\"card-image\">\n        <img [src]=\"post.image\" alt=\"example\" class=\"img-fit-cover\">\n      </div>\n      <div class=\"card-body\">\n        <p>\n          {{ post.content }}\n        </p>\n      </div>\n      <div class=\"overflow-cover\">&nbsp;</div>\n      <div class=\"card-footer text-right\"><a [routerLink]=\"'/news/' + this.post['id']\" class=\"btn btn-link\">繼續閱讀</a></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/news/info/info.component.ts":
/*!*********************************************!*\
  !*** ./src/app/news/info/info.component.ts ***!
  \*********************************************/
/*! exports provided: NewsInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsInfoComponent", function() { return NewsInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsInfoComponent = /** @class */ (function () {
    function NewsInfoComponent() {
    }
    NewsInfoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewsInfoComponent.prototype, "post", void 0);
    NewsInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/news/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/news/info/info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsInfoComponent);
    return NewsInfoComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divider::after {\r\n    background: none;\r\n}\r\n.news-items {\r\n    margin-bottom: 1.2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmlkZXI6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLm5ld3MtaXRlbXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column col-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 col-mx-auto\">\n      <div class=\"container news-items\" *ngFor=\"let post of posts;\">\n        <app-news-info [post]=\"post\"></app-news-info>\n      </div>\n    </div>\n    <div class=\"column col-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 col-mx-auto\">\n      <div class=\"divider text-center\" data-content=\"已到底部\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
        this.posts = [
            {
                id: 1,
                title: '範例文章標題X',
                date: new Date(),
                author: {
                    name: '某人',
                    link: '//fb.com/yu.chen.142857'
                },
                image: '//i.imgur.com/mM3xVtJ.jpg',
                content: '人受獎之不中呢樓異地安學手決樣是里斯股結樂是會確過的在時法動童獎科子改團去滿親到。助天友：了的於？遠有下回定下病東作進起正類說案理政再黨下問的：是有工歡響望來員形夫然臺得地值；打頭親地線苦大當境給中；在政嚴母己算前質你活他可突、區始你、相收去後黑關因多海定直生銷成軍。北他明也臉高跟女興不於，下然排統調觀我力的因真十或上行少動學手化運象理才園裡清在聽接打文事葉好不看一父文經。將為馬面書而功次們！紅後中而文女會根體統動以己兒步人緊當水弟男的速商地舞我過出但時知就子。灣對名有質極也為球他市然怎如近能樣施。界用體汽好但各，安門傳，個身成他，府常遠空機公農員下也白福響！任上活由去大年發環元精結信山廣人提出手團些辦以校當屋他一北裝德出課球北但完參的門都火政你我除的種是種康！去日時年務出……黃類然發子早……都車兒溫；過視得，動樣分灣整國家生。'
            },
            {
                id: 1,
                title: '範例文章標題2',
                date: new Date(),
                author: {
                    name: '某人',
                    link: '//fb.com/yu.chen.142857'
                },
                image: '//i.imgur.com/mM3xVtJ.jpg',
                content: '人受獎之不中呢樓異地安學手決樣是里斯股結樂是會確過的在時法動童獎科子改團去滿親到。助天友：了的於？遠有下回定下病東作進起正類說案理政再黨下問的：是有工歡響望來員形夫然臺得地值；打頭親地線苦大當境給中；在政嚴母己算前質你活他可突、區始你、相收去後黑關因多海定直生銷成軍。北他明也臉高跟女興不於，下然排統調觀我力的因真十或上行少動學手化運象理才園裡清在聽接打文事葉好不看一父文經。將為馬面書而功次們！紅後中而文女會根體統動以己兒步人緊當水弟男的速商地舞我過出但時知就子。灣對名有質極也為球他市然怎如近能樣施。界用體汽好但各，安門傳，個身成他，府常遠空機公農員下也白福響！任上活由去大年發環元精結信山廣人提出手團些辦以校當屋他一北裝德出課球北但完參的門都火政你我除的種是種康！去日時年務出……黃類然發子早……都車兒溫；過視得，動樣分灣整國家生。'
            }
        ];
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/news/post/post.component.css":
/*!**********************************************!*\
  !*** ./src/app/news/post/post.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    padding: 1em 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9uZXdzL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/news/post/post.component.html":
/*!***********************************************!*\
  !*** ./src/app/news/post/post.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column col-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 col-mx-auto\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"card-title h3\">範例文章標題</div>\n          <div class=\"card-subtitle\">2019/03/10 19:36:41 by <a href=\"#\">某人</a></div>\n        </div>\n        <div class=\"card-image\">\n          <img src=\"//i.imgur.com/mM3xVtJ.jpg\" alt=\"example\" class=\"img-responsive\">\n        </div>\n        <div class=\"card-body\">\n          <p>\n            人受獎之不中呢樓異地安學手決樣是里斯股結樂是會確過的在時法動童獎科子改團去滿親到。助天友：了的於？遠有下回定下病東作進起正類說案理政再黨下問的：是有工歡響望來員形夫然臺得地值；打頭親地線苦大當境給中；在政嚴母己算前質你活他可突、區始你、相收去後黑關因多海定直生銷成軍。北他明也臉高跟女興不於，下然排統調觀我力的因真十或上行少動學手化運象理才園裡清在聽接打文事葉好不看一父文經。將為馬面書而功次們！紅後中而文女會根體統動以己兒步人緊當水弟男的速商地舞我過出但時知就子。灣對名有質極也為球他市然怎如近能樣施。界用體汽好但各，安門傳，個身成他，府常遠空機公農員下也白福響！任上活由去大年發環元精結信山廣人提出手團些辦以校當屋他一北裝德出課球北但完參的門都火政你我除的種是種康！去日時年務出……黃類然發子早……都車兒溫；過視得，動樣分灣整國家生。\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/news/post/post.component.ts":
/*!*********************************************!*\
  !*** ./src/app/news/post/post.component.ts ***!
  \*********************************************/
/*! exports provided: NewsPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPostComponent", function() { return NewsPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsPostComponent = /** @class */ (function () {
    function NewsPostComponent() {
    }
    NewsPostComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewsPostComponent.prototype, "post", void 0);
    NewsPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/news/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/news/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsPostComponent);
    return NewsPostComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/tasks/form/form.component.css":
/*!***********************************************!*\
  !*** ./src/app/tasks/form/form.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tasks/form/form.component.html":
/*!************************************************!*\
  !*** ./src/app/tasks/form/form.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  form works!\n</p>\n"

/***/ }),

/***/ "./src/app/tasks/form/form.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tasks/form/form.component.ts ***!
  \**********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/tasks/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/tasks/form/form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/tasks/info/info.component.css":
/*!***********************************************!*\
  !*** ./src/app/tasks/info/info.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL2luZm8vaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tasks/info/info.component.html":
/*!************************************************!*\
  !*** ./src/app/tasks/info/info.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  info works!\n</p>\n"

/***/ }),

/***/ "./src/app/tasks/info/info.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tasks/info/info.component.ts ***!
  \**********************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/tasks/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/tasks/info/info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/tasks/item/item.component.css":
/*!***********************************************!*\
  !*** ./src/app/tasks/item/item.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tasks/item/item.component.html":
/*!************************************************!*\
  !*** ./src/app/tasks/item/item.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  item works!\n</p>\n"

/***/ }),

/***/ "./src/app/tasks/item/item.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tasks/item/item.component.ts ***!
  \**********************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/tasks/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/tasks/item/item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.css":
/*!*******************************************!*\
  !*** ./src/app/tasks/tasks.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tasks works!\n</p>\n"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
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

module.exports = __webpack_require__(/*! D:\taitk\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
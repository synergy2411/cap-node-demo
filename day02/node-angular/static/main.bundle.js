webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/lazy/lazy.module": [
		"./src/app/lazy/lazy.module.ts",
		"lazy.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <ul class=\"list-unstyled nav navbar-nav navbar-default\">\n    <li><a [routerLink]=\"['login']\">Login</a></li>\n    <li><a [routerLink]=\"['signup']\">Sign Up</a></li>\n    <li><a [routerLink]=\"['pipe']\">Pipe</a></li>\n    <li><a [routerLink]=\"['directive']\">Directives</a></li>\n    <li><a [routerLink]=\"['product', 5, 'iPhone']\">Product</a></li>\n    <li><a [routerLink]=\"['product', 3, 'Samsung']\">Product</a></li>\n    <li><a [routerLink]=\"['employee']\">Employee</a></li>\n    <li><a [routerLink]=\"['lazy']\">Lazy</a></li>\n  </ul>\n</div>\n\n<div class=\"container\">\n\n  <p>App Work!</p>\n\n  <router-outlet></router-outlet>\n\n  <!-- <app-model-form-demo></app-model-form-demo> -->\n\n\n  <!-- <app-template-form-demo></app-template-form-demo> -->\n\n\n  <!-- \n  <app-pipe-demo></app-pipe-demo> -->\n\n  <!-- <app-built-in-demo></app-built-in-demo> -->\n\n  <!-- <app-life-cycle-demo [title]=\"title\"></app-life-cycle-demo> -->\n\n\n\n\n\n\n\n  <input type=\"text\" [(ngModel)]=\"title\">\n  <app-users [title]=\"title\">\n    <h2>Some heading</h2>\n  </app-users>\n  <!-- <app-users></app-users>\n  <app-users></app-users> -->\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__employee_employee_module__ = __webpack_require__("./src/app/employee/employee.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_gaurd_service__ = __webpack_require__("./src/app/services/login-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__life_cycle_demo_life_cycle_demo_component__ = __webpack_require__("./src/app/life-cycle-demo/life-cycle-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directive_demo_built_in_demo_built_in_demo_component__ = __webpack_require__("./src/app/directive-demo/built-in-demo/built-in-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directive_demo_highlight_directive__ = __webpack_require__("./src/app/directive-demo/highlight.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_demo_pipe_demo_pipe_demo_component__ = __webpack_require__("./src/app/pipes-demo/pipe-demo/pipe-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_demo_country_code_pipe__ = __webpack_require__("./src/app/pipes-demo/country-code.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_demo_filter_pipe__ = __webpack_require__("./src/app/pipes-demo/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__template_form_demo_template_form_demo_component__ = __webpack_require__("./src/app/template-form-demo/template-form-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__model_form_demo_model_form_demo_component__ = __webpack_require__("./src/app/model-form-demo/model-form-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__product_overview_overview_component__ = __webpack_require__("./src/app/product/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__product_specification_specification_component__ = __webpack_require__("./src/app/product/specification/specification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_8__life_cycle_demo_life_cycle_demo_component__["a" /* LifeCycleDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__directive_demo_built_in_demo_built_in_demo_component__["a" /* BuiltInDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__directive_demo_highlight_directive__["a" /* HighlightDirective */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_demo_pipe_demo_pipe_demo_component__["a" /* PipeDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_demo_country_code_pipe__["a" /* CountryCodePipe */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_demo_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_14__template_form_demo_template_form_demo_component__["a" /* TemplateFormDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__model_form_demo_model_form_demo_component__["a" /* ModelFormDemoComponent */], __WEBPACK_IMPORTED_MODULE_20__product_product_component__["a" /* ProductComponent */], __WEBPACK_IMPORTED_MODULE_21__product_overview_overview_component__["a" /* OverviewComponent */], __WEBPACK_IMPORTED_MODULE_22__product_specification_specification_component__["a" /* SpecificationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* APP_ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_0__employee_employee_module__["a" /* EmployeeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__services_login_gaurd_service__["a" /* LoginGaurdService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__employee_employee_list_employee_list_component__ = __webpack_require__("./src/app/employee/employee-list/employee-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_overview_overview_component__ = __webpack_require__("./src/app/product/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directive_demo_built_in_demo_built_in_demo_component__ = __webpack_require__("./src/app/directive-demo/built-in-demo/built-in-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_demo_pipe_demo_pipe_demo_component__ = __webpack_require__("./src/app/pipes-demo/pipe-demo/pipe-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_form_demo_template_form_demo_component__ = __webpack_require__("./src/app/template-form-demo/template-form-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_form_demo_model_form_demo_component__ = __webpack_require__("./src/app/model-form-demo/model-form-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_specification_specification_component__ = __webpack_require__("./src/app/product/specification/specification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_login_gaurd_service__ = __webpack_require__("./src/app/services/login-gaurd.service.ts");









var APP_ROUTES = [{
        path: "",
        redirectTo: "login",
        pathMatch: 'full'
    }, {
        path: "login",
        component: __WEBPACK_IMPORTED_MODULE_4__template_form_demo_template_form_demo_component__["a" /* TemplateFormDemoComponent */]
    }, {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_5__model_form_demo_model_form_demo_component__["a" /* ModelFormDemoComponent */]
    }, {
        path: 'pipe',
        component: __WEBPACK_IMPORTED_MODULE_3__pipes_demo_pipe_demo_pipe_demo_component__["a" /* PipeDemoComponent */]
    }, {
        path: "directive",
        component: __WEBPACK_IMPORTED_MODULE_2__directive_demo_built_in_demo_built_in_demo_component__["a" /* BuiltInDemoComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_login_gaurd_service__["a" /* LoginGaurdService */]]
    }, {
        path: 'product/:id/:name',
        component: __WEBPACK_IMPORTED_MODULE_6__product_product_component__["a" /* ProductComponent */],
        children: [
            {
                path: "overview",
                component: __WEBPACK_IMPORTED_MODULE_1__product_overview_overview_component__["a" /* OverviewComponent */]
            }, {
                path: "spec",
                component: __WEBPACK_IMPORTED_MODULE_7__product_specification_specification_component__["a" /* SpecificationComponent */]
            }
        ]
    }, {
        path: "employee",
        component: __WEBPACK_IMPORTED_MODULE_0__employee_employee_list_employee_list_component__["a" /* EmployeeListComponent */]
    }, {
        path: 'lazy',
        loadChildren: "app/lazy/lazy.module#LazyModule"
    }, {
        path: "**",
        redirectTo: "login",
        pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/data/mocks.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_DATA; });
var USER_DATA = [{
        firstName: "Bill",
        lastName: "Gates",
        dob: new Date("Dec 21, 1965"),
        income: 50000,
        company: "Microsoft",
        isWorking: true,
        vote: 120,
        image: './assets/images/bill.jpg'
    }, {
        firstName: "Steve",
        lastName: "Jobs",
        dob: new Date("Jan 21, 1965"),
        income: 0,
        company: "Apple",
        isWorking: false,
        vote: 100,
        image: './assets/images/steve.png'
    }, {
        firstName: "Tim B",
        lastName: "Lee",
        dob: new Date("Feb 3, 1965"),
        income: 40000,
        company: "World Wide",
        isWorking: true,
        vote: 180,
        image: './assets/images/tim.jpg'
    }];


/***/ }),

/***/ "./src/app/directive-demo/built-in-demo/built-in-demo.component.css":
/***/ (function(module, exports) {

module.exports = ".feature{\r\n    border : 2px green dashed;\r\n}\r\n"

/***/ }),

/***/ "./src/app/directive-demo/built-in-demo/built-in-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 appHighlight [defaultColor]=\"myColor\">Test</h3>\n  <ul class=\"list-unstyled\">\n    <li class=\"well\" *ngFor=\"let user of users; index as i; first as isFirst; last as isLast; even as isEven; odd as isOdd;\">\n      <div class=\"row\">\n        <div class=\"col-md-2 col-sm-3 col-xs-2\">\n          {{i}}\n          Is this Even : {{ isEven }}\n          <img [src]=\"user.image\" class=\"img-circle img-responsive\">\n          <button (click)=\"moreInfo(user)\" class=\"btn btn-info btn-sm\">More Info</button>\n        </div>\n        <div class=\"col-md-9 col-sm-8 col-xs-10\">\n          <h1 [ngStyle]=\"{'color' : 'red'}\"> {{user.firstName | uppercase }} {{ user.lastName | uppercase }} </h1>\n          <!-- <p>Income : {{ user.income }} </p> -->\n          <p appHighlight [defaultColor]=\"'yellow'\" *ngIf=\"user.isWorking; else ElseTemplate\">Income : <span [innerHTML]=\"user.income | currency : 'INR'\"></span> </p>\n          \n          <!-- <ng-template [ngIf]=\"user.isWorking\">\n             <p> Income : <span [innerHTML]=\"user.income\"></span> </p>\n          </ng-template> -->\n\n          <p [ngStyle]=\"{'font-weight' : 'bold', 'border-bottom' : borderBottom}\">\n              Date of Birth : {{ user.dob | date : 'MM/dd/yyyy' }}</p>\n\n          Total Votes : {{ user.vote }}\n          <input type=\"number\" [value]=\"user.vote\" (change)=\"user.vote = $event.target.value\">\n          <input type=\"number\" [(ngModel)]=\"user.vote\">\n        </div>\n\n        <ng-template #ElseTemplate>\n         <p [ngClass]=\"{'feature' : isOdd}\"> {{user.firstName}} is not Working now!</p>\n        </ng-template>\n\n      </div>\n    </li>\n  </ul>\n\n<!--   \n  <div ngSwitch=\"2\">\n    <div *ngSwitchCase=\"'1'\">One </div>\n    <div *ngSwitchCase=\"'2'\">Two</div>\n    <div *ngSwitchCase=\"'3'\">Three</div>\n    <div *ngSwitchDefault>Default</div>\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/directive-demo/built-in-demo/built-in-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuiltInDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_mocks__ = __webpack_require__("./src/app/data/mocks.ts");
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


var BuiltInDemoComponent = /** @class */ (function () {
    function BuiltInDemoComponent() {
        this.myColor = "green";
        this.borderBottom = "1px blue solid";
    }
    BuiltInDemoComponent.prototype.ngOnInit = function () {
        this.users = __WEBPACK_IMPORTED_MODULE_0__data_mocks__["a" /* USER_DATA */];
    };
    BuiltInDemoComponent.prototype.moreInfo = function (user) { };
    BuiltInDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-built-in-demo',
            template: __webpack_require__("./src/app/directive-demo/built-in-demo/built-in-demo.component.html"),
            styles: [__webpack_require__("./src/app/directive-demo/built-in-demo/built-in-demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BuiltInDemoComponent);
    return BuiltInDemoComponent;
}());



/***/ }),

/***/ "./src/app/directive-demo/highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(elementRef) {
        this.elementRef = elementRef;
        console.log(this.elementRef.nativeElement);
        // this.elementRef.nativeElement.style.backgroundColor = "blue";
    }
    HighlightDirective.prototype.mouseenter = function () {
        // console.log('Mouse Entered!');
        this.bgColor = this.defultColor;
    };
    HighlightDirective.prototype.mouseleave = function () {
        this.bgColor = "transparent";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('defaultColor'),
        __metadata("design:type", String)
    ], HighlightDirective.prototype, "defultColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('style.backgroundColor'),
        __metadata("design:type", Object)
    ], HighlightDirective.prototype, "bgColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("mouseenter"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "mouseenter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("mouseleave"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "mouseleave", null);
    HighlightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/employee/employee-list/employee-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employee/employee-list/employee-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Hello There!</h3>"

/***/ }),

/***/ "./src/app/employee/employee-list/employee-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent() {
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
    };
    EmployeeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employee-list',
            template: __webpack_require__("./src/app/employee/employee-list/employee-list.component.html"),
            styles: [__webpack_require__("./src/app/employee/employee-list/employee-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_list_employee_list_component__ = __webpack_require__("./src/app/employee/employee-list/employee-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__employee_list_employee_list_component__["a" /* EmployeeListComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__employee_list_employee_list_component__["a" /* EmployeeListComponent */]]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "./src/app/life-cycle-demo/life-cycle-demo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/life-cycle-demo/life-cycle-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  life-cycle-demo works!\n</p>\n"

/***/ }),

/***/ "./src/app/life-cycle-demo/life-cycle-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifeCycleDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LifeCycleDemoComponent = /** @class */ (function () {
    function LifeCycleDemoComponent() {
        console.log("constructor");
        // let obj = new UsersComponent();
    }
    LifeCycleDemoComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
    };
    LifeCycleDemoComponent.prototype.ngDoCheck = function () {
        console.log("ngDoCheck");
    };
    LifeCycleDemoComponent.prototype.ngOnChanges = function (change) {
        console.log("ngOnChanges", change);
    };
    LifeCycleDemoComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked");
    };
    LifeCycleDemoComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit");
    };
    LifeCycleDemoComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    LifeCycleDemoComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked");
    };
    LifeCycleDemoComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", String)
    ], LifeCycleDemoComponent.prototype, "title", void 0);
    LifeCycleDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-life-cycle-demo',
            template: __webpack_require__("./src/app/life-cycle-demo/life-cycle-demo.component.html"),
            styles: [__webpack_require__("./src/app/life-cycle-demo/life-cycle-demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LifeCycleDemoComponent);
    return LifeCycleDemoComponent;
}());



/***/ }),

/***/ "./src/app/model-form-demo/model-form-demo.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-touched.ng-invalid[type=\"text\"]{\r\n    border-bottom: 2px red solid;\r\n}\r\n\r\n.ng-touched.ng-valid[type=\"text\"]{\r\n    border-bottom: 2px green solid;\r\n}\r\n\r\n.ng-touched.ng-invalid[type=\"password\"]{\r\n    border-bottom: 2px red solid;\r\n}\r\n\r\n.ng-touched.ng-valid[type=\"password\"]{\r\n    border-bottom: 2px green solid;\r\n}"

/***/ }),

/***/ "./src/app/model-form-demo/model-form-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form [formGroup]=\"signupForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username : </label>\n        <input type=\"text\" name=\"username\" \n          class=\"form-control\" [formControl]=\"username\">\n        <div [hidden]=\"username.valid || username.untouched\">\n          Some Problem with Username happened!\n          <div [hidden]=\"!username.hasError('required')\">\n            Username is mandatory!\n          </div>\n          <div [hidden]=\"!username.hasError('minlength')\">\n            Username should be at least 5 characters long!\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password : </label>\n        <input type=\"password\" name=\"password\" \n          class=\"form-control\" [formControl]=\"password\">\n      </div>\n      <button class=\"btn btn-primary btn-lg\" (click)=\"signup()\">Sign up</button>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/model-form-demo/model-form-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelFormDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModelFormDemoComponent = /** @class */ (function () {
    function ModelFormDemoComponent(fb) {
        this.fb = fb;
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(5)
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required
        ]);
        this.signupForm = this.fb.group({
            username: this.username,
            password: this.password
        });
    }
    ModelFormDemoComponent.prototype.signup = function () {
        console.log(this.signupForm);
    };
    ModelFormDemoComponent.prototype.ngOnInit = function () {
    };
    ModelFormDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-model-form-demo',
            template: __webpack_require__("./src/app/model-form-demo/model-form-demo.component.html"),
            styles: [__webpack_require__("./src/app/model-form-demo/model-form-demo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ModelFormDemoComponent);
    return ModelFormDemoComponent;
}());



/***/ }),

/***/ "./src/app/pipes-demo/country-code.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryCodePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CountryCodePipe = /** @class */ (function () {
    function CountryCodePipe() {
    }
    CountryCodePipe.prototype.transform = function (value, args) {
        if (args == "US")
            return "+01 " + value;
        else if (args == "IND") {
            return "+91 " + value;
        }
        else {
            return value;
        }
    };
    CountryCodePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'countryCode'
        })
    ], CountryCodePipe);
    return CountryCodePipe;
}());



/***/ }),

/***/ "./src/app/pipes-demo/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filteredStatus, status) {
        if (value.length == 0 || filteredStatus == "") {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var todo = value_1[_i];
            if (todo[status] == filteredStatus) {
                resultArray.push(todo);
            }
        }
        return resultArray;
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes-demo/pipe-demo/pipe-demo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pipes-demo/pipe-demo/pipe-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>\n    Contact Number : {{ contact_no | countryCode : 'IND'}}\n  </h2>\n  <h3>\n    Data : {{ data | async | uppercase }}\n  </h3>\n</div>\n\n<input type=\"text\" [(ngModel)]=\"filteredStatus\">\n<button classs=\"btn btn-defualt\" (click)=\"addNewTodo()\">\n  Add New Todo\n</button>\n<div class=\"container\">\n  <ul class=\"list-group\">\n    <li *ngFor=\"let todo of todos | filter :filteredStatus:'status' \" class=\"list-group-item\">\n        {{ todo.label }}\n        <span class=\"badge\">{{ todo.status}}</span>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/pipes-demo/pipe-demo/pipe-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PipeDemoComponent = /** @class */ (function () {
    function PipeDemoComponent() {
        this.filteredStatus = "";
        this.todos = [{
                label: "Some Work",
                status: "done"
            }, {
                label: "Some Work",
                status: "pending"
            }, {
                label: "Some Work",
                status: "done"
            }, {
                label: "Some Work",
                status: "pending"
            }];
        this.data = new Promise(function (resolve, reject) {
            setTimeout(function () {
                return resolve("Here the data arrives!");
            }, 2000);
        });
        this.contact_no = 987654321;
    }
    PipeDemoComponent.prototype.addNewTodo = function () {
        this.todos.push({ label: "New Work", status: 'pending' });
    };
    PipeDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pipe-demo',
            template: __webpack_require__("./src/app/pipes-demo/pipe-demo/pipe-demo.component.html"),
            styles: [__webpack_require__("./src/app/pipes-demo/pipe-demo/pipe-demo.component.css")]
        })
    ], PipeDemoComponent);
    return PipeDemoComponent;
}());



/***/ }),

/***/ "./src/app/product/overview/overview.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  overview works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-overview',
            template: __webpack_require__("./src/app/product/overview/overview.component.html"),
            styles: [__webpack_require__("./src/app/product/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{ name }} ID # {{ id }}  </h2>\n\n<ul class=\"list-unstyled\">\n  <li><a [routerLink]=\"['overview']\">Overview</a></li>\n  <li><a [routerLink]=\"['spec']\">Specification</a></li>\n\n</ul>\n\n<router-outlet></router-outlet>\n\n<button (click)=\"gotoHome()\" class=\"badge\">Go To Home</button>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        // this.id = this.route.snapshot.params['id'];
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.name = params['name'];
        });
    }
    ProductComponent.prototype.gotoHome = function () {
        this.router.navigate(['/login']);
    };
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/product/specification/specification.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/specification/specification.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  specification works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/specification/specification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpecificationComponent = /** @class */ (function () {
    function SpecificationComponent() {
    }
    SpecificationComponent.prototype.ngOnInit = function () {
    };
    SpecificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-specification',
            template: __webpack_require__("./src/app/product/specification/specification.component.html"),
            styles: [__webpack_require__("./src/app/product/specification/specification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpecificationComponent);
    return SpecificationComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_mocks__ = __webpack_require__("./src/app/data/mocks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
    }
    DataService.prototype.getUserData = function () {
        return __WEBPACK_IMPORTED_MODULE_0__data_mocks__["a" /* USER_DATA */];
    };
    DataService.prototype.getUserJsonData = function () {
        // All Http Calls (GET, POST, DELETE, PUT) will return Observables
        return this.http.get("./assets/data/user-data.json")
            .map(function (response) { return response.json(); });
        // .subscribe(data=>{
        //   console.log(data);
        // })
    };
    DataService.prototype.getUserJsonDatafromClient = function () {
        this.httpClient.get("https://ng-cap-demo.firebaseio.com/users.json")
            .subscribe(function (data) { console.log(data); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/login-gaurd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGaurdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginGaurdService = /** @class */ (function () {
    function LoginGaurdService() {
    }
    LoginGaurdService.prototype.canActivate = function () {
        return false;
    };
    LoginGaurdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoginGaurdService);
    return LoginGaurdService;
}());



/***/ }),

/***/ "./src/app/template-form-demo/template-form-demo.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-touched.ng-invalid[type=\"text\"]{\r\n    border-bottom: 2px red solid;\r\n}\r\n\r\n.ng-touched.ng-valid[type=\"text\"]{\r\n    border-bottom: 2px green solid;\r\n}\r\n\r\n.ng-touched.ng-invalid[type=\"password\"]{\r\n    border-bottom: 2px red solid;\r\n}\r\n\r\n.ng-touched.ng-valid[type=\"password\"]{\r\n    border-bottom: 2px green solid;\r\n}"

/***/ }),

/***/ "./src/app/template-form-demo/template-form-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <form (ngSubmit)=\"login(myForm)\" #myForm=\"ngForm\"> -->\n  <form #myForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username : </label>\n      <input type=\"text\" name=\"username\" \n        class=\"form-control\"\n        ngModel required minlength=\"5\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password : </label>\n      <input type=\"password\" name=\"password\" \n        class=\"form-control\"\n        ngModel required (blur)=\"submitForm(myForm)\">\n    </div>\n    <!-- <button class=\"btn btn-primary btn-lg\"  \n      type=\"submit\"\n      [disabled]=\"!myForm.valid\">Login</button> -->\n    <button class=\"btn btn-primary btn-lg\" (click)=\"signup()\">Sign up</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/template-form-demo/template-form-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateFormDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateFormDemoComponent = /** @class */ (function () {
    function TemplateFormDemoComponent() {
    }
    TemplateFormDemoComponent.prototype.submitForm = function (myForm) {
        console.log("Submitted.");
    };
    TemplateFormDemoComponent.prototype.login = function (myForm) {
        // console.log(myForm);
        console.log("Username : " + myForm.value.username);
        console.log("Password : " + myForm.value.password);
    };
    TemplateFormDemoComponent.prototype.signup = function () {
    };
    TemplateFormDemoComponent.prototype.ngOnInit = function () {
    };
    TemplateFormDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-template-form-demo',
            template: __webpack_require__("./src/app/template-form-demo/template-form-demo.component.html"),
            styles: [__webpack_require__("./src/app/template-form-demo/template-form-demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TemplateFormDemoComponent);
    return TemplateFormDemoComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>Welcome to {{title}}!</h1>\r\n    <ng-content></ng-content>\r\n    <ul class=\"list-unstyled\">\r\n        <li class=\"well\" *ngFor=\"let user of users\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2 col-sm-3 col-xs-2\">\r\n                    <img [src]=\"user.image\" class=\"img-circle img-responsive\">\r\n                    <button (click)=\"moreInfo(user)\" class=\"btn btn-info btn-sm\">More Info</button>\r\n                </div>\r\n                <div class=\"col-md-9 col-sm-8 col-xs-10\">\r\n                    <h1> {{user.firstName}} {{ user.lastName }} </h1>\r\n                    <!-- <p>Income : {{ user.income }} </p> -->\r\n                    <p>Income : <span [innerHTML]=\"user.income\"></span> </p>\r\n                    <p>Date of Birth : {{ user.dob }}</p>\r\n                    \r\n                    Total Votes : {{ user.vote }}\r\n                    <input type=\"number\" [value]=\"user.vote\" (change)=\"user.vote = $event.target.value\">\r\n                    <input type=\"number\" [(ngModel)]=\"user.vote\">\r\n                </div>\r\n                \r\n            </div>\r\n\r\n\r\n\r\n        </li>\r\n    </ul>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
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


// import { USER_DATA } from './../data/mocks';
var UsersComponent = /** @class */ (function () {
    function UsersComponent(ds) {
        this.ds = ds;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //    this.users = USER_DATA;
        // this.users = this.ds.getUserData(); 
        this.ds.getUserJsonDatafromClient();
        this.ds.getUserJsonData()
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    UsersComponent.prototype.moreInfo = function (user) {
        alert(user.firstName + " is working with " + user.company + "!");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", String)
    ], UsersComponent.prototype, "title", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "app-users",
            template: __webpack_require__("./src/app/users/users.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_data_service__["a" /* DataService */]])
    ], UsersComponent);
    return UsersComponent;
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
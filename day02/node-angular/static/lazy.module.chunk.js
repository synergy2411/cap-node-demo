webpackJsonp(["lazy.module"],{

/***/ "./src/app/lazy/i-am-lazy/i-am-lazy.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazy/i-am-lazy/i-am-lazy.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  i-am-lazy works!\n</p>\n"

/***/ }),

/***/ "./src/app/lazy/i-am-lazy/i-am-lazy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IAmLazyComponent; });
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

var IAmLazyComponent = /** @class */ (function () {
    function IAmLazyComponent() {
    }
    IAmLazyComponent.prototype.ngOnInit = function () {
    };
    IAmLazyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-i-am-lazy',
            template: __webpack_require__("./src/app/lazy/i-am-lazy/i-am-lazy.component.html"),
            styles: [__webpack_require__("./src/app/lazy/i-am-lazy/i-am-lazy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IAmLazyComponent);
    return IAmLazyComponent;
}());



/***/ }),

/***/ "./src/app/lazy/lazy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModule", function() { return LazyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i_am_lazy_i_am_lazy_component__ = __webpack_require__("./src/app/lazy/i-am-lazy/i-am-lazy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lazy_routes__ = __webpack_require__("./src/app/lazy/lazy.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LazyModule = /** @class */ (function () {
    function LazyModule() {
    }
    LazyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__lazy_routes__["a" /* LAZY_ROUTES */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__i_am_lazy_i_am_lazy_component__["a" /* IAmLazyComponent */]]
        })
    ], LazyModule);
    return LazyModule;
}());



/***/ }),

/***/ "./src/app/lazy/lazy.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LAZY_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i_am_lazy_i_am_lazy_component__ = __webpack_require__("./src/app/lazy/i-am-lazy/i-am-lazy.component.ts");

var LAZY_ROUTES = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_0__i_am_lazy_i_am_lazy_component__["a" /* IAmLazyComponent */]
    }
];


/***/ })

});
//# sourceMappingURL=lazy.module.chunk.js.map
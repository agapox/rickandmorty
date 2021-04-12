(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-views-module"],{

/***/ "S+CQ":
/*!***********************************************!*\
  !*** ./src/app/views/views-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ViewsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsRoutingModule", function() { return ViewsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'challenge'
    },
    {
        path: 'challenge',
        loadChildren: () => __webpack_require__.e(/*! import() | challenge-challenge-module */ "challenge-challenge-module").then(__webpack_require__.bind(null, /*! ./challenge/challenge.module */ "ydzq")).then(m => m.ChallengeModule)
    },
    {
        path: 'characters',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "XWda")).then(m => m.HomeModule)
    }
];
class ViewsRoutingModule {
}
ViewsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ViewsRoutingModule });
ViewsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ViewsRoutingModule_Factory(t) { return new (t || ViewsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xzpJ":
/*!***************************************!*\
  !*** ./src/app/views/views.module.ts ***!
  \***************************************/
/*! exports provided: ViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsModule", function() { return ViewsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _views_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views-routing.module */ "S+CQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



class ViewsModule {
}
ViewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ViewsModule });
ViewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ViewsModule_Factory(t) { return new (t || ViewsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _views_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ViewsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _views_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewsRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=views-views-module.js.map
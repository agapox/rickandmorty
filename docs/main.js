(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\agapox\projects\portafolio\rickandmorty\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



const _c0 = function (a0) { return { "mobile-show": a0 }; };
const _c1 = function (a0) { return { "show": a0 }; };
const _c2 = function () { return ["/"]; };
const _c3 = function () { return ["characters"]; };
class HeaderComponent {
    constructor() {
        this.title = 'Rick and Morty';
        this.showMenuMobile = false;
    }
    ngOnInit() {
    }
    toggleMobileMenu() {
        this.showMenuMobile = !this.showMenuMobile;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 26, vars: 11, consts: [["id", "header", 3, "ngClass"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["viewBox", "0 0 378 376", "fill", "#4696bf"], ["type", "text/css"], ["id", "MyGradient"], ["offset", "5%", "stop-color", "#43b4ce"], ["offset", "95%", "stop-color", "#79b069"], ["d", "M92.2871 10.1699C90.3999 25.8964 84.8432 45.0828 82.1173 45.0828C81.3834 45.0828 76.3509 42.986 71.0038 40.4697C62.4067 36.4856 49.3012 32.5016 44.4784 32.5016C43.2202 32.5016 43.8493 34.3888 46.8898 40.5746C51.5029 49.9057 55.6966 64.4789 55.1724 69.5114L54.8579 72.8664L45.422 73.6004C17.9529 75.6972 5.05709 76.9554 5.05709 77.4796C5.05709 77.899 9.67022 82.8266 15.3318 88.593C25.921 99.2871 33.6795 110.715 33.1552 114.699C32.9455 116.167 27.5985 120.57 16.5899 128.224C7.67819 134.41 0.234278 139.966 0.0245907 140.491C-0.185097 141.015 0.968185 141.749 2.64569 142.168C13.864 144.58 18.6868 146.152 22.6709 148.459C28.1227 151.709 33.7843 156.532 36.6151 160.516L38.712 163.451L26.9694 175.089C17.1141 184.944 15.4366 186.937 16.6948 188.09C17.5335 188.824 23.8241 191.235 30.7438 193.332C37.6635 195.429 43.7445 197.631 44.2687 198.155C44.7929 198.679 43.9541 204.026 41.9621 211.365C40.1798 218.18 39.0265 224.156 39.341 224.68C39.8652 225.624 57.1645 224.785 59.9952 223.737C62.6163 222.793 63.6648 225.309 64.3987 233.592C64.8181 238.415 65.4471 242.504 65.8665 242.713C66.7052 243.238 78.4478 238.205 78.4478 237.366C78.4478 237.052 77.0848 234.85 75.4073 232.439C70.5845 225.414 67.3343 218.18 64.2938 208.115C62.826 202.873 60.6243 195.848 59.5759 192.388C58.4226 188.929 57.2693 184.211 57.0596 181.904C55.5918 170.791 55.3821 166.702 56.4306 166.702C56.9548 166.702 57.479 168.484 57.479 170.581C57.5838 175.299 59.8904 187.88 61.4631 192.388C62.0921 194.066 64.0842 200.252 65.8665 206.018C70.1651 219.543 76.3509 231.705 81.6979 237.052C84.2142 239.568 89.666 243.133 94.9082 245.544L103.715 249.633L103.401 253.512L103.086 257.392L79.7059 265.15L56.3257 273.013L53.2852 282.973C51.6077 288.53 46.8898 304.991 42.696 319.669C38.5023 334.242 34.5182 346.823 33.8891 347.452C33.2601 348.081 31.3729 353.743 29.8002 360.138C28.2276 366.429 26.7598 372.51 26.4452 373.454C25.921 375.236 30.1148 375.341 104.554 375.341C179.098 375.341 183.292 375.236 183.292 373.454C183.292 372.51 178.364 367.058 172.283 361.397C166.202 355.735 161.274 350.493 161.274 349.654C161.274 348.92 165.049 345.041 169.557 341.057C181.09 331.202 181.195 330.573 176.477 318.515C168.509 298.281 151.419 267.037 145.128 261.166C143.136 259.279 142.402 257.496 142.402 254.666C142.402 250.367 143.346 249.319 148.693 247.536C154.145 245.754 159.492 241.665 163.162 236.528C166.097 232.439 167.355 231.705 175.428 229.189C180.356 227.616 184.34 225.938 184.34 225.519C184.34 224.995 182.453 222.269 180.146 219.543C175.638 214.091 174.799 210.212 177.84 209.268C178.783 208.954 182.453 208.429 185.913 208.01C189.372 207.696 192.518 207.171 192.937 206.857C193.881 206.437 188.534 191.55 187.276 191.025C186.856 190.816 186.437 189.872 186.437 188.824C186.437 187.566 187.905 186.622 191.679 185.678C198.179 184.001 213.696 176.557 213.696 175.194C213.696 174.565 211.704 173.097 209.293 171.839C195.873 165.024 184.969 157.161 187.171 155.903C187.59 155.693 191.469 154.435 195.663 153.177C199.857 151.919 206.672 149.298 210.865 147.41C218.1 144.16 232.988 135.353 232.358 134.724C231.939 134.41 203.526 122.248 200.8 121.304C199.542 120.78 199.228 120.151 199.752 119.207C200.171 118.369 207.091 111.659 215.059 104.32C222.923 96.8757 229.423 90.4802 229.423 90.0608C229.423 89.2221 222.922 88.0688 203.736 85.3429C196.816 84.2944 190.735 83.246 190.316 82.8266C189.792 82.4072 194.615 73.181 201.01 62.3821C211.39 44.6635 213.382 40.8891 212.333 40.8891C212.124 40.8891 203.526 43.9296 193.252 47.7039C178.259 53.1558 174.17 54.2043 173.122 53.1558C170.815 50.8493 168.613 33.55 168.613 18.0331V3.04048L160.121 7.54876C150.161 12.8958 136.846 23.2753 130.66 30.5096C128.353 33.3403 125.942 35.6469 125.523 35.6469C124.998 35.6469 121.014 30.8241 116.506 24.848C108.748 14.5733 95.6421 6.4671e-06 94.1743 6.4671e-06C93.7549 6.4671e-06 92.9162 4.61313 92.2871 10.1699ZM95.2228 272.908C91.3435 275.949 71.5281 328.266 73.1007 330.992C73.6249 331.935 78.1332 336.234 83.1657 340.638C88.3031 345.041 92.6017 349.13 92.8114 349.759C93.021 350.388 91.7629 352.695 89.9806 354.896C88.3031 357.098 86.8353 358.251 86.8353 357.517C86.8353 356.888 87.7788 355.001 89.037 353.533L91.2387 350.703L81.1737 341.267C74.1492 334.661 71.1087 331.097 71.1087 329.419C71.1087 326.064 83.0609 293.982 90.3999 277.522C92.1823 273.537 93.6501 271.545 94.9082 271.545C96.5857 271.65 96.5857 271.755 95.2228 272.908Z"], ["d", "M270.733 147.306C241.272 152.653 225.021 164.29 203.948 195.429C199.335 202.139 199.02 202.978 199.02 209.478C199.02 214.51 197.972 219.438 195.246 227.93C190.633 242.294 190.842 245.649 197.447 256.867C200.068 261.271 202.165 265.465 202.165 265.989C202.165 266.618 200.802 268.61 199.02 270.497C193.463 276.473 193.568 285.699 199.335 291.885C202.69 295.345 210.553 298.595 212.65 297.232C213.174 296.918 212.44 294.506 211.077 291.78C209.609 289.159 208.456 286.224 208.561 285.28C208.561 284.232 209.085 284.546 209.714 286.224C211.496 290.103 219.779 302.894 223.868 307.926C231.941 317.991 249.345 328.161 265.596 332.46C270.524 333.718 279.226 334.871 286.565 335.186C293.484 335.5 298.202 336.129 297.049 336.549C290.758 338.75 261.821 334.661 248.506 329.629L241.587 327.008L239.804 329.419C233.199 338.121 225.65 357.937 223.763 371.357L223.239 375.341H288.242C349.681 375.341 353.245 375.236 352.721 373.454C352.407 372.51 350.729 366.219 349.052 359.509C345.382 345.041 342.446 337.807 337.728 331.621C335.841 329.105 334.269 326.484 334.269 325.75C334.373 325.121 336.994 322.604 340.245 320.298C346.116 316.104 354.189 307.612 358.592 300.902C360.06 298.7 362.367 296.918 364.464 296.289C366.246 295.764 369.601 293.563 371.907 291.466C379.142 284.546 379.876 275.11 373.48 269.553C371.278 267.666 370.964 266.723 371.593 263.368C372.012 261.271 372.641 259.279 373.061 258.964C373.48 258.65 374.424 255.609 375.158 252.149C376.206 247.117 376.206 243.238 375.158 232.439C374.424 225.1 373.375 219.124 372.851 219.124C372.327 219.124 372.012 216.188 372.117 212.518C372.327 206.752 371.803 204.97 368.028 197.631C362.996 187.67 355.552 176.767 348.003 168.589C343.39 163.556 340.349 161.564 328.502 155.693C320.115 151.604 311.517 148.144 307.324 147.306C298.622 145.418 280.798 145.418 270.733 147.306Z"], ["d", "M147.646 261.69C147.646 262.005 149.638 264.94 152.154 268.19C154.67 271.441 158.13 276.578 160.017 279.409C164.945 287.272 176.373 311.805 179.728 321.556C183.397 331.935 183.083 332.669 172.074 342C167.88 345.565 164.421 349.34 164.421 350.178C164.421 351.122 169.138 356.154 174.905 361.606C181.196 367.373 185.389 372.091 185.389 373.349C185.389 375.236 186.228 375.341 200.067 375.341C211.076 375.341 214.746 375.026 214.746 373.978C214.746 369.574 189.059 277.207 186.647 272.804C186.228 271.965 179.518 269.763 171.76 267.771C164.001 265.884 155.928 263.577 153.726 262.634C149.428 260.956 147.646 260.642 147.646 261.69Z"], [1, "main-title", 2, "display", "inline-block"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon", "fas", "fa-bars", 3, "click"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "style", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " path { fill: url(#MyGradient); } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "linearGradient", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "stop", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "stop", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "em", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_em_click_17_listener() { return ctx.toggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Challenge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Characters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.showMenuMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.showMenuMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  height: 70px;\n}\n[_nghost-%COMP%]   header.mobile-show[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: bold;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: auto;\n  height: 35px;\n  display: inline-block;\n  vertical-align: baseline;\n  margin-right: 16px;\n}\n[_nghost-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  color: #43b4ce;\n  -webkit-text-fill-color: #43b4ce;\n  -webkit-text-stroke: 1px #79b069;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7QUFERjtBQUVFO0VBQ0UsWUFBQTtBQUFKO0FBQ0k7RUFDRSxZQUFBO0FBQ047QUFFSTtFQUNFLHdDQUFBO0FBQU47QUFHVTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQURaO0FBTU07RUFDRSxjQUFBO0FBSlI7QUFRSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBTk47QUFTRTtFQUNFLGNDbENRO0VEbUNSLGdDQ25DUTtFRG9DUixnQ0FBQTtFQUNBLGdCQUFBO0FBUEoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVhZGVyIHtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgICYubW9iaWxlLXNob3cge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgLm5hdmJhci1uYXYgIHtcclxuICAgICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgLm5hdi1saW5rICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYWluLXRpdGxlIHtcclxuICAgIGNvbG9yOiAkY29sb3JfUk0xO1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICRjb2xvcl9STTE7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggJGNvbG9yX1JNMjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcbiIsIiRib3JkZXJfd2lkdGg6IDFweDtcclxuJGNvbG9yX1JNMTogIzQzYjRjZTtcclxuJGNvbG9yX1JNMjogIzc5YjA2OTtcclxuJGNvbG9yX3RpdGxlOiAkY29sb3JfUk0xO1xyXG4kY29sb3JfY2FyZF90ZXh0OiAjNzM1MmEwO1xyXG4kY29sb3JfY2FyZF9iZzogIzEwMDIyNDtcclxuJGNvbG9yX2NhcmRfc2hhZG93OiAjMjkwNzVhO1xyXG5cclxuJHBhZ2VfYmcxOiAjMTIwMTFhO1xyXG4kcGFnZV9iZzI6ICMxMjAzMzU7XHJcblxyXG4kaGVhZGVySGVpZ2h0OiA3MHB4O1xyXG4kZm9vdGVySGVpZ2h0OiAzNXB4O1xyXG5cclxuJGdyaWQtYnJlYWtwb2ludHMteHM6IDM4MHB4O1xyXG4kZ3JpZC1icmVha3BvaW50cy1zbTogNTc2cHg7XHJcbiRncmlkLWJyZWFrcG9pbnRzLW1kOiA3NjhweDtcclxuJGdyaWQtYnJlYWtwb2ludHMtbGc6IDk5MnB4O1xyXG4kZ3JpZC1icmVha3BvaW50cy14bDogMTIwMHB4O1xyXG4kZ3JpZC1icmVha3BvaW50cy14eGw6IDE0MDBweDtcclxuIl19 */"] });


/***/ }),

/***/ "52j4":
/*!***************************************************************************!*\
  !*** ./src/app/components/cards/challenge-one/challenge-one.component.ts ***!
  \***************************************************************************/
/*! exports provided: ChallengeOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeOneComponent", function() { return ChallengeOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");


function ChallengeOneComponent_div_0_strong_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.challenge.count);
} }
function ChallengeOneComponent_div_0_strong_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r2.challenge.time, "SSS"));
} }
function ChallengeOneComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChallengeOneComponent_div_0_strong_5_Template, 2, 1, "strong", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " times. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Execution Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChallengeOneComponent_div_0_strong_10_Template, 3, 4, "strong", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " milliseconds. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.challenge.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The letter \"", ctx_r0.challenge.letter, "\" (case insensitive) is repeated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.challenge.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.challenge.time);
} }
class ChallengeOneComponent {
    constructor() {
        this.challenge = {
            name: '',
            letter: '',
            count: 0,
            time: 0
        };
    }
    ngOnInit() {
    }
}
ChallengeOneComponent.ɵfac = function ChallengeOneComponent_Factory(t) { return new (t || ChallengeOneComponent)(); };
ChallengeOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeOneComponent, selectors: [["app-challenge-one"]], inputs: { challenge: "challenge" }, decls: 1, vars: 1, consts: [["class", "card", 4, "ngIf"], [1, "card"], [4, "ngIf"]], template: function ChallengeOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChallengeOneComponent_div_0_Template, 12, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.challenge);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  color: #7352a0;\n  border: 1px solid #7352a0;\n  padding: 1rem;\n  border-radius: 16px;\n  background-color: #100224;\n  overflow: hidden;\n  box-shadow: 0px 4px 16px -4px rgba(41, 7, 90, 0.6);\n  transition: all 0.187s ease-out;\n  margin: 0 auto;\n  margin-bottom: 2rem;\n}\n@media screen and (max-width: 576px) {\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  background-color: #120229;\n  box-shadow: 0px 4px 16px 2px rgba(121, 28, 255, 0.2);\n  transition: all 0.187s ease-out;\n  border-color: #791cff;\n  color: #c3b3d8;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%] {\n  color: #79b069;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #43b4ce;\n  transition: all 0.187s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hhbGxlbmdlLW9uZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VDYUEsY0NaZ0I7RURhaEIseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkNmYztFRGdCZCxnQkFBQTtFQVhBLGtEQVlzQjtFQVh0QiwrQkFBQTtFRE5FLGNBQUE7RUFDQSxtQkFBQTtBQU9KO0FBTkk7RUFKRjtJQUtJLGNBQUE7RUFTSjtBQUNGO0FBUEk7RUNlRix5QkFBQTtFQWhCQSxvREFrQnNCO0VBakJ0QiwrQkFBQTtFQWtCQSxxQkFGUTtFQUdSLGNBQUE7QURIRjtBQWRNO0VBQ0UsY0VaSTtBRjRCWjtBQWJJO0VBQ0UsY0VqQk07RUZrQk4sK0JBQUE7QUFlTiIsImZpbGUiOiJjaGFsbGVuZ2Utb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy8nO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5jYXJkIHtcclxuICAgIEBpbmNsdWRlIGNhcmRzLXN0eWxlcygpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGdyaWQtYnJlYWtwb2ludHMtc20pIHtcclxuICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGNhcmRzLXN0eWxlcy1ob3ZlcigpO1xyXG4gICAgICBoNCB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcl9STTI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgY29sb3I6ICRjb2xvcl90aXRsZTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4xODdzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gYmctZ3JhZGllbnQoJGNvbG9yMSwgJGNvbG9yMikge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvcjE7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICRjb2xvcjEsICRjb2xvcjIpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAkY29sb3IxLCAkY29sb3IyKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkY29sb3IxLCAkY29sb3IyKTtcclxufVxyXG5cclxuQG1peGluIGNhcmRzLXNoYWRvdygkYm94X3NoYWRvd192YWw6IDBweCA0cHggMTZweCAtNHB4IHJnYmEoMCwwLDAsMC40KSkge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGJveF9zaGFkb3dfdmFsO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGJveF9zaGFkb3dfdmFsO1xyXG4gIGJveC1zaGFkb3c6ICRib3hfc2hhZG93X3ZhbDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjE4N3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBjYXJkcy1zdHlsZXMge1xyXG4gICRjb2xvcjI6ICMxMDAyMjQ7XHJcbiAgY29sb3I6ICRjb2xvcl9jYXJkX3RleHQ7XHJcbiAgYm9yZGVyOiAkYm9yZGVyX3dpZHRoIHNvbGlkICRjb2xvcl9jYXJkX3RleHQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9jYXJkX2JnO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgQGluY2x1ZGUgY2FyZHMtc2hhZG93KDBweCA0cHggMTZweCAtNHB4IHJnYmEoJGNvbG9yX2NhcmRfc2hhZG93LDAuNikpO1xyXG59XHJcblxyXG5AbWl4aW4gY2FyZHMtc3R5bGVzLWhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvcl9jYXJkX2JnLCAxJSk7XHJcbiAgJGNvbG9yOiAjNzkxY2ZmO1xyXG4gIEBpbmNsdWRlIGNhcmRzLXNoYWRvdygwcHggNHB4IDE2cHggMnB4IHJnYmEoJGNvbG9yLDAuMikpO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yO1xyXG4gIGNvbG9yOiBsaWdodGVuKCRjb2xvcl9jYXJkX3RleHQsIDMwJSk7XHJcbn1cclxuIiwiJGJvcmRlcl93aWR0aDogMXB4O1xyXG4kY29sb3JfUk0xOiAjNDNiNGNlO1xyXG4kY29sb3JfUk0yOiAjNzliMDY5O1xyXG4kY29sb3JfdGl0bGU6ICRjb2xvcl9STTE7XHJcbiRjb2xvcl9jYXJkX3RleHQ6ICM3MzUyYTA7XHJcbiRjb2xvcl9jYXJkX2JnOiAjMTAwMjI0O1xyXG4kY29sb3JfY2FyZF9zaGFkb3c6ICMyOTA3NWE7XHJcblxyXG4kcGFnZV9iZzE6ICMxMjAxMWE7XHJcbiRwYWdlX2JnMjogIzEyMDMzNTtcclxuXHJcbiRoZWFkZXJIZWlnaHQ6IDcwcHg7XHJcbiRmb290ZXJIZWlnaHQ6IDM1cHg7XHJcblxyXG4kZ3JpZC1icmVha3BvaW50cy14czogMzgwcHg7XHJcbiRncmlkLWJyZWFrcG9pbnRzLXNtOiA1NzZweDtcclxuJGdyaWQtYnJlYWtwb2ludHMtbWQ6IDc2OHB4O1xyXG4kZ3JpZC1icmVha3BvaW50cy1sZzogOTkycHg7XHJcbiRncmlkLWJyZWFrcG9pbnRzLXhsOiAxMjAwcHg7XHJcbiRncmlkLWJyZWFrcG9pbnRzLXh4bDogMTQwMHB4O1xyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
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

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 0, consts: [["id", "footer"], [1, "container"], [1, "row"], [1, "col", "text-center"], [1, "fas", "fa-heart"], ["href", "https://github.com/agapox", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Make with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "em", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "agapox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 35px;\n  font-size: 14px;\n  color: #43b4ce;\n  background: #08000b;\n  background: linear-gradient(to bottom right, #08000b, #0d0227);\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: inherit;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #79b069;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .fa-heart[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #992d2d;\n  transform: scale3d(1, 1, 1);\n  animation: heart-beating 5s ease-in infinite forwards;\n}\n@keyframes heart-beating {\n  0% {\n    transform: scale3d(1, 1, 1);\n    color: #992d2d;\n  }\n  10% {\n    transform: scale3d(1, 1, 1);\n    color: #992d2d;\n  }\n  18% {\n    transform: scale3d(1.08, 1.08, 1.08);\n    color: #ff0000;\n  }\n  23% {\n    transform: scale3d(1.04, 1.04, 1.04);\n    color: #992d2d;\n  }\n  28% {\n    transform: scale3d(1.07, 1.07, 1.07);\n    color: #ff0000;\n  }\n  33% {\n    transform: scale3d(1, 1, 1);\n    color: #992d2d;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNDVFE7RUNBVixtQkZVYTtFRVBiLDhEQUFBO0FGU0Y7QUFFSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUFOO0FBQ007RUFDRSxjQUFBO0FBQ1I7QUFDTTtFQUNFLGNDcEJJO0FEcUJaO0FBR0k7RUFDRSxlQUFBO0VBR0EsY0FGYztFQUdkLDJCQUFBO0VBQ0EscURBQUE7QUFITjtBQUlNO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLGNBUlU7RUFNbEI7RUFJTTtJQUNFLDJCQUFBO0lBQ0EsY0FaVTtFQVVsQjtFQUlNO0lBQ0Usb0NBQUE7SUFDQSxjQWZjO0VBYXRCO0VBSU07SUFDRSxvQ0FBQTtJQUNBLGNBcEJVO0VBa0JsQjtFQUlNO0lBQ0Usb0NBQUE7SUFDQSxjQXZCYztFQXFCdEI7RUFJTTtJQUNFLDJCQUFBO0lBQ0EsY0E1QlU7RUEwQmxCO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy8nO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICBmb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogJGNvbG9yX1JNMTtcclxuICAgICRwYWdlX2JnMTogZGFya2VuKCRwYWdlX2JnMSwgMyUpO1xyXG4gICAgJHBhZ2VfYmcyOiBkYXJrZW4oJHBhZ2VfYmcyLCAzJSk7XHJcbiAgICBAaW5jbHVkZSBiZy1ncmFkaWVudCgkcGFnZV9iZzEsICRwYWdlX2JnMik7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICY6dmlzaXRlZCB7XHJcbiAgICAgICAgY29sb3I6aW5oZXJpdFxyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3JfUk0yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZhLWhlYXJ0IHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAkY29sb3JfaGVhcnQ6ICM5OTJkMmQ7XHJcbiAgICAgICRjb2xvcl9oZWFydGJlYXQ6ICNmZjAwMDA7XHJcbiAgICAgIGNvbG9yOiAkY29sb3JfaGVhcnQ7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLDEsMSk7XHJcbiAgICAgIGFuaW1hdGlvbjogaGVhcnQtYmVhdGluZyA1cyBlYXNlLWluIGluZmluaXRlIGZvcndhcmRzO1xyXG4gICAgICBAa2V5ZnJhbWVzIGhlYXJ0LWJlYXRpbmcge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLDEsMSk7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yX2hlYXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsMSwxKTtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3JfaGVhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDE4JSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wOCwxLjA4LDEuMDgpO1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvcl9oZWFydGJlYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDIzJSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNCwxLjA0LDEuMDQpO1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvcl9oZWFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgMjglIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA3LDEuMDcsMS4wNyk7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yX2hlYXJ0YmVhdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgMzMlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLDEsMSk7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yX2hlYXJ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGJvcmRlcl93aWR0aDogMXB4O1xyXG4kY29sb3JfUk0xOiAjNDNiNGNlO1xyXG4kY29sb3JfUk0yOiAjNzliMDY5O1xyXG4kY29sb3JfdGl0bGU6ICRjb2xvcl9STTE7XHJcbiRjb2xvcl9jYXJkX3RleHQ6ICM3MzUyYTA7XHJcbiRjb2xvcl9jYXJkX2JnOiAjMTAwMjI0O1xyXG4kY29sb3JfY2FyZF9zaGFkb3c6ICMyOTA3NWE7XHJcblxyXG4kcGFnZV9iZzE6ICMxMjAxMWE7XHJcbiRwYWdlX2JnMjogIzEyMDMzNTtcclxuXHJcbiRoZWFkZXJIZWlnaHQ6IDcwcHg7XHJcbiRmb290ZXJIZWlnaHQ6IDM1cHg7XHJcblxyXG4kZ3JpZC1icmVha3BvaW50cy14czogMzgwcHg7XHJcbiRncmlkLWJyZWFrcG9pbnRzLXNtOiA1NzZweDtcclxuJGdyaWQtYnJlYWtwb2ludHMtbWQ6IDc2OHB4O1xyXG4kZ3JpZC1icmVha3BvaW50cy1sZzogOTkycHg7XHJcbiRncmlkLWJyZWFrcG9pbnRzLXhsOiAxMjAwcHg7XHJcbiRncmlkLWJyZWFrcG9pbnRzLXh4bDogMTQwMHB4O1xyXG4iLCJAbWl4aW4gYmctZ3JhZGllbnQoJGNvbG9yMSwgJGNvbG9yMikge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvcjE7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICRjb2xvcjEsICRjb2xvcjIpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAkY29sb3IxLCAkY29sb3IyKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkY29sb3IxLCAkY29sb3IyKTtcclxufVxyXG5cclxuQG1peGluIGNhcmRzLXNoYWRvdygkYm94X3NoYWRvd192YWw6IDBweCA0cHggMTZweCAtNHB4IHJnYmEoMCwwLDAsMC40KSkge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGJveF9zaGFkb3dfdmFsO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGJveF9zaGFkb3dfdmFsO1xyXG4gIGJveC1zaGFkb3c6ICRib3hfc2hhZG93X3ZhbDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjE4N3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBjYXJkcy1zdHlsZXMge1xyXG4gICRjb2xvcjI6ICMxMDAyMjQ7XHJcbiAgY29sb3I6ICRjb2xvcl9jYXJkX3RleHQ7XHJcbiAgYm9yZGVyOiAkYm9yZGVyX3dpZHRoIHNvbGlkICRjb2xvcl9jYXJkX3RleHQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9jYXJkX2JnO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgQGluY2x1ZGUgY2FyZHMtc2hhZG93KDBweCA0cHggMTZweCAtNHB4IHJnYmEoJGNvbG9yX2NhcmRfc2hhZG93LDAuNikpO1xyXG59XHJcblxyXG5AbWl4aW4gY2FyZHMtc3R5bGVzLWhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvcl9jYXJkX2JnLCAxJSk7XHJcbiAgJGNvbG9yOiAjNzkxY2ZmO1xyXG4gIEBpbmNsdWRlIGNhcmRzLXNoYWRvdygwcHggNHB4IDE2cHggMnB4IHJnYmEoJGNvbG9yLDAuMikpO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yO1xyXG4gIGNvbG9yOiBsaWdodGVuKCRjb2xvcl9jYXJkX3RleHQsIDMwJSk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "LzDz":
/*!***************************************************************************!*\
  !*** ./src/app/components/cards/challenge-two/challenge-two.component.ts ***!
  \***************************************************************************/
/*! exports provided: ChallengeTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeTwoComponent", function() { return ChallengeTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");


function ChallengeTwoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loc_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", loc_r1, " ");
} }
class ChallengeTwoComponent {
    constructor() {
        this.episode = {
            id: 1,
            name: 'Episode Name',
            location: ['Episode location 1', 'Episode location 2']
        };
    }
    ngOnInit() {
    }
}
ChallengeTwoComponent.ɵfac = function ChallengeTwoComponent_Factory(t) { return new (t || ChallengeTwoComponent)(); };
ChallengeTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeTwoComponent, selectors: [["app-challenge-two"]], inputs: { episode: "episode" }, decls: 7, vars: 3, consts: [[1, "card"], [1, "locations"], ["class", "location", 4, "ngFor", "ngForOf"], [1, "location"]], template: function ChallengeTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Characters origins and locations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChallengeTwoComponent_div_6_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Episode # ", ctx.episode.id, " - ", ctx.episode.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.episode.location);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  color: #7352a0;\n  border: 1px solid #7352a0;\n  padding: 1rem;\n  border-radius: 16px;\n  background-color: #100224;\n  overflow: hidden;\n  box-shadow: 0px 4px 16px -4px rgba(41, 7, 90, 0.6);\n  transition: all 0.187s ease-out;\n  margin: 0 auto;\n  margin-bottom: 2rem;\n}\n@media screen and (max-width: 576px) {\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  background-color: #120229;\n  box-shadow: 0px 4px 16px 2px rgba(121, 28, 255, 0.2);\n  transition: all 0.187s ease-out;\n  border-color: #791cff;\n  color: #c3b3d8;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: #79b069;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #43b4ce;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .locations[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 991.98px) {\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .locations[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 767.98px) {\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .locations[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hhbGxlbmdlLXR3by5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VDY0EsY0NaZ0I7RURhaEIseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkNmYztFRGdCZCxnQkFBQTtFQVhBLGtEQVlzQjtFQVh0QiwrQkFBQTtFRFBFLGNBQUE7RUFDQSxtQkFBQTtBQVFKO0FBUEk7RUFKRjtJQUtJLGNBQUE7RUFVSjtBQUNGO0FBUkk7RUNnQkYseUJBQUE7RUFoQkEsb0RBa0JzQjtFQWpCdEIsK0JBQUE7RUFrQkEscUJBRlE7RUFHUixjQUFBO0FESEY7QUFmTTtFQUNFLGNFWEk7QUY0Qlo7QUFkSTtFQUNFLGNFaEJNO0FGZ0NaO0FBYkk7RUFDRSxhQUFBO0VBQ0EscUNBQUE7QUFlTjtBQWJNO0VBSkY7SUFLSSxxQ0FBQTtFQWdCTjtBQUNGO0FBZE07RUFSRjtJQVNJLDBCQUFBO0VBaUJOO0FBQ0YiLCJmaWxlIjoiY2hhbGxlbmdlLXR3by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvJztcclxuOmhvc3Qge1xyXG4gIC5jYXJkIHtcclxuICAgIEBpbmNsdWRlIGNhcmRzLXN0eWxlcygpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGdyaWQtYnJlYWtwb2ludHMtc20pIHtcclxuICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGNhcmRzLXN0eWxlcy1ob3ZlcigpO1xyXG4gICAgICBoNSwgcCB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcl9STTI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGg1LCBwIHtcclxuICAgICAgY29sb3I6ICRjb2xvcl90aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICAubG9jYXRpb25zIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBiZy1ncmFkaWVudCgkY29sb3IxLCAkY29sb3IyKSB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yMTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgJGNvbG9yMSwgJGNvbG9yMik7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICRjb2xvcjEsICRjb2xvcjIpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRjb2xvcjEsICRjb2xvcjIpO1xyXG59XHJcblxyXG5AbWl4aW4gY2FyZHMtc2hhZG93KCRib3hfc2hhZG93X3ZhbDogMHB4IDRweCAxNnB4IC00cHggcmdiYSgwLDAsMCwwLjQpKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYm94X3NoYWRvd192YWw7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkYm94X3NoYWRvd192YWw7XHJcbiAgYm94LXNoYWRvdzogJGJveF9zaGFkb3dfdmFsO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMTg3cyBlYXNlLW91dDtcclxufVxyXG5cclxuQG1peGluIGNhcmRzLXN0eWxlcyB7XHJcbiAgJGNvbG9yMjogIzEwMDIyNDtcclxuICBjb2xvcjogJGNvbG9yX2NhcmRfdGV4dDtcclxuICBib3JkZXI6ICRib3JkZXJfd2lkdGggc29saWQgJGNvbG9yX2NhcmRfdGV4dDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2NhcmRfYmc7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBAaW5jbHVkZSBjYXJkcy1zaGFkb3coMHB4IDRweCAxNnB4IC00cHggcmdiYSgkY29sb3JfY2FyZF9zaGFkb3csMC42KSk7XHJcbn1cclxuXHJcbkBtaXhpbiBjYXJkcy1zdHlsZXMtaG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yX2NhcmRfYmcsIDElKTtcclxuICAkY29sb3I6ICM3OTFjZmY7XHJcbiAgQGluY2x1ZGUgY2FyZHMtc2hhZG93KDBweCA0cHggMTZweCAycHggcmdiYSgkY29sb3IsMC4yKSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6IGxpZ2h0ZW4oJGNvbG9yX2NhcmRfdGV4dCwgMzAlKTtcclxufVxyXG4iLCIkYm9yZGVyX3dpZHRoOiAxcHg7XHJcbiRjb2xvcl9STTE6ICM0M2I0Y2U7XHJcbiRjb2xvcl9STTI6ICM3OWIwNjk7XHJcbiRjb2xvcl90aXRsZTogJGNvbG9yX1JNMTtcclxuJGNvbG9yX2NhcmRfdGV4dDogIzczNTJhMDtcclxuJGNvbG9yX2NhcmRfYmc6ICMxMDAyMjQ7XHJcbiRjb2xvcl9jYXJkX3NoYWRvdzogIzI5MDc1YTtcclxuXHJcbiRwYWdlX2JnMTogIzEyMDExYTtcclxuJHBhZ2VfYmcyOiAjMTIwMzM1O1xyXG5cclxuJGhlYWRlckhlaWdodDogNzBweDtcclxuJGZvb3RlckhlaWdodDogMzVweDtcclxuXHJcbiRncmlkLWJyZWFrcG9pbnRzLXhzOiAzODBweDtcclxuJGdyaWQtYnJlYWtwb2ludHMtc206IDU3NnB4O1xyXG4kZ3JpZC1icmVha3BvaW50cy1tZDogNzY4cHg7XHJcbiRncmlkLWJyZWFrcG9pbnRzLWxnOiA5OTJweDtcclxuJGdyaWQtYnJlYWtwb2ludHMteGw6IDEyMDBweDtcclxuJGdyaWQtYnJlYWtwb2ludHMteHhsOiAxNDAwcHg7XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["id", "container-wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  color: #ffffff;\n  background: #12011a;\n  background: linear-gradient(to bottom right, #12011a, #120335);\n}\n[_nghost-%COMP%]   #container-wrapper[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 105px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUNMQSxtQkNPUztFREpULDhEQUFBO0FES0Y7QUFBRTtFQUNFLCtCQUFBO0FBRUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy8nO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBAaW5jbHVkZSBiZy1ncmFkaWVudCgkcGFnZV9iZzEsICRwYWdlX2JnMik7XHJcblxyXG4gICNjb250YWluZXItd3JhcHBlciB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVySGVpZ2h0ICsgJGZvb3RlckhlaWdodH0pO1xyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gYmctZ3JhZGllbnQoJGNvbG9yMSwgJGNvbG9yMikge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvcjE7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICRjb2xvcjEsICRjb2xvcjIpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAkY29sb3IxLCAkY29sb3IyKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkY29sb3IxLCAkY29sb3IyKTtcclxufVxyXG5cclxuQG1peGluIGNhcmRzLXNoYWRvdygkYm94X3NoYWRvd192YWw6IDBweCA0cHggMTZweCAtNHB4IHJnYmEoMCwwLDAsMC40KSkge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGJveF9zaGFkb3dfdmFsO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGJveF9zaGFkb3dfdmFsO1xyXG4gIGJveC1zaGFkb3c6ICRib3hfc2hhZG93X3ZhbDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjE4N3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBjYXJkcy1zdHlsZXMge1xyXG4gICRjb2xvcjI6ICMxMDAyMjQ7XHJcbiAgY29sb3I6ICRjb2xvcl9jYXJkX3RleHQ7XHJcbiAgYm9yZGVyOiAkYm9yZGVyX3dpZHRoIHNvbGlkICRjb2xvcl9jYXJkX3RleHQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9jYXJkX2JnO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgQGluY2x1ZGUgY2FyZHMtc2hhZG93KDBweCA0cHggMTZweCAtNHB4IHJnYmEoJGNvbG9yX2NhcmRfc2hhZG93LDAuNikpO1xyXG59XHJcblxyXG5AbWl4aW4gY2FyZHMtc3R5bGVzLWhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvcl9jYXJkX2JnLCAxJSk7XHJcbiAgJGNvbG9yOiAjNzkxY2ZmO1xyXG4gIEBpbmNsdWRlIGNhcmRzLXNoYWRvdygwcHggNHB4IDE2cHggMnB4IHJnYmEoJGNvbG9yLDAuMikpO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yO1xyXG4gIGNvbG9yOiBsaWdodGVuKCRjb2xvcl9jYXJkX3RleHQsIDMwJSk7XHJcbn1cclxuIiwiJGJvcmRlcl93aWR0aDogMXB4O1xyXG4kY29sb3JfUk0xOiAjNDNiNGNlO1xyXG4kY29sb3JfUk0yOiAjNzliMDY5O1xyXG4kY29sb3JfdGl0bGU6ICRjb2xvcl9STTE7XHJcbiRjb2xvcl9jYXJkX3RleHQ6ICM3MzUyYTA7XHJcbiRjb2xvcl9jYXJkX2JnOiAjMTAwMjI0O1xyXG4kY29sb3JfY2FyZF9zaGFkb3c6ICMyOTA3NWE7XHJcblxyXG4kcGFnZV9iZzE6ICMxMjAxMWE7XHJcbiRwYWdlX2JnMjogIzEyMDMzNTtcclxuXHJcbiRoZWFkZXJIZWlnaHQ6IDcwcHg7XHJcbiRmb290ZXJIZWlnaHQ6IDM1cHg7XHJcblxyXG4kZ3JpZC1icmVha3BvaW50cy14czogMzgwcHg7XHJcbiRncmlkLWJyZWFrcG9pbnRzLXNtOiA1NzZweDtcclxuJGdyaWQtYnJlYWtwb2ludHMtbWQ6IDc2OHB4O1xyXG4kZ3JpZC1icmVha3BvaW50cy1sZzogOTkycHg7XHJcbiRncmlkLWJyZWFrcG9pbnRzLXhsOiAxMjAwcHg7XHJcbiRncmlkLWJyZWFrcG9pbnRzLXh4bDogMTQwMHB4O1xyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]] }); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "2MiI");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _cards_card_character_card_character_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards/card-character/card-character.component */ "neyh");
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badge/badge.component */ "jKVP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _cards_challenge_one_challenge_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards/challenge-one/challenge-one.component */ "52j4");
/* harmony import */ var _cards_challenge_two_challenge_two_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cards/challenge-two/challenge-two.component */ "LzDz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");









const Components = [
    _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
    _cards_card_character_card_character_component__WEBPACK_IMPORTED_MODULE_3__["CardCharacterComponent"],
    _badge_badge_component__WEBPACK_IMPORTED_MODULE_4__["BadgeComponent"],
    _cards_challenge_one_challenge_one_component__WEBPACK_IMPORTED_MODULE_6__["ChallengeOneComponent"],
    _cards_challenge_two_challenge_two_component__WEBPACK_IMPORTED_MODULE_7__["ChallengeTwoComponent"]
];
class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
        _cards_card_character_card_character_component__WEBPACK_IMPORTED_MODULE_3__["CardCharacterComponent"],
        _badge_badge_component__WEBPACK_IMPORTED_MODULE_4__["BadgeComponent"],
        _cards_challenge_one_challenge_one_component__WEBPACK_IMPORTED_MODULE_6__["ChallengeOneComponent"],
        _cards_challenge_two_challenge_two_component__WEBPACK_IMPORTED_MODULE_7__["ChallengeTwoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
        _cards_card_character_card_character_component__WEBPACK_IMPORTED_MODULE_3__["CardCharacterComponent"],
        _badge_badge_component__WEBPACK_IMPORTED_MODULE_4__["BadgeComponent"],
        _cards_challenge_one_challenge_one_component__WEBPACK_IMPORTED_MODULE_6__["ChallengeOneComponent"],
        _cards_challenge_two_challenge_two_component__WEBPACK_IMPORTED_MODULE_7__["ChallengeTwoComponent"]] }); })();


/***/ }),

/***/ "jKVP":
/*!*****************************************************!*\
  !*** ./src/app/components/badge/badge.component.ts ***!
  \*****************************************************/
/*! exports provided: BadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");


class BadgeComponent {
    constructor() {
        this.status = 'status'; // 'Alive', 'Dead' or 'unknown'
    }
    ngOnInit() {
    }
}
BadgeComponent.ɵfac = function BadgeComponent_Factory(t) { return new (t || BadgeComponent)(); };
BadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgeComponent, selectors: [["app-badge"]], inputs: { status: "status" }, decls: 2, vars: 2, consts: [[3, "ngClass"]], template: function BadgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status.toLocaleLowerCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: inline-flex;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  color: #dedede;\n  background-color: #525252;\n  border: 2px solid;\n  border-color: #dedede;\n  border-radius: 100px;\n  padding: 2px 16px 4px 16px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 12px;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   span.alive[_ngcontent-%COMP%] {\n  color: #9eff9e;\n  background-color: #386e38;\n  border-color: #9eff9e;\n}\n[_nghost-%COMP%]   span.dead[_ngcontent-%COMP%] {\n  color: #ffa0a0;\n  background-color: #4b0000;\n  border-color: #ffa0a0;\n}\n[_nghost-%COMP%]   span.unknown[_ngcontent-%COMP%] {\n  color: #ffe4d2;\n  background-color: #e0af00;\n  border-color: #ffe4d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxiYWRnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNOO0FBQ0k7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNOO0FBQ0k7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNOIiwiZmlsZSI6ImJhZGdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cclxuICBzcGFuIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6ICNkZWRlZGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZWRlZGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4IDRweCAxNnB4OztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmLmFsaXZlIHtcclxuICAgICAgY29sb3I6ICM5ZWZmOWU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODZlMzg7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzllZmY5ZTtcclxuICAgIH1cclxuICAgICYuZGVhZCB7XHJcbiAgICAgIGNvbG9yOiAjZmZhMGEwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGIwMDAwO1xyXG4gICAgICBib3JkZXItY29sb3I6ICNmZmEwYTA7XHJcbiAgICB9XHJcbiAgICAmLnVua25vd24ge1xyXG4gICAgICBjb2xvcjogI2ZmZTRkMjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwYWYwMDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmZlNGQyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "neyh":
/*!*****************************************************************************!*\
  !*** ./src/app/components/cards/card-character/card-character.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CardCharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardCharacterComponent", function() { return CardCharacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../badge/badge.component */ "jKVP");



class CardCharacterComponent {
    constructor() {
        this.character = {
            id: 0,
            name: 'Name',
            status: 'No-status',
            species: 'Species',
            type: 'Type',
            gender: 'Gender',
            origin: {
                name: 'Origin name',
                url: 'Origin URL',
            },
            location: {
                name: 'Location name',
                url: 'Location url',
            },
            image: 'https://placeimg.com/300/300/people',
            episode: ['1', '2', '33', '23', '21'],
            url: 'Character URL',
            created: 'Date created'
        };
    }
    ngOnInit() {
    }
}
CardCharacterComponent.ɵfac = function CardCharacterComponent_Factory(t) { return new (t || CardCharacterComponent)(); };
CardCharacterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardCharacterComponent, selectors: [["app-card-character"]], inputs: { character: "character" }, decls: 27, vars: 10, consts: [[1, "card", 3, "ngClass"], [1, "card-img-container"], [1, "card-img-top", 3, "src", "alt"], [3, "status"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "card-text"]], template: function CardCharacterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-badge", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Species: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Type: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Gender: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "First seen in: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Last seen in: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "character-" + ctx.character.id.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.character.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.character.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.character.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.character.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.character.species);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.character.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.character.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.character.origin.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.character.location.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _badge_badge_component__WEBPACK_IMPORTED_MODULE_2__["BadgeComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  color: #7352a0;\n  border: 1px solid #7352a0;\n  padding: 1rem;\n  border-radius: 16px;\n  background-color: #100224;\n  overflow: hidden;\n  box-shadow: 0px 4px 16px -4px rgba(41, 7, 90, 0.6);\n  transition: all 0.187s ease-out;\n  padding: 0;\n  width: 95%;\n  max-width: 400px;\n  margin: 0 auto 0 auto;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-img-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-img-container[_ngcontent-%COMP%]   app-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  right: 16px;\n  bottom: 16px;\n}\n[_nghost-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #43b4ce;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  background-color: #120229;\n  box-shadow: 0px 4px 16px 2px rgba(121, 28, 255, 0.2);\n  transition: all 0.187s ease-out;\n  border-color: #791cff;\n  color: #c3b3d8;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover   .card-title[_ngcontent-%COMP%] {\n  color: #79b069;\n}\n[_nghost-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FyZC1jaGFyYWN0ZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlc1xcX21peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBREY7QUFFRTtFQ1dBLGNDWmdCO0VEYWhCLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDZmM7RURnQmQsZ0JBQUE7RUFYQSxrREFZc0I7RUFYdEIsK0JBQUE7RURKRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFTSjtBQVBJO0VBQ0Usa0JBQUE7QUFTTjtBQVJNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFVUjtBQVBJO0VBQ0UsY0VyQk07QUY4Qlo7QUFOSTtFQ0NGLHlCQUFBO0VBaEJBLG9EQWtCc0I7RUFqQnRCLCtCQUFBO0VBa0JBLHFCQUZRO0VBR1IsY0FBQTtBRFVGO0FBYk07RUFDRSxjRTFCSTtBRnlDWjtBQVhNO0VBQ0Usa0JBQUE7QUFhUiIsImZpbGUiOiJjYXJkLWNoYXJhY3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAuY2FyZCB7XHJcbiAgICBAaW5jbHVkZSBjYXJkcy1zdHlsZXMoKTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcclxuXHJcbiAgICAuY2FyZC1pbWctY29udGFpbmVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBhcHAtYmFkZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgYm90dG9tOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLXRpdGxlIHtcclxuICAgICAgY29sb3I6ICRjb2xvcl90aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgQGluY2x1ZGUgY2FyZHMtc3R5bGVzLWhvdmVyKCk7XHJcbiAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yX1JNMjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1ib2R5IHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBiZy1ncmFkaWVudCgkY29sb3IxLCAkY29sb3IyKSB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yMTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgJGNvbG9yMSwgJGNvbG9yMik7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICRjb2xvcjEsICRjb2xvcjIpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRjb2xvcjEsICRjb2xvcjIpO1xyXG59XHJcblxyXG5AbWl4aW4gY2FyZHMtc2hhZG93KCRib3hfc2hhZG93X3ZhbDogMHB4IDRweCAxNnB4IC00cHggcmdiYSgwLDAsMCwwLjQpKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYm94X3NoYWRvd192YWw7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkYm94X3NoYWRvd192YWw7XHJcbiAgYm94LXNoYWRvdzogJGJveF9zaGFkb3dfdmFsO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMTg3cyBlYXNlLW91dDtcclxufVxyXG5cclxuQG1peGluIGNhcmRzLXN0eWxlcyB7XHJcbiAgJGNvbG9yMjogIzEwMDIyNDtcclxuICBjb2xvcjogJGNvbG9yX2NhcmRfdGV4dDtcclxuICBib3JkZXI6ICRib3JkZXJfd2lkdGggc29saWQgJGNvbG9yX2NhcmRfdGV4dDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2NhcmRfYmc7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBAaW5jbHVkZSBjYXJkcy1zaGFkb3coMHB4IDRweCAxNnB4IC00cHggcmdiYSgkY29sb3JfY2FyZF9zaGFkb3csMC42KSk7XHJcbn1cclxuXHJcbkBtaXhpbiBjYXJkcy1zdHlsZXMtaG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yX2NhcmRfYmcsIDElKTtcclxuICAkY29sb3I6ICM3OTFjZmY7XHJcbiAgQGluY2x1ZGUgY2FyZHMtc2hhZG93KDBweCA0cHggMTZweCAycHggcmdiYSgkY29sb3IsMC4yKSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6IGxpZ2h0ZW4oJGNvbG9yX2NhcmRfdGV4dCwgMzAlKTtcclxufVxyXG4iLCIkYm9yZGVyX3dpZHRoOiAxcHg7XHJcbiRjb2xvcl9STTE6ICM0M2I0Y2U7XHJcbiRjb2xvcl9STTI6ICM3OWIwNjk7XHJcbiRjb2xvcl90aXRsZTogJGNvbG9yX1JNMTtcclxuJGNvbG9yX2NhcmRfdGV4dDogIzczNTJhMDtcclxuJGNvbG9yX2NhcmRfYmc6ICMxMDAyMjQ7XHJcbiRjb2xvcl9jYXJkX3NoYWRvdzogIzI5MDc1YTtcclxuXHJcbiRwYWdlX2JnMTogIzEyMDExYTtcclxuJHBhZ2VfYmcyOiAjMTIwMzM1O1xyXG5cclxuJGhlYWRlckhlaWdodDogNzBweDtcclxuJGZvb3RlckhlaWdodDogMzVweDtcclxuXHJcbiRncmlkLWJyZWFrcG9pbnRzLXhzOiAzODBweDtcclxuJGdyaWQtYnJlYWtwb2ludHMtc206IDU3NnB4O1xyXG4kZ3JpZC1icmVha3BvaW50cy1tZDogNzY4cHg7XHJcbiRncmlkLWJyZWFrcG9pbnRzLWxnOiA5OTJweDtcclxuJGdyaWQtYnJlYWtwb2ludHMteGw6IDEyMDBweDtcclxuJGdyaWQtYnJlYWtwb2ludHMteHhsOiAxNDAwcHg7XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | views-views-module */ "views-views-module").then(__webpack_require__.bind(null, /*! ./views/views.module */ "xzpJ")).then(m => m.ViewsModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\richa\Desktop\Code Factory\FrontEnd\ProjektWoche\FE12-Team2\Photography\src\main.ts */"zUnb");


/***/ }),

/***/ "1CDA":
/*!***********************************!*\
  !*** ./src/app/header.service.ts ***!
  \***********************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderService {
    constructor() { this.visible = false; }
    hide() { this.visible = false; }
    show() { this.visible = true; }
}
HeaderService.ɵfac = function HeaderService_Factory(t) { return new (t || HeaderService)(); };
HeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderService, factory: HeaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8v5C":
/*!************************************************************!*\
  !*** ./src/app/customers-page/customers-page.component.ts ***!
  \************************************************************/
/*! exports provided: CustomersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersPageComponent", function() { return CustomersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar.service */ "fwyt");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header.service */ "1CDA");



class CustomersPageComponent {
    constructor(nav, head) {
        this.nav = nav;
        this.head = head;
    }
    ngOnInit() {
        this.nav.show();
        this.head.show();
    }
}
CustomersPageComponent.ɵfac = function CustomersPageComponent_Factory(t) { return new (t || CustomersPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"])); };
CustomersPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomersPageComponent, selectors: [["app-customers-page"]], decls: 110, vars: 0, consts: [[1, "container"], [1, "font-weight-light", "text-center", "text-lg-left", "mt-4", "mb-0"], [1, "mt-2", "mb-5"], [1, "row", "text-center", "text-lg-left"], [1, "col-lg-3", "col-md-4", "col-xs-10"], ["href", "#", 1, "d-block", "mb-4", "h-100"], ["src", "https://cdn.iconscout.com/icon/free/png-256/ikea-1-283257.png", "alt", "logo", 1, "img-fluid", "img-thumbnail", "ownStyle"], ["src", "https://th.bing.com/th/id/Rfbef20a4f7a066478b6d137be002ed9a?rik=1wBuhQ%2bnjIPGgw&riu=http%3a%2f%2f2dm9jb42vj3t1pgffe40fox0.wpengine.netdna-cdn.com%2fwp-content%2fuploads%2f2018%2f02%2fclient4.jpg&ehk=ZGeAjgKac2BcZq0qTaeh%2fcpz%2bXB0pAZjAu6xnQaDBfI%3d&risl=&pid=ImgRaw", "alt", "logo", 1, "img-fluid", "img-thumbnail", "ownStyle"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVvcraxpEzSsMLSsbqtbbbQRt3gXqNP6F31A&usqp=CAU", "alt", "logo", 1, "img-fluid", "img-thumbnail", "ownStyle"], ["src", "https://th.bing.com/th/id/R11cd9f066ed0dca3cba52c08a0f1fd1a?rik=4s0Ufb4d6Ks6PQ&riu=http%3a%2f%2ftypographie.ml%2fwp-content%2fuploads%2f2019%2f10%2fJe-voudrais-vous-pr%C3%A9senter-la-bont%C3%A9-nouvelle-qu39est-Ethical-Made-Easy-ne.jpg&ehk=BXV2%2fSFPFkDK4xOeyzFGhwhGqOQyMPtqrPDIY%2bHFvx0%3d&risl=&pid=ImgRaw", "alt", "logo", 1, "img-fluid", "img-thumbnail", "ownStyle"], ["src", "https://th.bing.com/th/id/OIF.0x7wLJtRLFL29DlwZqvZpg?pid=ImgDet&rs=1", "alt", "logo", 1, "img-fluid", "img-thumbnail", "ownStyle"], ["src", "https://thumbs.dreamstime.com/b/orange-icon-vector-nature-collection-thin-line-outline-illustration-linear-symbol-use-web-mobile-apps-logo-print-142853341.jpg", "alt", "logo", 1, "img-fluid", "img-thumbnail", "ownStyle"], ["src", "https://th.bing.com/th/id/R0664af1c343fb2f218c791c825aa30da?rik=7bn2bBRexo5mMg&riu=http%3a%2f%2fwww.lustermagazine.com%2fwp-content%2fuploads%2f2017%2f04%2fMBFWCDMX.jpg&ehk=%2bUSdv5P09Um3dd4ILaOpaG0FudNEHcxp9yLNe5Txz1I%3d&risl=&pid=ImgRaw", "alt", "logo", 1, "img-fluid", "img-thumbnail", "ownStyle"], ["src", "https://i.pinimg.com/280x280_RS/d0/99/fc/d099fc6dc2a3ff6ddec09b6c04e52ced.jpg", "alt", "logo", 1, "img-fluid", "img-thumbnail", "ownStyle"], ["src", "https://th.bing.com/th/id/R4901431105652bfb275de66284a39020?rik=CZ1R%2flWQrbx4mg&riu=http%3a%2f%2fwww.willionaire.com%2fassets%2fimages%2flogo%2flogo-dark.png&ehk=Nj5%2fSUMwbkIqUD6wdrVWVKxKof7mp%2bFMAW2m12oQnZY%3d&risl=&pid=ImgRaw", "alt", "logo", 1, "img-fluid", "img-thumbnail", "ownStyle"], ["src", "https://rinnoo.net/f/CMS/Listings/1893_41495189_1890130284357691_1340399962403373056_N1_-_Qu80_RT1600x1024-_OS864x864-_RD864x864-.png", "alt", "logo", 1, "img-fluid", "img-thumbnail", "ownStyle"], ["src", "https://i.pinimg.com/736x/cb/c5/ca/cbc5cab89419da74f1951a6e8ed4f069.jpg", "alt", "logo", 1, "img-fluid", "img-thumbnail", "ownStyle"], ["src", "https://www.northernlightscharity.org.uk/media/uploads/2018/05/JD-Aerial-3.jpg", "alt", "logo", 1, "img-fluid", "img-thumbnail", "ownStyle"], ["id", "carouselExampleCaptions", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://cdn.wallpapersafari.com/43/74/aMPRBr.jpg", "alt", "wallpaper", 1, "d-block", "w-100", "mobileContainer"], [1, "carousel-caption", "d-md-block"], ["src", "https://montrose-env.com/wp-content/uploads/2017/09/200px_Steve-Kirschner.png", "alt", "image", 1, "rounded-circle", "img-fluid"], [1, "main"], [1, "fa", "fa-star", "checked"], [1, "carousel-item"], ["src", "https://d2uur722ua7fvv.cloudfront.net/photos/Dr-Laura-Arline-MD-212059-circle_large__v1__.png", "alt", "image", 1, "rounded-circle", "img-fluid"], ["src", "https://th.bing.com/th/id/Rfc57e848c62fd5a5f61e4635bce251ba?rik=CCnGKJMUfSgXpg&riu=http%3a%2f%2fctinnovations.com%2fwp-content%2fuploads%2f2017%2f06%2fRaphael-Santiago_BW.jpg&ehk=v2Qx8VBwAthncihuIMh5pSem9tyc3sCfnY90qLRNkts%3d&risl=&pid=ImgRaw", "alt", "image", 1, "rounded-circle", "img-fluid"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function CustomersPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Our Customers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Thank you, thank you, thank you! you are an expert in making everyone feel good, happy and welcome.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Calla G ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Darren is truly an outstanding photographer with an almost mystical ability to capture the true nature of people and events.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Laurie H ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Thank you is simply not enough. You have captured moments that our family will treasure forever. Such a pleasure to know you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "The Walsey Family ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\r\n    width: 600px;\r\n    padding-bottom: 60px;\r\n\r\n\r\n\r\n\r\n\r\n   }\r\n   p[_ngcontent-%COMP%]{\r\n       color: black;\r\n   }\r\n   h5[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{\r\n       color: black;\r\n     \r\n   }\r\n   .checked[_ngcontent-%COMP%] {\r\n       color: orange;\r\n       padding: 10px;\r\n      font-size: 20px;\r\n     }\r\n   img[_ngcontent-%COMP%]{\r\n\r\nbackground: rgba( 255, 255, 255, 0.25 );\r\nbox-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\r\nbackdrop-filter: blur( 4px );\r\n-webkit-backdrop-filter: blur( 4px );\r\nborder-radius: 10px;\r\nborder: 1px solid rgba( 255, 255, 255, 0.18 );\r\n\r\n   \r\n}\r\n   .rounded-circle[_ngcontent-%COMP%]{\r\n   width: 180px;\r\n \r\n\r\n}\r\n   .carousel-caption[_ngcontent-%COMP%]{\r\npadding: 20px!important;\r\nheight: 96%;\r\n}\r\n   button[_ngcontent-%COMP%] {\r\n    filter: invert(1);\r\n    \r\n}\r\n   .ownStyle[_ngcontent-%COMP%]{\r\n     width: 80vw;\r\n    \r\n }\r\n   @media (max-width: 575.98px) {\r\n     .container[_ngcontent-%COMP%]{\r\n         width: 80vw;\r\n     }\r\n     .mobileContainer[_ngcontent-%COMP%]{\r\n        height: 300px;\r\n       \r\n     }\r\n     .rounded-circle[_ngcontent-%COMP%]{\r\n        width: 80px;\r\n     } \r\n    \r\n    span[_ngcontent-%COMP%]{\r\n        width: 30px;\r\n    }\r\n     p[_ngcontent-%COMP%]{\r\n         font-size: 12px;\r\n     }\r\n     h3[_ngcontent-%COMP%]{\r\n         font-size: 15px;\r\n     }\r\n      \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVycy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9COzs7Ozs7R0FNckI7R0FDQTtPQUNJLFlBQVk7R0FDaEI7R0FFQTtPQUNJLFlBQVk7O0dBRWhCO0dBQ0E7T0FDSSxhQUFhO09BQ2IsYUFBYTtNQUNkLGVBQWU7S0FDaEI7R0FFTDs7QUFFQSx1Q0FBdUM7QUFDdkMsa0RBQWtEO0FBQ2xELDRCQUE0QjtBQUM1QixvQ0FBb0M7QUFDcEMsbUJBQW1CO0FBQ25CLDZDQUE2Qzs7O0FBRzdDO0dBQ0E7R0FDRyxZQUFZOzs7QUFHZjtHQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFdBQVc7QUFDWDtHQUdBO0lBQ0ksaUJBQWlCOztBQUVyQjtHQUVDO0tBQ0ksV0FBVzs7Q0FFZjtHQUVBO0tBQ0k7U0FDSSxXQUFXO0tBQ2Y7S0FDQTtRQUNHLGFBQWE7O0tBRWhCO0tBQ0E7UUFDRyxXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxXQUFXO0lBQ2Y7S0FDQztTQUNJLGVBQWU7S0FDbkI7S0FDQTtTQUNJLGVBQWU7S0FDbkI7O0VBRUgiLCJmaWxlIjoiY3VzdG9tZXJzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICB9XHJcbiAgIHB7XHJcbiAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgIH1cclxuICAgXHJcbiAgIGg1ICxoM3tcclxuICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICBcclxuICAgfVxyXG4gICAuY2hlY2tlZCB7XHJcbiAgICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgIH1cclxuICAgIFxyXG5pbWd7XHJcblxyXG5iYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjI1ICk7XHJcbmJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xyXG5iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDRweCApO1xyXG4td2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggNHB4ICk7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcclxuXHJcbiAgIFxyXG59XHJcbi5yb3VuZGVkLWNpcmNsZXtcclxuICAgd2lkdGg6IDE4MHB4O1xyXG4gXHJcblxyXG59IFxyXG4uY2Fyb3VzZWwtY2FwdGlvbntcclxucGFkZGluZzogMjBweCFpbXBvcnRhbnQ7XHJcbmhlaWdodDogOTYlO1xyXG59IFxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcclxuICAgIFxyXG59XHJcblxyXG4gLm93blN0eWxle1xyXG4gICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgXHJcbiB9XHJcbiBcclxuIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgIH1cclxuICAgICAubW9iaWxlQ29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICBcclxuICAgICB9XHJcbiAgICAgLnJvdW5kZWQtY2lyY2xle1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgIH0gXHJcbiAgICBcclxuICAgIHNwYW57XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAgcHtcclxuICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgIH1cclxuICAgICBoM3tcclxuICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgIH1cclxuICAgICAgXHJcbiAgfVxyXG4gIFxyXG4gICAgXHJcbiAgIFxyXG4gICAgXHJcbiAgICAgICBcclxuICAgIFxyXG4gIl19 */"] });


/***/ }),

/***/ "9JoL":
/*!****************************************************!*\
  !*** ./src/app/offer-page/offer-page.component.ts ***!
  \****************************************************/
/*! exports provided: OfferPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPageComponent", function() { return OfferPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar.service */ "fwyt");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header.service */ "1CDA");



class OfferPageComponent {
    constructor(nav, head) {
        this.nav = nav;
        this.head = head;
    }
    ngOnInit() {
        this.nav.show();
        this.head.show();
    }
}
OfferPageComponent.ɵfac = function OfferPageComponent_Factory(t) { return new (t || OfferPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"])); };
OfferPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OfferPageComponent, selectors: [["app-offer-page"]], decls: 38, vars: 0, consts: [[1, "container", "mb-5"], [1, "text-center"], [1, "text-center", "mb-5"], [1, "row", "row-cols-1", "row-cols-md-2", "g-4"], [1, "col"], [1, "card", "h-100"], ["src", "assets/img/offer/Portrait.jpg", "alt", "portrait", 1, "card-img-top"], [1, "card-body"], [1, "card-title", "text-center"], [1, "card-text"], ["src", "assets/img/offer/family.jpg", "alt", "family", 1, "card-img-top"], ["src", "assets/img/offer/Mariage.jpg", "alt", "wedding", 1, "card-img-top"], ["src", "assets/img/offer/Product.jpg", "alt", "products", 1, "card-img-top"]], template: function OfferPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Our Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(prices on request)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Passport Photo / Portrait Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "The first impression counts, which makes it all the more important for companies, business customers and applicants to optimize their external impact with meaningful images. In addition to portrait photos for companies and professional application photos, I also offer photo shoots for people who want to capture special moments for private use with a portrait photo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Family Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "If you want something special as a couple or as a family (from fun to romantic-dreamy to easy-going) - really beautiful and extraordinary photos of you - then I am your photographer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Wedding Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "I capture your wedding from an observer's perspective as it really happens. I work as unobtrusively as possible and don't focus on myself. No way is too far for me and I look forward to your inquiry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Product Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "The competition never sleeps - regardless of whether it is a catalog, poster, Internet advertising or presentation in an online shop - advertising photos that are as detailed as possible are essential for sales success.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\r\n    border-radius: 15px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 100%;    \r\n    height: 26em;       \r\n    object-fit: cover; \r\n    object-position: 50% 50%; \r\n\r\n\r\n    border-top-left-radius: 15px;\r\n    border-top-right-radius: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVyLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVcsS0FBSyx3QkFBd0I7SUFDeEMsWUFBWSxRQUFRLHlCQUF5QjtJQUM3QyxpQkFBaUIsRUFBRSxvREFBb0Q7SUFDdkUsd0JBQXdCLEVBQUUsOEJBQThCOzs7SUFHeEQsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJvZmZlci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgIC8qb3IgMTAwJSBvZiBjb250YWluZXIgKi9cclxuICAgIGhlaWdodDogMjZlbTsgICAgICAgLyogb3IgMTAwJSBvZiBjb250YWluZXIgKi9cclxuICAgIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBub25lIGNhbiBiZSBhbiBvcHRpb24gdG9vIGFzIGNvdmVyIG1heSBkZWZvcm0gaXQqL1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgNTAlOyAvKiBpZiBib3RoIDUwJSB3aWxsIGNlbnRlciBpdCovXHJcblxyXG5cclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "9gJT":
/*!************************************************************!*\
  !*** ./src/app/portfolio-page/portfolio-page.component.ts ***!
  \************************************************************/
/*! exports provided: PortfolioPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPageComponent", function() { return PortfolioPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar.service */ "fwyt");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header.service */ "1CDA");



class PortfolioPageComponent {
    constructor(nav, head) {
        this.nav = nav;
        this.head = head;
    }
    ngOnInit() {
        this.nav.show();
        this.head.show();
    }
}
PortfolioPageComponent.ɵfac = function PortfolioPageComponent_Factory(t) { return new (t || PortfolioPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"])); };
PortfolioPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioPageComponent, selectors: [["app-portfolio-page"]], decls: 145, vars: 0, consts: [[1, "container"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs", "own-btn"], ["id", "nav-nature-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-nature", "type", "button", "role", "tab", "aria-controls", "nav-nature", "aria-selected", "true", 1, "nav-link", "active"], ["id", "nav-people-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-people", "type", "button", "role", "tab", "aria-controls", "nav-people", "aria-selected", "false", 1, "nav-link"], ["id", "nav-random-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-random", "type", "button", "role", "tab", "aria-controls", "nav-random", "aria-selected", "false", 1, "nav-link"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-nature", "role", "tabpanel", "aria-labelledby", "nav-nature-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2", "aria-label", "Slide 3"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "3", "aria-label", "Slide 4"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "4", "aria-label", "Slide 5"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "5", "aria-label", "Slide 6"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "6", "aria-label", "Slide 7"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "7", "aria-label", "Slide 8"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "8", "aria-label", "Slide 9"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "9", "aria-label", "Slide 10"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "10", "aria-label", "Slide 11"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "11", "aria-label", "Slide 12"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "12", "aria-label", "Slide 13"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "13", "aria-label", "Slide 14"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "14", "aria-label", "Slide 15"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/img/portfolio/nature/DSC_2830.jpg", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "assets/img/portfolio/nature/DSC_2851-2.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/nature/DSC_2926.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/nature/DSC_3342-2.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/nature/DSC_4298.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/nature/DSC_4445.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/nature/DSC_5264.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/nature/DSC_5336-3.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/nature/DSC_7015.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/nature/DSC_7036.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/nature/DSC_7052.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/nature/DSC_7244.jpg", "alt", "...", 1, "d-block", "w-100", "resize"], ["src", "assets/img/portfolio/nature/DSC_8263.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/nature/DSC_8928.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/nature/DSC_9041.jpg", "alt", "...", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["id", "nav-people", "role", "tabpanel", "aria-labelledby", "nav-people-tab", 1, "tab-pane", "fade"], ["id", "carouselExampleIndicators2", "data-bs-ride", "carousel2", 1, "carousel", "slide"], ["type", "button", "data-bs-target", "#carouselExampleIndicators2", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators2", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators2", "data-bs-slide-to", "2", "aria-label", "Slide 3"], ["type", "button", "data-bs-target", "#carouselExampleIndicators2", "data-bs-slide-to", "3", "aria-label", "Slide 4"], ["type", "button", "data-bs-target", "#carouselExampleIndicators2", "data-bs-slide-to", "4", "aria-label", "Slide 5"], ["type", "button", "data-bs-target", "#carouselExampleIndicators2", "data-bs-slide-to", "5", "aria-label", "Slide 6"], ["type", "button", "data-bs-target", "#carouselExampleIndicators2", "data-bs-slide-to", "6", "aria-label", "Slide 7"], ["type", "button", "data-bs-target", "#carouselExampleIndicators2", "data-bs-slide-to", "7", "aria-label", "Slide 8"], ["src", "assets/img/portfolio/people/DSC_0087-1.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/people/DSC_3392-2.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/people/DSC_3754.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/people/DSC_4502.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/people/DSC_7983.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/people/DSC_7985.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/people/DSC_8027.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/people/DSC_8089.jpg", "alt", "...", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carouselExampleIndicators2", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["type", "button", "data-bs-target", "#carouselExampleIndicators2", "data-bs-slide", "next", 1, "carousel-control-next"], ["id", "nav-random", "role", "tabpanel", "aria-labelledby", "nav-random-tab", 1, "tab-pane", "fade"], ["id", "carouselExampleIndicators3", "data-bs-ride", "carousel3", 1, "carousel", "slide"], ["type", "button", "data-bs-target", "#carouselExampleIndicators3", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators3", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators3", "data-bs-slide-to", "2", "aria-label", "Slide 3"], ["type", "button", "data-bs-target", "#carouselExampleIndicators3", "data-bs-slide-to", "3", "aria-label", "Slide 4"], ["type", "button", "data-bs-target", "#carouselExampleIndicators3", "data-bs-slide-to", "4", "aria-label", "Slide 5"], ["type", "button", "data-bs-target", "#carouselExampleIndicators3", "data-bs-slide-to", "5", "aria-label", "Slide 6"], ["type", "button", "data-bs-target", "#carouselExampleIndicators3", "data-bs-slide-to", "6", "aria-label", "Slide 7"], ["type", "button", "data-bs-target", "#carouselExampleIndicators3", "data-bs-slide-to", "7", "aria-label", "Slide 8"], ["type", "button", "data-bs-target", "#carouselExampleIndicators3", "data-bs-slide-to", "8", "aria-label", "Slide 9"], ["type", "button", "data-bs-target", "#carouselExampleIndicators3", "data-bs-slide-to", "9", "aria-label", "Slide 10"], ["src", "assets/img/portfolio/random/DSC_0173-1.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/random/DSC_0512-1.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/random/DSC_2778-2.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/random/DSC_2863-2.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/random/DSC_2946.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/random/DSC_2952.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/random/DSC_6389.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/random/DSC_6475.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/random/DSC_7252.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/img/portfolio/random/DSC_8016.jpg", "alt", "...", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carouselExampleIndicators3", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["type", "button", "data-bs-target", "#carouselExampleIndicators3", "data-bs-slide", "next", 1, "carousel-control-next"]], template: function PortfolioPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Nature ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " People ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Random ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".own-btn[_ngcontent-%COMP%] {\r\n  justify-content: space-evenly;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.own-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  line-height: 2em;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  margin-bottom: 5em;\r\n}\r\n\r\n.resize[_ngcontent-%COMP%] {\r\n  max-height: 1000px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InBvcnRmb2xpby1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3duLWJ0biB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4ub3duLWJ0biBidXR0b24ge1xyXG4gIGxpbmUtaGVpZ2h0OiAyZW07XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNWVtO1xyXG59XHJcblxyXG4ucmVzaXplIHtcclxuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XHJcbn1cclxuIl19 */"] });


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

/***/ "HioS":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar.service */ "fwyt");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header.service */ "1CDA");



class AboutPageComponent {
    constructor(nav, head) {
        this.nav = nav;
        this.head = head;
    }
    ngOnInit() {
        this.nav.show();
        this.head.show();
    }
}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"])); };
AboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutPageComponent, selectors: [["app-about-page"]], decls: 45, vars: 0, consts: [[1, "container", "aboutWrapper"], [1, "container", "aboutInner", "mb-4"], [1, "heading", "mb-4"], [1, "row", "fs-4", "quote"], [1, "col-12", "mb-4", "fst-italic"], [1, "row", "pt-4", "mb-5"], [1, "col-12", "col-md-6"], [1, "fw-light"], [1, "row", "mb-5"], [1, "col-12"], [1, "row", "people", "mb-4"], [1, "col-12", "col-md-3"], ["src", "assets/img/about/Photograph-tiny.png", "alt", "photographer", 1, "rounded-circle", "img-fluid"], [1, "col-12", "col-md-9"], [1, "fst-italic"], [1, "row"], ["src", "assets/img/about/PhotographersWife-tiny.png", "alt", "art director", 1, "rounded-circle", "img-fluid"]], template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We know that good photography is not only a job. It is a passion, where you put in your heart and soul. It's a lifestyle!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Our goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "We always aim to reach for the stars. Each client will feel that when watching the end result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Our promise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Every customer gets a tailor-made solution for his request. We will not stop until reaching that.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Our story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Grown up in a small town in Ohio I got my first camera at the age of 4. I always wanted to get away from the rural small-town idyll and discover the big wide world. With the camera in my pocket that meant to be easy. After meeting my wonderful wife Meghan, I kept staying in Vienna and fulfilled my dream of opening my own photo studio. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Darren Woolridge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Photographer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "30 years experience in photography - Ohio native - Globetrotter - proud father - love french fries with cheese and chili");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Meghan Woolridge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Art Director");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "long experience in image editing - Florida native - Passion for old furniture- proud mother - love everything with Matcha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".aboutWrapper[_ngcontent-%COMP%] {\r\n    background-image: url('DSC_7052.jpg');\r\n    background-size: cover;\r\n    \r\n    \r\n    color: lightgray;\r\n    \r\n}\r\n\r\n.aboutInner[_ngcontent-%COMP%] {\r\n    padding: 2vw 10vw 3vw 30vw;\r\n}\r\n\r\n.quote[_ngcontent-%COMP%] {\r\n    margin-bottom: 3vw;\r\n}\r\n\r\n.people[_ngcontent-%COMP%] {\r\n    margin-top: 7vw;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    text-shadow: 2px 2px 4px black;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n    font-size: 0.85em;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 0.8em;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 575.98px) {\r\n    .aboutInner[_ngcontent-%COMP%]{\r\n        margin: 0!important;\r\n        padding: 0!important; \r\n       padding-top:5vh!important;\r\n       padding-left: 1vh!important;\r\n       \r\n    } \r\n   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxxQ0FBMkQ7SUFDM0Qsc0JBQXNCOztJQUV0QixtQkFBbUI7SUFDbkIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7Ozs7Ozs7S0FPSzs7QUFDSDtJQUNFO1FBQ0ksbUJBQW1CO1FBQ25CLG9CQUFvQjtPQUNyQix5QkFBeUI7T0FDekIsMkJBQTJCOztJQUU5Qjs7QUFFSiIsImZpbGUiOiJhYm91dC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFib3V0V3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2hlcm8vRFNDXzcwNTIuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIFxyXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBcclxufVxyXG5cclxuLmFib3V0SW5uZXIge1xyXG4gICAgcGFkZGluZzogMnZ3IDEwdncgM3Z3IDMwdnc7XHJcbn1cclxuXHJcbi5xdW90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzdnc7XHJcbn1cclxuXHJcbi5wZW9wbGUge1xyXG4gICAgbWFyZ2luLXRvcDogN3Z3O1xyXG59XHJcblxyXG5oMSwgaDUsIHAge1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IGJsYWNrO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgICBmb250LXNpemU6IDAuODVlbTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzBweCkge1xyXG4gICAgLmFib3V0SW5uZXIge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1dnc7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4dnc7XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICB9ICovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAuYWJvdXRJbm5lcntcclxuICAgICAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50OyBcclxuICAgICAgIHBhZGRpbmctdG9wOjV2aCFpbXBvcnRhbnQ7XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDF2aCFpbXBvcnRhbnQ7XHJcbiAgICAgICBcclxuICAgIH0gXHJcbiAgIFxyXG59Il19 */"] });


/***/ }),

/***/ "PknT":
/*!**********************************************************!*\
  !*** ./src/app/documentation/documentation.component.ts ***!
  \**********************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar.service */ "fwyt");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header.service */ "1CDA");



class DocumentationComponent {
    constructor(nav, head) {
        this.nav = nav;
        this.head = head;
    }
    ngOnInit() {
        this.nav.show();
        this.head.show();
    }
}
DocumentationComponent.ɵfac = function DocumentationComponent_Factory(t) { return new (t || DocumentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"])); };
DocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentationComponent, selectors: [["app-documentation"]], decls: 125, vars: 0, consts: [[1, "container"], [1, "d-flex", "align-items-start"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills", "me-3"], ["id", "v-pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-home", "type", "button", "role", "tab", "aria-controls", "v-pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "v-pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-profile", "type", "button", "role", "tab", "aria-controls", "v-pills-profile", "aria-selected", "false", 1, "nav-link"], ["id", "v-pills-messages-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-messages", "type", "button", "role", "tab", "aria-controls", "v-pills-messages", "aria-selected", "false", 1, "nav-link"], ["id", "v-pills-settings-tab", "data-bs-toggle", "pill", "data-bs-target", "#v-pills-settings", "type", "button", "role", "tab", "aria-controls", "v-pills-settings", "aria-selected", "false", 1, "nav-link"], ["id", "v-pills-tabContent", 1, "tab-content"], ["id", "v-pills-home", "role", "tabpanel", "aria-labelledby", "v-pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "figure"], ["src", "assets/img/documentation/First_Interaction.PNG", "alt", "...", 1, "figure-img", "img-fluid", "rounded"], [1, "list-group"], [1, "list-group-item"], ["src", "assets/img/documentation/Trello.PNG", "alt", "...", 1, "figure-img", "img-fluid", "rounded"], ["src", "assets/img/documentation/Photography.png", "alt", "...", 1, "figure-img", "img-fluid", "rounded"], ["id", "v-pills-profile", "role", "tabpanel", "aria-labelledby", "v-pills-profile-tab", 1, "tab-pane", "fade"], ["src", "assets/img/documentation/Second_Day.png", "alt", "...", 1, "figure-img", "img-fluid", "rounded"], ["src", "assets/img/documentation/step1.png", "alt", "...", 1, "figure-img", "img-fluid", "rounded"], ["src", "assets/img/documentation/step2.png", "alt", "...", 1, "figure-img", "img-fluid", "rounded"], ["src", "assets/img/documentation/step3.png", "alt", "...", 1, "figure-img", "img-fluid", "rounded"], ["src", "assets/img/documentation/step4.png", "alt", "...", 1, "figure-img", "img-fluid", "rounded"], ["src", "assets/img/documentation/step5.png", "alt", "...", 1, "figure-img", "img-fluid", "rounded"], ["id", "v-pills-messages", "role", "tabpanel", "aria-labelledby", "v-pills-messages-tab", 1, "tab-pane", "fade"], ["id", "v-pills-settings", "role", "tabpanel", "aria-labelledby", "v-pills-settings-tab", 1, "tab-pane", "fade"]], template: function DocumentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Day 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Day 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Day 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Day 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "figure", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "First Interaction with the Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "First Zoom Meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Deciding who is Leader and Presenter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Which Project to choose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "What Technology we use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Searching for Inspiration for a website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Creating a Trello Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Starting working on the Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "figure", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Trello Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "figure", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Scetch how the components should look");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Second Zoom Meeting in the Afternoon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Talking about progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Discuss what should be changed and/or improved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Scheduled the next days meeting in the morning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "figure", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Everyones here, except Richard. He overslept.... \uD83D\uDE1C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Zoom Meeting in the morning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Fixed some problems with the Landingpage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Discuss what should be changed and/or improved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "What tasks should be made today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Scheduled the next meeting in the afternoon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "How we managed that the navbar and the header are not shown on the landing page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "figure", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Step 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " created navbar.service.ts and header.service.ts with two functions for hide and show.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "figure", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Step 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " import navbar.service.ts and header.service.ts in navbar.components.ts and header.component.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "figure", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Step 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " created *ngIf in navbar.components.html nav-tag and header.component.html in header-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "figure", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Step 4:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " import navbar.service.ts and header.service.ts in landing-page-componant.ts and call the funktions to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " the Navbar and the Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "figure", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Step 5:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " import navbar.service.ts and header.service.ts in all page-componant.ts without the landing-page and call the funktions to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " the Navbar and the Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Zoom Meeting in the morning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Discuss what we could improve or implement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Decided to Implement an Offers Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Tried to Implement an webcam/selfie page but got rid of it since the knowledge for backend is missing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "After Lunch we decided to take the rest of the day of and enjoy the sun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Zoom Meeting in the morning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Going over the site and looked for bugs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Got rid of Bugs/Typos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Finished Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".list-group[_ngcontent-%COMP%] {\r\n    margin: 1.5em 0 1.5em 0;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    min-height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJkb2N1bWVudGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cCB7XHJcbiAgICBtYXJnaW46IDEuNWVtIDAgMS41ZW0gMDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor() {
        this.title = 'Photography';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio-page/portfolio-page.component */ "9gJT");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-page/about-page.component */ "HioS");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "kGaf");
/* harmony import */ var _customers_page_customers_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customers-page/customers-page.component */ "8v5C");
/* harmony import */ var _testimonial_page_testimonial_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./testimonial-page/testimonial-page.component */ "s4pY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "dEEo");
/* harmony import */ var _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./imprint/imprint.component */ "jXtx");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./documentation/documentation.component */ "PknT");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-webcam */ "QKVY");
/* harmony import */ var _offer_page_offer_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./offer-page/offer-page.component */ "9JoL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_16__["WebcamModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"],
        _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioPageComponent"],
        _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_6__["AboutPageComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_8__["ContactPageComponent"],
        _customers_page_customers_page_component__WEBPACK_IMPORTED_MODULE_9__["CustomersPageComponent"],
        _testimonial_page_testimonial_page_component__WEBPACK_IMPORTED_MODULE_10__["TestimonialPageComponent"],
        _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_12__["PrivacyPolicyComponent"],
        _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_13__["ImprintComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_15__["DocumentationComponent"],
        _offer_page_offer_page_component__WEBPACK_IMPORTED_MODULE_17__["OfferPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        ngx_webcam__WEBPACK_IMPORTED_MODULE_16__["WebcamModule"]] }); })();


/***/ }),

/***/ "dEEo":
/*!************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
  \************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar.service */ "fwyt");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header.service */ "1CDA");



class PrivacyPolicyComponent {
    constructor(nav, head) {
        this.nav = nav;
        this.head = head;
    }
    ngOnInit() {
        this.nav.show();
        this.head.show();
    }
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"])); };
PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 445, vars: 0, consts: [[1, "container"], [1, "adsimple-211143947"], ["href", "https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&tid=211143947", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "external"], ["role", "img", "src", "https://www.adsimple.at/wp-content/uploads/2018/03/browser-und-webserver.svg", "alt", "Browser und Webserver", "width", "100%"], ["href", "https://support.google.com/chrome/answer/95647?tid=211143947", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "external"], ["href", "https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=211143947", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "external"], ["href", "https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=211143947", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "external"], ["href", "https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=211143947", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "external"], ["href", "https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=211143947", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "external"], ["href", "https://tools.ietf.org/html/rfc6265", "target", "_blank", "rel", "nofollow noopener noreferrer", 1, "external"], ["href", "https://help.instagram.com/519522125107875?tid=211143947", "target", "_blank", "rel", "noopener nofollow", 1, "external"], ["href", "https://policies.google.com/privacy?hl=de&tid=211143947", "target", "_blank", "rel", "noopener nofollow", 1, "external"], ["href", "https://www.facebook.com/about/privacy?tid=211143947", "target", "_blank", "rel", "noopener nofollow", 1, "external"], ["href", "https://twitter.com/de/privacy?tid=211143947", "target", "_blank", "rel", "noopener nofollow", 1, "external"], ["href", "https://www.facebook.com/policies/cookies?tid=211143947", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "external"], ["href", "https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC", "target", "_blank", "rel", "follow noopener noreferrer", 1, "external"], ["href", "https://www.facebook.com/about/privacy/update", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "external"], ["href", "http://www.instagram.com?tid=211143947", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "external"], ["href", "https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "external"], ["href", "https://help.instagram.com/519522125107875", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "external"], [2, "margin-top", "15px"], ["title", "Datenschutz Generator von firmenwebseiten.at", "href", "https://www.firmenwebseiten.at/datenschutz-generator/", "target", "_blank", "rel", "follow"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Datenschutzerkl\u00E4rung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Speicherung pers\u00F6nlicher Daten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pers\u00F6nliche Daten, die Sie uns auf dieser Website elektronisch \u00FCbermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder andere pers\u00F6nlichen Angaben im Rahmen der \u00DCbermittlung eines Formulars oder Kommentaren im Blog, werden von uns gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Wir nutzen Ihre pers\u00F6nlichen Daten somit nur f\u00FCr die Kommunikation mit jenen Besuchern, die Kontakt ausdr\u00FCcklich w\u00FCnschen und f\u00FCr die Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und Produkte. Wir geben Ihre pers\u00F6nlichen Daten ohne Zustimmung nicht weiter, k\u00F6nnen jedoch nicht ausschlie\u00DFen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Wenn Sie uns pers\u00F6nliche Daten per E-Mail schicken \u2013 somit abseits dieser Webseite \u2013 k\u00F6nnen wir keine sichere \u00DCbertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten niemals unverschl\u00FCsselt per E-Mail zu \u00FCbermitteln.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Datenschutz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Wir haben diese Datenschutzerkl\u00E4rung (Fassung 30.03.2021-211143947) verfasst, um Ihnen gem\u00E4\u00DF der Vorgaben der ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Datenschutz-Grundverordnung (EU) 2016/679");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " zu erkl\u00E4ren, welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsm\u00F6glichkeiten Sie als Besucher dieser Webseite haben.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Datenschutzerkl\u00E4rungen klingen f\u00FCr gew\u00F6hnlich sehr technisch. Diese Version soll Ihnen hingegen die wichtigsten Dinge so einfach und klar wie m\u00F6glich beschreiben. Soweit es m\u00F6glich ist, werden technische Begriffe leserfreundlich erkl\u00E4rt. Au\u00DFerdem m\u00F6chten wir vermitteln, dass wir mit dieser Website nur dann Informationen sammeln und verwenden, wenn eine entsprechende gesetzliche Grundlage gegeben ist. Das ist sicher nicht m\u00F6glich, wenn man m\u00F6glichst knappe, technische Erkl\u00E4rungen abgibt, so wie sie im Internet oft Standard sind, wenn es um Datenschutz geht. Ich hoffe Sie finden die folgenden Erl\u00E4uterungen interessant und informativ und vielleicht ist die eine oder andere Information dabei, die Sie noch nicht kannten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\nWenn trotzdem Fragen bleiben, m\u00F6chten wir Sie bitten den vorhandenen Links zu folgen und sich weitere Informationen auf Drittseiten anzusehen, oder uns einfach eine E-Mail zu schreiben. Unsere Kontaktdaten finden Sie im Impressum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Automatische Datenspeicherung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Wenn Sie heutzutage Websites besuchen, werden gewisse Informationen automatisch erstellt und gespeichert, so auch auf dieser Website. Diese gesammelten Daten sollten m\u00F6glichst sparsam und nur mit Begr\u00FCndung gesammelt werden werden. Mit Website meinen wir \u00FCbrigens die Gesamtheit aller Webseiten auf Ihrer Domain, d.h. alles von der Startseite (Homepage) bis hin zur aller letzten Unterseite (wie dieser hier). Mit Domain meinen wir zum Beispiel beispiel.de oder musterbeispiel.com.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Auch w\u00E4hrend Sie unsere Website jetzt gerade besuchen, speichert unser Webserver \u2013 das ist der Computer auf dem diese Webseite gespeichert ist \u2013\u00A0 aus Gr\u00FCnden der Betriebssicherheit, zur Erstellung von Zugriffsstatistik usw. in der Regel automatisch Daten wie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "die komplette Internetadresse (URL) der aufgerufenen Webseite (z. B. https://www.beispielwebsite.de/beispielunterseite.html/)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Browser und Browserversion (z. B. Chrome 87)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "das verwendete Betriebssystem (z. B. Windows 10)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "die Adresse (URL) der zuvor besuchten Seite (Referrer URL) (z. B. https://www.beispielquellsite.de/vondabinichgekommen.html/)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "den Hostname und die IP-Adresse des Ger\u00E4ts von welchem aus zugegriffen wird (z. B. COMPUTERNAME und 194.23.43.121)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Datum und Uhrzeit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "in Dateien, den sogenannten Webserver-Logfiles.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Zur Veranschaulichung:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "In der Regel werden diese Dateien zwei Wochen gespeichert und danach automatisch gel\u00F6scht. Wir geben diese Daten nicht weiter, k\u00F6nnen jedoch nicht ausschlie\u00DFen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten von Beh\u00F6rden eingesehen werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Kurz gesagt: Ihr Besuch wird durch unseren Provider (Firma, die unsere Website auf speziellen Computern (Servern) laufen l\u00E4sst), protokolliert, aber wir geben Ihre Daten nicht weiter!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Unsere Webseite verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\nIm Folgenden erkl\u00E4ren wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerkl\u00E4rung besser verstehen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Was genau sind Cookies?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Webseiten speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Eines ist nicht von der Hand zu weisen: Cookies sind echt n\u00FCtzliche Helferlein. Fast alle Webseiten verwenden\u00A0Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies f\u00FCr andere Anwendungsbereiche gibt. HTTP-Cookies\u00A0sind kleine Dateien, die von unserer Webseite auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem \u201EHirn\u201C Ihres Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies m\u00FCssen zus\u00E4tzlich ein oder mehrere Attribute angegeben werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Cookies\u00A0speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder pers\u00F6nliche Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, \u00FCbermittelt Ihr Browser die \u201Euserbezogenen\u201C Informationen an unsere Seite zur\u00FCck. Dank der Cookies wei\u00DF unsere Webseite, wer Sie sind und bietet Ihnen die Einstellung, die Sie gewohnt sind. In einigen Browsern hat jedes\u00A0Cookie\u00A0eine eigene Datei, in anderen wie beispielsweise Firefox sind alle\u00A0Cookies\u00A0in einer einzigen Datei gespeichert.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Webseiten (z.B. Google Analytics) erstellt.\u00A0Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren.\u00A0Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder andere \u201ESch\u00E4dlinge\u201C. Cookies k\u00F6nnen auch nicht auf Informationen Ihres PCs zugreifen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "So k\u00F6nnen zum Beispiel Cookie-Daten aussehen:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " _ga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Wert:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u00A0GA1.2.1326744211.152211143947-9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Verwendungszweck:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Unterscheidung der Webseitenbesucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Ablaufdatum:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u00A0nach 2 Jahren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Diese Mindestgr\u00F6\u00DFen sollte ein Browser unterst\u00FCtzen k\u00F6nnen:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Mindestens 4096 Bytes pro Cookie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Mindestens 50 Cookies pro Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Mindestens 3000 Cookies insgesamt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Welche Arten von Cookies gibt es?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Die Frage welche Cookies wir im Speziellen verwenden, h\u00E4ngt von den verwendeten Diensten ab und wird in den folgenden Abschnitten der Datenschutzerkl\u00E4rung gekl\u00E4rt. An dieser Stelle m\u00F6chten wir kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Man kann 4 Arten von Cookies unterscheiden:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Unerl\u00E4ssliche Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Diese Cookies sind n\u00F6tig, um grundlegende Funktionen der Webseite sicherzustellen. Zum Beispiel braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft und sp\u00E4ter erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gel\u00F6scht, selbst wenn der User sein Browserfenster schlie\u00DFt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Zweckm\u00E4\u00DFige Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Diese Cookies sammeln Infos \u00FCber das Userverhalten und ob der User etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Webseite bei verschiedenen Browsern gemessen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Zielorientierte Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Diese Cookies sorgen f\u00FCr eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene Standorte, Schriftgr\u00F6\u00DFen oder Formulardaten gespeichert.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Werbe-Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u00DCblicherweise werden Sie beim erstmaligen Besuch einer Webseite gefragt, welche dieser Cookiearten Sie zulassen m\u00F6chten. Und nat\u00FCrlich wird diese Entscheidung auch in einem Cookie gespeichert.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Wie kann ich Cookies l\u00F6schen?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabh\u00E4ngig von welchem Service oder welcher Webseite die Cookies stammen, haben Sie immer die M\u00F6glichkeit\u00A0Cookies zu l\u00F6schen, zu deaktivieren oder nur teilweise zuzulassen. Zum Beispiel k\u00F6nnen Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Wenn Sie feststellen m\u00F6chten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie Cookie-Einstellungen \u00E4ndern oder l\u00F6schen wollen, k\u00F6nnen Sie dies in Ihren Browser-Einstellungen finden:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Chrome: Cookies in Chrome l\u00F6schen, aktivieren und verwalten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Safari: Verwalten von Cookies und Websitedaten mit Safari");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Firefox: Cookies l\u00F6schen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Internet Explorer: L\u00F6schen und Verwalten von Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Microsoft Edge: L\u00F6schen und Verwalten von Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Falls Sie grunds\u00E4tzlich keine Cookies haben wollen, k\u00F6nnen Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So k\u00F6nnen Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten Sie suchen die Anleitung in Google mit dem Suchbegriff \u201CCookies l\u00F6schen Chrome\u201D oder \u201ECookies deaktivieren Chrome\u201C im Falle eines Chrome Browsers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Wie sieht es mit meinem Datenschutz aus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Seit 2009 gibt es die sogenannten \u201ECookie-Richtlinien\u201C. Darin ist festgehalten, dass das Speichern von Cookies eine Einwilligung von Ihnen verlangt. Innerhalb der EU-L\u00E4nder gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In \u00D6sterreich erfolgte aber die Umsetzung dieser Richtlinie in \u00A7 96 Abs. 3 des Telekommunikationsgesetzes (TKG).\u00A0In Deutschland wurden die Cookie-Richtlinien nicht als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in \u00A7 15 Abs.3 des Telemediengesetzes (TMG).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Wenn Sie mehr \u00FCber Cookies wissen m\u00F6chten und technische Dokumentationen nicht scheuen, empfehlen wir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "https://tools.ietf.org/html/rfc6265");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, ", dem Request for Comments der Internet Engineering Task Force (IETF) namens \u201EHTTP State Management Mechanism\u201C..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Eingebettete Social Media Elemente Datenschutzerkl\u00E4rung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Wir binden auf unserer Webseite Elemente von Social Media Diensten ein um Bilder, Videos und Texte anzuzeigen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "\nDurch den Besuch von Seiten die diese Elemente darstellen, werden Daten von Ihrem Browser zum jeweiligen Social Media Dienst \u00FCbertragen und dort gespeichert. Wir haben keinen Zugriff auf diese Daten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "\nDie folgenden Links f\u00FChren Sie zu den Seiten der jeweiligen Social Media Dienste wo erkl\u00E4rt wird, wie diese mit Ihren Daten umgehen:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Instagram-Datenschutzrichtlinie: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "https://help.instagram.com/519522125107875");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "F\u00FCr YouTube gilt die Google Datenschutzerkl\u00E4rung: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "https://policies.google.com/privacy?hl=de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Facebook-Datenrichtline:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "https://www.facebook.com/about/privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Twitter Datenschutzrichtlinie:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "https://twitter.com/de/privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Facebook Datenschutzerkl\u00E4rung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Wir verwenden auf unserer Webseite ausgew\u00E4hlte Tools von Facebook. Facebook ist ein Social Media Network des Unternehmens Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2 Ireland. Mithilfe dieser Tools k\u00F6nnen wir Ihnen und Menschen, die sich f\u00FCr unsere Produkte und Dienstleistungen interessieren, das bestm\u00F6gliche Angebot bieten. Im Folgenden geben wir einen \u00DCberblick \u00FCber die verschiedenen Facebook Tools, welche Daten an Facebook gesendet werden und wie Sie diese Daten l\u00F6schen k\u00F6nnen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Was sind Facebook-Tools?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Neben vielen anderen Produkten bietet Facebook auch die sogenannten \u201EFacebook Business Tools\u201C an.\u00A0Das ist die offizielle Bezeichnung von Facebook. Da der Begriff aber kaum bekannt ist, haben wir uns daf\u00FCr entschieden, sie lediglich Facebook-Tools zu nennen. Darunter finden sich unter anderem:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Facebook-Pixel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "soziale Plug-ins (wie z.B der \u201EGef\u00E4llt mir\u201C- oder \u201ETeilen\u201C-Button)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Facebook Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Account Kit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "APIs (Programmierschnittstelle)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "SDKs (Sammlung von Programmierwerkzeugen)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Plattform-Integrationen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Plugins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Codes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Spezifikationen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Dokumentationen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Technologien und Dienstleistungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Durch diese Tools erweitert Facebook Dienstleistungen und hat die M\u00F6glichkeit, Informationen \u00FCber User-Aktivit\u00E4ten au\u00DFerhalb von Facebook zu erhalten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Warum verwenden wir Facebook-Tools auf unserer Webseite?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Wir wollen unsere Dienstleistungen und Produkte nur Menschen zeigen, die sich auch wirklich daf\u00FCr interessieren. Mithilfe von Werbeanzeigen (Facebook-Ads) k\u00F6nnen wir genau diese Menschen erreichen. Damit den Usern passende Werbung gezeigt werden kann, ben\u00F6tigt Facebook allerdings Informationen \u00FCber die W\u00FCnsche und Bed\u00FCrfnisse der Menschen. So werden dem Unternehmen\u00A0Informationen \u00FCber das Userverhalten (und Kontaktdaten) auf unserer Webseite zur Verf\u00FCgung gestellt. Dadurch sammelt Facebook bessere User-Daten und kann interessierten Menschen die passende Werbung \u00FCber unsere Produkte bzw. Dienstleistungen anzeigen. Die Tools erm\u00F6glichen somit ma\u00DFgeschneiderte Werbekampagnen auf Facebook.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Daten \u00FCber Ihr Verhalten auf unserer Webseite nennt Facebook \u201EEvent-Daten\u201C. Diese werden auch f\u00FCr Messungs- und Analysedienste verwendet. Facebook kann so in unserem Auftrag \u201EKampagnenberichte\u201C \u00FCber die Wirkung unserer Werbekampagnen erstellen. Weiters bekommen wir durch Analysen einen besseren Einblick, wie Sie unsere Dienstleistungen, Webseite oder Produkte verwenden. Dadurch optimieren wir mit einigen dieser Tools Ihre Nutzererfahrung auf unserer Webseite. Beispielsweise k\u00F6nnen Sie mit den sozialen Plug-ins Inhalte auf unserer Seite direkt auf Facebook teilen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Welche Daten werden von Facebook-Tools gespeichert?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Durch die Nutzung einzelner Facebook-Tools k\u00F6nnen personenbezogene Daten (Kundendaten) an Facebook gesendet werden. Abh\u00E4ngig von den benutzten Tools k\u00F6nnen Kundendaten wie Name, Adresse, Telefonnummer und IP-Adresse versandt werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Facebook verwendet diese Informationen, um die Daten mit den Daten, die es selbst von Ihnen hat (sofern Sie Facebook-Mitglied sind) abzugleichen. Bevor Kundendaten an Facebook \u00FCbermittelt werden, erfolgt ein sogenanntes \u201EHashing\u201C. Das bedeutet, dass ein beliebig gro\u00DFer Datensatz in eine Zeichenkette transformiert wird. Dies dient auch der Verschl\u00FCsselung von Daten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Neben den Kontaktdaten werden auch \u201EEvent-Daten\u201C \u00FCbermittelt. Unter \u201EEvent-Daten\u201C sind jene Informationen gemeint, die wir \u00FCber Sie auf unserer Webseite erhalten. Zum Beispiel, welche Unterseiten Sie besuchen oder welche Produkte Sie bei uns kaufen. Facebook teilt die erhaltenen Informationen nicht mit Drittanbietern (wie beispielsweise Werbetreibende), au\u00DFer das Unternehmen hat eine explizite Genehmigung oder ist rechtlich dazu verpflichtet. \u201EEvent-Daten\u201C k\u00F6nnen auch mit Kontaktdaten verbunden werden. Dadurch kann Facebook bessere personalisierte Werbung anbieten. Nach dem bereits erw\u00E4hnten Abgleichungsprozess l\u00F6scht Facebook die Kontaktdaten wieder.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Um Werbeanzeigen optimiert ausliefern zu k\u00F6nnen, verwendet Facebook die Event-Daten nur, wenn diese mit anderen Daten (die auf andere Weise von Facebook erfasst wurden) zusammengefasst wurden. Diese Event-Daten n\u00FCtzt Facebook auch f\u00FCr Sicherheits-, Schutz-, Entwicklungs- und Forschungszwecke. Viele dieser Daten werden \u00FCber Cookies zu Facebook \u00FCbertragen. Cookies sind kleine Text-Dateien, die zum Speichern von Daten bzw. Informationen in Browsern verwendet werden. Je nach verwendeten Tools und abh\u00E4ngig davon, ob Sie Facebook-Mitglied sind, werden unterschiedlich viele Cookies in Ihrem Browser angelegt. In den Beschreibungen der einzelnen Facebook Tools gehen wir n\u00E4her auf einzelne Facebook-Cookies ein. Allgemeine Informationen \u00FCber die Verwendung von Facebook-Cookies erfahren Sie auch auf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "https://www.facebook.com/policies/cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Wie lange und wo werden die Daten gespeichert?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Grunds\u00E4tzlich speichert Facebook Daten bis sie nicht mehr f\u00FCr die eigenen Dienste und Facebook-Produkte ben\u00F6tigt werden. Facebook hat auf der ganzen Welt Server verteilt, wo seine Daten gespeichert werden. Kundendaten werden allerdings, nachdem sie mit den eigenen Userdaten abgeglichen wurden, innerhalb von 48 Stunden gel\u00F6scht.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Wie kann ich meine Daten l\u00F6schen bzw. die Datenspeicherung verhindern?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Entsprechend der Datenschutz Grundverordnung haben Sie das Recht auf Auskunft, Berichtigung, \u00DCbertragbarkeit und L\u00F6schung Ihrer Daten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Eine komplette L\u00F6schung der Daten erfolgt nur, wenn Sie Ihr Facebook-Konto vollst\u00E4ndig l\u00F6schen. Und so funktioniert das L\u00F6schen Ihres Facebook-Kontos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "1) Klicken Sie rechts bei Facebook auf Einstellungen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "2) Anschlie\u00DFend klicken Sie in der linken Spalte auf \u201EDeine Facebook-Informationen\u201C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "3) Nun klicken Sie \u201EDeaktivierung und L\u00F6schung\u201C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "4) W\u00E4hlen Sie jetzt \u201EKonto l\u00F6schen\u201C und klicken Sie dann auf \u201EWeiter und Konto l\u00F6schen\u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "5) Geben Sie nun Ihr Passwort ein, klicken Sie auf \u201EWeiter\u201C und dann auf \u201EKonto l\u00F6schen\u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Die Speicherung der Daten, die Facebook \u00FCber unsere Seite erh\u00E4lt, erfolgt unter anderem \u00FCber Cookies (z.B. bei sozialen Plugins). In Ihrem Browser k\u00F6nnen Sie einzelne oder alle Cookies deaktivieren, l\u00F6schen oder verwalten. Je nach dem welchen Browser Sie verwenden, funktioniert dies auf unterschiedliche Art und Weise. Die folgenden Anleitungen zeigen, wie Sie Cookies in Ihrem Browser verwalten:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Chrome: Cookies in Chrome l\u00F6schen, aktivieren und verwalten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Safari: Verwalten von Cookies und Websitedaten mit Safari");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Firefox: Cookies l\u00F6schen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Internet Explorer: L\u00F6schen und Verwalten von Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Microsoft Edge: L\u00F6schen und Verwalten von Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Falls Sie grunds\u00E4tzlich keine Cookies haben wollen, k\u00F6nnen Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So k\u00F6nnen Sie bei jedem einzelnen Cookie entscheiden, ob Sie es erlauben oder nicht.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Facebook ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework, wodurch der korrekte und sichere Datentransfer pers\u00F6nlicher Daten geregelt wird. Mehr Informationen dazu finden Sie auf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, ". Wir hoffen wir haben Ihnen die wichtigsten Informationen \u00FCber die Nutzung und Datenverarbeitung durch die Facebook-Tools n\u00E4hergebracht. Wenn Sie mehr dar\u00FCber erfahren wollen, wie Facebook Ihre Daten verwendet, empfehlen wir Ihnen die Datenrichtlinien auf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "https://www.facebook.com/about/privacy/update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Instagram Datenschutzerkl\u00E4rung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Wir haben auf unserer Webseite Funktionen von Instagram eingebaut. Instagram ist eine Social Media Plattform des Unternehmens Instagram LLC, 1601 Willow Rd, Menlo Park CA 94025, USA. Instagram ist seit 2012 ein Tochterunternehmen von Facebook Inc. und geh\u00F6rt zu den Facebook-Produkten. Das Einbetten von Instagram-Inhalten auf unserer Webseite nennt man Embedding. Dadurch k\u00F6nnen wir Ihnen Inhalte wie Buttons, Fotos oder Videos von Instagram direkt auf unserer Webseite zeigen. Wenn Sie Webseiten unserer Webpr\u00E4senz aufrufen, die eine Instagram-Funktion integriert haben, werden Daten an Instagram \u00FCbermittelt, gespeichert und verarbeitet. Instagram verwendet dieselben Systeme und Technologien wie Facebook. Ihre Daten werden somit \u00FCber alle Facebook-Firmen hinweg verarbeitet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Im Folgenden wollen wir Ihnen einen genaueren Einblick geben, warum Instagram Daten sammelt, um welche Daten es sich handelt und wie Sie die Datenverarbeitung weitgehend kontrollieren k\u00F6nnen. Da Instagram zu Facebook Inc. geh\u00F6rt, beziehen wir unsere Informationen einerseits von den Instagram-Richtlinien, andererseits allerdings auch von den Facebook-Datenrichtlinien selbst.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Was ist Instagram?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Instagram ist eines der bekanntesten Social Media Netzwerken weltweit. Instagram kombiniert die Vorteile eines Blogs mit den Vorteilen von audiovisuellen Plattformen wie YouTube oder Vimeo. Sie k\u00F6nnen auf \u201EInsta\u201C (wie viele der User die Plattform salopp nennen) Fotos und kurze Videos hochladen, mit verschiedenen Filtern bearbeiten und auch in anderen sozialen Netzwerken verbreiten. Und wenn Sie selbst nicht aktiv sein wollen, k\u00F6nnen Sie auch nur anderen interessante Users folgen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Warum verwenden wir Instagram auf unserer Webseite?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Instagram ist jene Social Media Plattform, die in den letzten Jahren so richtig durch die Decke ging. Und nat\u00FCrlich haben auch wir auf diesen Boom reagiert. Wir wollen, dass Sie sich auf unserer Webseite so wohl wie m\u00F6glich f\u00FChlen. Darum ist f\u00FCr uns eine abwechslungsreiche Aufbereitung unserer Inhalte selbstverst\u00E4ndlich. Durch die eingebetteten Instagram-Funktionen k\u00F6nnen wir unseren Content mit hilfreichen, lustigen oder spannenden Inhalten aus der Instagram-Welt bereichern. Da Instagram eine Tochtergesellschaft von Facebook ist, k\u00F6nnen uns die erhobenen Daten auch f\u00FCr personalisierte Werbung auf Facebook dienlich sein. So bekommen unsere Werbeanzeigen nur Menschen, die sich wirklich f\u00FCr unsere Produkte oder Dienstleistungen interessieren.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Instagram n\u00FCtzt die gesammelten Daten auch\u00A0zu Messungs- und Analysezwecken. Wir bekommen zusammengefasste Statistiken und so mehr Einblick \u00FCber Ihre W\u00FCnsche und Interessen. Wichtig ist zu erw\u00E4hnen, dass diese Berichte Sie nicht pers\u00F6nlich identifizieren.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Welche Daten werden von Instagram gespeichert?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Wenn Sie auf eine unserer Seiten sto\u00DFen, die Instagram-Funktionen (wie Instagrambilder oder Plug-ins) eingebaut haben, setzt sich Ihr Browser automatisch mit den Servern von Instagram in Verbindung. Dabei werden Daten an Instagram versandt, gespeichert und verarbeitet. Und zwar unabh\u00E4ngig, ob Sie ein Instagram-Konto haben oder nicht. Dazu z\u00E4hlen Informationen \u00FCber unserer Webseite, \u00FCber Ihren Computer, \u00FCber get\u00E4tigte K\u00E4ufe, \u00FCber Werbeanzeigen, die Sie sehen und wie Sie unser Angebot nutzen. Weiters werden auch Datum und Uhrzeit Ihrer Interaktion mit Instagram gespeichert. Wenn Sie ein Instagram-Konto haben bzw. eingeloggt sind, speichert Instagram deutlich mehr Daten \u00FCber Sie.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Facebook unterscheidet zwischen Kundendaten und Eventdaten. Wir gehen davon aus, dass dies bei Instagram genau so der Fall ist. Kundendaten sind zum Beispiel Name, Adresse, Telefonnummer und IP-Adresse. Diese Kundendaten werden erst an Instagram \u00FCbermittelt werden, wenn Sie zuvor \u201Egehasht\u201C wurden. Hashing meint, ein Datensatz wird in eine Zeichenkette verwandelt. Dadurch kann man die Kontaktdaten verschl\u00FCsseln. Zudem werden auch die oben genannten \u201EEvent-Daten\u201C \u00FCbermittelt. Unter \u201EEvent-Daten\u201C versteht Facebook \u2013 und folglich auch Instagram \u2013 Daten \u00FCber Ihr Userverhalten. Es kann auch vorkommen, dass Kontaktdaten mit Event-Daten kombiniert werden. Die erhobenen Kontaktdaten werden mit den Daten, die Instagram bereits von Ihnen hat, abgeglichen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "\u00DCber kleine Text-Dateien (Cookies), die meist in Ihrem Browser gesetzt werden, werden die gesammelten Daten an Facebook \u00FCbermittelt. Je nach verwendeten Instagram-Funktionen und ob Sie selbst ein Instagram-Konto haben, werden unterschiedlich viele Daten gespeichert.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Wir gehen davon aus, dass bei Instagram die Datenverarbeitung gleich funktioniert wie bei Facebook. Das bedeutet: wenn Sie ein Instagram-Konto haben oder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "www.instagram.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " besucht haben, hat Instagram zumindest ein Cookie gesetzt. Wenn das der Fall ist, sendet Ihr Browser \u00FCber das Cookie Infos an Instagram, sobald Sie mit einer Instagram-Funktion in Ber\u00FChrung kommen. Sp\u00E4testens nach 90 Tagen (nach Abgleichung) werden diese Daten wieder gel\u00F6scht bzw. anonymisiert. Obwohl wir uns intensiv mit der Datenverarbeitung von Instagram besch\u00E4ftigt haben, k\u00F6nnen wir nicht ganz genau sagen, welche Daten Instagram exakt sammelt und speichert.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Im Folgenden zeigen wir Ihnen Cookies, die in Ihrem Browser mindestens gesetzt werden, wenn Sie auf eine Instagram-Funktion (wie z.B. Button oder ein Insta-Bild) klicken. Bei unserem Test gehen wir davon aus, dass Sie kein Instagram-Konto haben. Wenn Sie bei Instagram eingeloggt sind, werden nat\u00FCrlich deutlich mehr Cookies in Ihrem Browser gesetzt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Diese Cookies wurden bei unserem Test verwendet:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "csrftoken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Wert: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "\u201E\u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Verwendungszweck:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Dieses Cookie wird mit hoher Wahrscheinlichkeit aus Sicherheitsgr\u00FCnden gesetzt, um F\u00E4lschungen von Anfragen zu verhindern. Genauer konnten wir das allerdings nicht in Erfahrung bringen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Ablaufdatum:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, " nach einem Jahr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "mid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Wert: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "\u201E\u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Verwendungszweck: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Instagram setzt dieses Cookie, um die eigenen Dienstleistungen und Angebote in und au\u00DFerhalb von Instagram zu optimieren. Das Cookie legt eine eindeutige User-ID fest.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Ablaufdatum:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, " nach Ende der Sitzung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, " fbsr_211143947124024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Wert: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "keine Angaben");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Verwendungszweck:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Dieses Cookie speichert die Log-in-Anfrage f\u00FCr User der Instagram-App.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Ablaufdatum:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, " nach Ende der Sitzung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, " rur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Wert: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "ATN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Verwendungszweck: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Dabei handelt es sich um ein Instagram-Cookie, das die Funktionalit\u00E4t auf Instagram gew\u00E4hrleistet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Ablaufdatum:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, " nach Ende der Sitzung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, " urlgen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Wert: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "\u201E\u201E194.96.75.33\u2033: 1901:1iEtYv:Y833k2_UjKvXgYe211143947\u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Verwendungszweck: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "Dieses Cookie dient den Marketingzwecken von Instagram.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Ablaufdatum:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, " nach Ende der Sitzung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Anmerkung:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, " Wir k\u00F6nnen hier keinen Vollst\u00E4ndigkeitsanspruch erheben. Welche Cookies im individuellen Fall gesetzt werden, h\u00E4ngt von den eingebetteten Funktionen und Ihrer Verwendung von Instagram ab.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Wie lange und wo werden die Daten gespeichert?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Instagram teilt die erhaltenen Informationen zwischen den Facebook-Unternehmen mit externen Partnern und mit Personen, mit denen Sie sich weltweit verbinden. Die Datenverarbeitung erfolgt unter Einhaltung der eigenen Datenrichtlinie. Ihre Daten sind, unter anderem aus Sicherheitsgr\u00FCnden, auf den Facebook-Servern auf der ganzen Welt verteilt. Die meisten dieser Server stehen in den USA.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Wie kann ich meine Daten l\u00F6schen bzw. die Datenspeicherung verhindern?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Dank der Datenschutz Grundverordnung haben Sie das Recht auf Auskunft, \u00DCbertragbarkeit, Berichtigung und L\u00F6schung Ihrer Daten. In den Instagram-Einstellungen k\u00F6nnen Sie Ihre Daten verwalten. Wenn Sie Ihre Daten auf Instagram v\u00F6llig l\u00F6schen wollen, m\u00FCssen Sie Ihr Instagram-Konto dauerhaft l\u00F6schen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Und so funktioniert die L\u00F6schung des Instagram-Kontos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "\u00D6ffnen Sie zuerst die Instagram-App. Auf Ihrer Profilseite gehen Sie nach unten und klicken Sie auf \u201EHilfebereich\u201C. Jetzt kommen Sie auf die Webseite des Unternehmens. Klicken Sie auf der Webseite auf \u201EVerwalten des Kontos\u201C und dann auf \u201EDein Konto l\u00F6schen\u201C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Wenn Sie Ihr Konto ganz l\u00F6schen, l\u00F6scht Instagram Posts wie beispielsweise Ihre Fotos und Status-Updates. Informationen, die andere Personen \u00FCber Sie geteilt haben, geh\u00F6ren nicht zu Ihrem Konto und werden folglich nicht gel\u00F6scht.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Wie bereits oben erw\u00E4hnt, speichert Instagram Ihre Daten in erster Linie \u00FCber Cookies. Diese Cookies k\u00F6nnen Sie in Ihrem Browser verwalten, deaktivieren oder l\u00F6schen. Abh\u00E4ngig von Ihrem Browser funktioniert die Verwaltung immer ein bisschen anders. Hier zeigen wir Ihnen die Anleitungen der wichtigsten Browser.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Chrome: Cookies in Chrome l\u00F6schen, aktivieren und verwalten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "Safari: Verwalten von Cookies und Websitedaten mit Safari");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "Firefox: Cookies l\u00F6schen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Internet Explorer: L\u00F6schen und Verwalten von Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "Microsoft Edge: L\u00F6schen und Verwalten von Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "Sie k\u00F6nnen auch grunds\u00E4tzlich Ihren Browser so einrichten, dass Sie immer informiert werden, wenn ein Cookie gesetzt werden soll. Dann k\u00F6nnen Sie immer individuell entscheiden, ob Sie das Cookie zulassen wollen oder nicht.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "Instagram ist ein Tochterunternehmen von Facebook Inc. und Facebook ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework. Dieses Framework stellt eine korrekte Daten\u00FCbertragung zwischen den USA und der Europ\u00E4ischen Union sicher. Unter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, " erfahren Sie mehr dar\u00FCber. Wir haben versucht, Ihnen die wichtigsten Informationen \u00FCber die Datenverarbeitung durch Instagram n\u00E4herzubringen. Auf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "https://help.instagram.com/519522125107875");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](438, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "\nk\u00F6nnen Sie sich noch n\u00E4her mit den Datenrichtlinien von Instagram auseinandersetzen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "Quelle: Erstellt\u00A0mit dem\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "Datenschutz Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, " von firmenwebseiten.at");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    font-size: 1.7em;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    font-size: 1.3em;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    font-size: 1.1em;\r\n}\r\n\r\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{\r\n    font-size: 0.8em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoicHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxufVxyXG5cclxuaDJ7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG59XHJcblxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbn1cclxuXHJcbnAsIGxpe1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header.service */ "1CDA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function HeaderComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Darren Woolridge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Photography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(head) {
        this.head = head;
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 1, vars: 1, consts: [["class", "container text-center pt-2", 4, "ngIf"], [1, "container", "text-center", "pt-2"], [1, "logo"], ["routerLink", "/"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_header_0_Template, 7, 0, "header", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.head.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: black;\r\n    text-shadow: 1.5px 1.5px 3px rgba(150, 150, 150, 1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixtREFBbUQ7QUFDdkQiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtc2hhZG93OiAxLjVweCAxLjVweCAzcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAxKTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 32, vars: 0, consts: [["id", "footer"], ["routerLink", "/"], ["routerLink", "/portfolio"], ["routerLink", "/about"], ["routerLink", "/customers"], ["routerLink", "/offers"], ["routerLink", "/contact"], ["id", "brands"], ["href", "#"], ["src", "assets/brands/f_logo_RGB-Blue_72.png", "alt", "facebook"], ["src", "assets/brands/Instagram_Glyph_Gradient_RGB.png", "alt", "instagram"], ["routerLink", "/imprint", 1, "footerLink"], ["routerLink", "/privacyPolicy", 1, "footerLink"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A9 Mario, Yasmin, Mathias, Richard | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Imprint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#footer[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    color: white;\r\n    height: 6em;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    grid-template-columns: 1fr;\r\n    grid-template-areas: 'nav' 'brands' 'copy';\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    grid-area: copy;\r\n    font-size: 0.7em;\r\n    justify-self: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 1.4em;\r\n    height: 1.4em;\r\n}\r\n\r\n#brands[_ngcontent-%COMP%]{\r\n    grid-area: brands;\r\n    justify-self: center;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: white;\r\n    font-size: 0.7em;\r\n    padding: 0 0.5em;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n    color: gray;\r\n}\r\n\r\n.footerLink[_ngcontent-%COMP%]{\r\n    font-size: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLCtCQUErQjtJQUMvQiwwQkFBMEI7SUFDMUIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDZlbTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnbmF2JyAnYnJhbmRzJyAnY29weSc7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBncmlkLWFyZWE6IGNvcHk7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAxLjRlbTtcclxuICAgIGhlaWdodDogMS40ZW07XHJcbn1cclxuXHJcbiNicmFuZHN7XHJcbiAgICBncmlkLWFyZWE6IGJyYW5kcztcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG51bHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIHBhZGRpbmc6IDAgMC41ZW07XHJcbn1cclxuXHJcbmE6aG92ZXJ7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmZvb3Rlckxpbmt7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "fwyt":
/*!***********************************!*\
  !*** ./src/app/navbar.service.ts ***!
  \***********************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NavbarService {
    constructor() { this.visible = false; }
    hide() { this.visible = false; }
    show() { this.visible = true; }
}
NavbarService.ɵfac = function NavbarService_Factory(t) { return new (t || NavbarService)(); };
NavbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavbarService, factory: NavbarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jXtx":
/*!**********************************************!*\
  !*** ./src/app/imprint/imprint.component.ts ***!
  \**********************************************/
/*! exports provided: ImprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprintComponent", function() { return ImprintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar.service */ "fwyt");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header.service */ "1CDA");



class ImprintComponent {
    constructor(nav, head) {
        this.nav = nav;
        this.head = head;
    }
    ngOnInit() {
        this.nav.show();
        this.head.show();
    }
}
ImprintComponent.ɵfac = function ImprintComponent_Factory(t) { return new (t || ImprintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"])); };
ImprintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImprintComponent, selectors: [["app-imprint"]], decls: 116, vars: 0, consts: [[1, "container"], [1, "adsimple-221143949"], ["href", "mailto:darrenwoolridge@gmail.com"], [2, "margin-top", "15px"], ["title", "Impressum Generator von firmenwebseiten.at", "href", "https://www.firmenwebseiten.at/impressum-generator/", "target", "_blank", "rel", "follow"], ["href", "https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "external"], ["title", "Datenschutz Generator von firmenwebseiten.at", "href", "https://www.firmenwebseiten.at/datenschutz-generator/", "target", "_blank", "rel", "follow"]], template: function ImprintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Informationspflicht laut \u00A75 E-Commerce Gesetz, \u00A714 Unternehmensgesetzbuch, \u00A763 Gewerbeordnung und Offenlegungspflicht laut \u00A725 Mediengesetz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Darren Woolridge Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Darren Woolridge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "W\u00E4hringer Stra\u00DFe 112, Stiege 3, T\u00FCr 5, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1180 Wien, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00D6sterreich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Unternehmensgegenstand:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "UID-Nummer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " ATU15963248");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Firmenbuchnummer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 5461213f");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Firmenbuchgericht:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Wien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Firmensitz:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " 1180 Wien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Tel.:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 01/6132548");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Fax:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " 01/6132548-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "E-Mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "darrenwoolridge@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Mitglied bei:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " WKO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Berufsrecht:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Gewerbeordnung: www.ris.bka.gv.at");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Aufsichtsbeh\u00F6rde/Gewerbebeh\u00F6rde:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Bezirkshauptmannschaft Wien");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Berufsbezeichnung:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Fotograf, Grafiker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Verleihungsstaat:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " \u00D6sterreich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Quelle: Erstellt\u00A0mit dem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Impressum Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " von firmenwebseiten.at");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Urheberrechtshinweis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "EU-Streitschlichtung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Gem\u00E4\u00DF Verordnung \u00FCber Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) m\u00F6chten wir Sie \u00FCber die Online-Streitbeilegungsplattform (OS-Plattform) informieren.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Verbraucher haben die M\u00F6glichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europ\u00E4ischen Kommission unter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "http://ec.europa.eu/odr?tid=221143949");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " zu richten. Die daf\u00FCr notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Wir m\u00F6chten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Bildernachweis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich gesch\u00FCtzt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Fotograf Mustermann");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Haftung f\u00FCr Inhalte dieser Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Wir entwickeln die Inhalte dieser Webseite st\u00E4ndig weiter und bem\u00FChen uns korrekte und aktuelle Informationen bereitzustellen. \u00A0Leider k\u00F6nnen wir keine Haftung f\u00FCr die Korrektheit aller Inhalte auf dieser Website \u00FCbernehmen, speziell f\u00FCr jene, die seitens Dritter bereitgestellt wurden. Als Diensteanbieter sind wir nicht verpflichtet, die von ihnen \u00FCbermittelten oder gespeicherten Informationen zu \u00FCberwachen oder nach Umst\u00E4nden zu forschen, die auf eine rechtswidrige T\u00E4tigkeit hinweisen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder beh\u00F6rdlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit davon unber\u00FChrt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte entfernen k\u00F6nnen. Sie finden die Kontaktdaten im Impressum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Haftung f\u00FCr Links auf dieser Webseite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Unsere Webseite enth\u00E4lt Links zu anderen Webseiten f\u00FCr deren Inhalt wir nicht verantwortlich sind. Haftung f\u00FCr verlinkte Websites besteht f\u00FCr uns nicht, da wir keine Kenntnis rechtswidriger T\u00E4tigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen w\u00FCrden, wenn uns Rechtswidrigkeiten bekannt werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Quelle: Erstellt\u00A0mit dem\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Datenschutz Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " von firmenwebseiten.at");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    font-size: 1.7em;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    font-size: 1.3em;\r\n}\r\n\r\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{\r\n    font-size: 0.8em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcHJpbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJpbXByaW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbn1cclxuXHJcbmgye1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxufVxyXG5cclxucCwgbGl7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59Il19 */"] });


/***/ }),

/***/ "kGaf":
/*!********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.ts ***!
  \********************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar.service */ "fwyt");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header.service */ "1CDA");





class ContactPageComponent {
    constructor(nav, head) {
        this.nav = nav;
        this.head = head;
        this.contact = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    ngOnInit() {
        this.nav.show();
        this.head.show();
    }
    onSubmit() {
        var sendAlert = document.getElementById('sendAlert');
        if (this.contact.valid) {
            sendAlert.innerHTML = 'Your message has been sent.';
            sendAlert.style.color = 'green';
            this.contact.reset();
        }
        else {
            sendAlert.innerHTML = 'Please fill in all fields.';
            sendAlert.style.color = 'red';
        }
    }
}
ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) { return new (t || ContactPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"])); };
ContactPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactPageComponent, selectors: [["app-contact-page"]], decls: 32, vars: 1, consts: [[1, "container"], [1, "row", "g-3", 3, "formGroup", "ngSubmit"], [1, "col-lg-5", "col-md-12"], ["for", "firstName", 1, "form-label"], ["type", "text", "id", "firstName", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control"], ["for", "lastName", 1, "form-label"], ["type", "text", "id", "lastName", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control"], [1, "col-lg-2", "col-md-12"], ["for", "date", 1, "form-label"], ["type", "text", "id", "date", "placeholder", "Desired Date", "formControlName", "date", 1, "form-control"], [1, "col-lg-12", "col-md-12"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "placeholder", "Photography@email.com", "formControlName", "email", 1, "form-control"], ["for", "message", 1, "form-label"], ["name", "message", "id", "message", "formControlName", "message", "rows", "4", "placeholder", "Your Message should be written here.", 1, "form-control"], ["id", "sendAlert"], ["id", "mesBtn"], ["type", "submit", 1, "btn", "btn-primary"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "If you are interested in an appointment or would like to obtain additional information, simply write us a message.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "We will answer you as soon as possible.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactPageComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Desired Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.contact);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-bottom: 1em;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-bottom: 2em;\r\n}\r\n\r\n#sendAlert[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n#mesBtn[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-bottom: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJjb250YWN0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxufVxyXG5cclxucHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbiNzZW5kQWxlcnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNtZXNCdG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG59Il19 */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar.service */ "fwyt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function NavbarComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Customers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 1, vars: 1, consts: [["class", "navbar navbar-expand-lg navbar-light bg-light py-4 mb-5 navStyle", 4, "ngIf"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "py-4", "mb-5", "navStyle"], [1, "container"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item", "navItem-style"], ["aria-current", "page", "routerLink", "/", 1, "nav-link", "active"], ["routerLink", "/portfolio", 1, "nav-link"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/customers", 1, "nav-link"], ["routerLink", "/offers", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarComponent_nav_0_Template, 24, 0, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nav.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".navItem-style[_ngcontent-%COMP%] {\r\n    margin-right: 5vw;\r\n\r\n}\r\n\r\n.navStyle[_ngcontent-%COMP%] {\r\n    border-bottom: solid 0.7px darkgrey;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2QyIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZJdGVtLXN0eWxlIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXZ3O1xyXG5cclxufVxyXG5cclxuLm5hdlN0eWxlIHtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuN3B4IGRhcmtncmV5O1xyXG59Il19 */"] });


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar.service */ "fwyt");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header.service */ "1CDA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class LandingPageComponent {
    constructor(nav, head) {
        this.nav = nav;
        this.head = head;
    }
    ngOnInit() {
        this.nav.hide();
        this.head.hide();
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"])); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 20, vars: 0, consts: [[1, "container-fluid", "landingWrapper", "pe-5"], [1, "logo", "py-4", "mb-5"], [1, "sideWrapper", "mb-5"], [1, "mt-3"], ["routerLink", "/portfolio"], ["routerLink", "/about", 1, "py-2"], ["routerLink", "/contact"], [1, "social", "mt-5"], ["href", "#", 1, "me-3", "socialFB"], ["src", "assets/img/hero/facebook.png", "alt", "facebook"], ["href", "#", 1, "socialIG"], ["src", "assets/img/hero/instagram.png", "alt", "instagram"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "woolridge.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Darren Woolridge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".landingWrapper[_ngcontent-%COMP%] {\r\n    background-image: url('DSC_7036.jpg');\r\n    background-size: cover;\r\n\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;   \r\n    color: black;\r\n\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    }\r\n\r\n.sideWrapper[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: flex;\r\n    align-self: flex-end;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n     text-shadow: 1.5px 1.5px 3px rgba(150, 150, 150, 1);\r\n  }\r\n\r\n.social[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: flex-start;\r\n    color: whitesmoke;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-self: flex-end;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-self: flex-end;\r\n    list-style-type: none;\r\n    color: black;\r\n    flex-direction: column;\r\n    font-size: 1.3em;\r\n    text-align: right;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n}\r\n\r\n.socialFB[_ngcontent-%COMP%]:hover {\r\n   filter: invert(1);\r\n}\r\n\r\n.socialIG[_ngcontent-%COMP%]:hover {\r\n    filter: invert(1);\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjs7QUFFakI7SUFDSSxxQ0FBMkQ7SUFDM0Qsc0JBQXNCOztJQUV0QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekI7O0FBRUo7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIseUJBQXlCO0tBQ3hCLG1EQUFtRDtFQUN0RDs7QUFFRjtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBR0EseUJBQXlCOztBQUV6QjtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7R0FDRyxpQkFBaUI7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoibGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmNyZWF0ZSBzaWRlYmFyKi9cclxuXHJcbi5sYW5kaW5nV3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2hlcm8vRFNDXzcwMzYuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcblxyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuXHJcbi5zaWRlV3JhcHBlciB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgdGV4dC1zaGFkb3c6IDEuNXB4IDEuNXB4IDNweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDEpO1xyXG4gIH1cclxuXHJcbi5zb2NpYWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbn0gXHJcblxyXG5oMSwgcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbi8qaG92ZXIgbmF2LWxpbmtzLyBpY29ucyovXHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNvY2lhbEZCOmhvdmVyIHtcclxuICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbn1cclxuXHJcbi5zb2NpYWxJRzpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcclxuIH0iXX0= */"] });


/***/ }),

/***/ "s4pY":
/*!****************************************************************!*\
  !*** ./src/app/testimonial-page/testimonial-page.component.ts ***!
  \****************************************************************/
/*! exports provided: TestimonialPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialPageComponent", function() { return TestimonialPageComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar.service */ "fwyt");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header.service */ "1CDA");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webcam */ "QKVY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TestimonialPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Here is your image!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.webcamImage.imageAsDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class TestimonialPageComponent {
    constructor(nav, head) {
        this.nav = nav;
        this.head = head;
        this.webcamImage = null;
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.nav.show();
        this.head.show();
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    handleImage(webcamImage) {
        console.info('Saved webcam image', webcamImage);
        this.webcamImage = webcamImage;
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
}
TestimonialPageComponent.ɵfac = function TestimonialPageComponent_Factory(t) { return new (t || TestimonialPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"])); };
TestimonialPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestimonialPageComponent, selectors: [["app-testimonial-page"]], decls: 5, vars: 4, consts: [[3, "height", "width", "trigger", "imageCapture"], [1, "actionBtn", 3, "click"], ["class", "snapshot", 4, "ngIf"], [1, "snapshot"], [3, "src"]], template: function TestimonialPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "webcam", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageCapture", function TestimonialPageComponent_Template_webcam_imageCapture_1_listener($event) { return ctx.handleImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestimonialPageComponent_Template_button_click_2_listener() { return ctx.triggerSnapshot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Click Here and take the Shot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TestimonialPageComponent_div_4_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 400)("width", 1000)("trigger", ctx.triggerObservable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.webcamImage);
    } }, directives: [ngx_webcam__WEBPACK_IMPORTED_MODULE_4__["WebcamComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0aW1vbmlhbC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page/about-page.component */ "HioS");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "kGaf");
/* harmony import */ var _customers_page_customers_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers-page/customers-page.component */ "8v5C");
/* harmony import */ var _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio-page/portfolio-page.component */ "9gJT");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "dEEo");
/* harmony import */ var _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imprint/imprint.component */ "jXtx");
/* harmony import */ var _offer_page_offer_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./offer-page/offer-page.component */ "9JoL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    {
        path: "", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"]
    },
    {
        path: "about", component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"]
    },
    {
        path: "contact", component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_3__["ContactPageComponent"]
    },
    {
        path: "customers", component: _customers_page_customers_page_component__WEBPACK_IMPORTED_MODULE_4__["CustomersPageComponent"]
    },
    {
        path: "portfolio", component: _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioPageComponent"]
    },
    {
        path: "privacyPolicy", component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyComponent"]
    },
    {
        path: "imprint", component: _imprint_imprint_component__WEBPACK_IMPORTED_MODULE_7__["ImprintComponent"]
    },
    // {
    //   path: "documentation", component: DocumentationComponent
    // },
    {
        path: "offers", component: _offer_page_offer_page_component__WEBPACK_IMPORTED_MODULE_8__["OfferPageComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
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
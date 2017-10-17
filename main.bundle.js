webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_services_services_component__ = __webpack_require__("../../../../../src/app/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_fun_page_fun_page_component__ = __webpack_require__("../../../../../src/app/components/fun-page/fun-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_movie_movie_component__ = __webpack_require__("../../../../../src/app/components/movie/movie.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_3__components_about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'services',
        component: __WEBPACK_IMPORTED_MODULE_4__components_services_services_component__["a" /* ServicesComponent */]
    },
    {
        path: 'fun_page',
        component: __WEBPACK_IMPORTED_MODULE_5__components_fun_page_fun_page_component__["a" /* FunPageComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_6__components_contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'movie/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__components_movie_movie_component__["a" /* MovieComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

/*
const routes: Routes = [
  {
    path: '',
    children: []
  }
];
*/
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-area></app-nav-area>\n<router-outlet></router-outlet>\n<app-footer-area></app-footer-area>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */]]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_nav_area_nav_area_component__ = __webpack_require__("../../../../../src/app/components/nav-area/nav-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_area_footer_area_component__ = __webpack_require__("../../../../../src/app/components/footer-area/footer-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_services_services_component__ = __webpack_require__("../../../../../src/app/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_fun_page_fun_page_component__ = __webpack_require__("../../../../../src/app/components/fun-page/fun-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_movies_movies_component__ = __webpack_require__("../../../../../src/app/components/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_movie_movie_component__ = __webpack_require__("../../../../../src/app/components/movie/movie.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_nav_area_nav_area_component__["a" /* NavAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_footer_area_footer_area_component__["a" /* FooterAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_fun_page_fun_page_component__["a" /* FunPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_movies_movies_component__["a" /* MoviesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_movie_movie_component__["a" /* MovieComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"about-page\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-md-7 img-assets-pull-1\">\n        <img src=\"../../../assets/images/img_desk_new.jpg\" class=\"img-shadow img-responsive\" alt=\"Conference Room Discussion\">\n      </div>\n      <div class=\"col-md-5\">\n        <h2>About</h2>\n        <p class=\"lead\">Hi! Let me introduce myself. My name is James Slaughter and this is my website for JSWORLD Web Development Studio. I am a Designer and Developer Professional and Enthusiast with over 20 years experience in the Information Technology field and over 7 years specifically in the Mobile and Web development areas.</p>\n\n        <p>I’ve performed a number of roles during my 20+ year professional journey. Now I want to put that knowledge to work for you in helping you build your online presence. Whether that’s a logo, mobile application or website, we can work together to build the finished product you want to establish or enhance your presence in the digital world.</p>\n\n        <p>By closely collaborating through the early discovery and design phases of your project I can develop and deliver the following projects for you, your company or your startup business:</p>\n\n        <!--<ul class=\"list-nav\" [@aboutAnim]=\"items.length\"></ul>-->\n        <ul class=\"list-nav\" [@aboutAnim]=\"items.length\">\n          <li class=\"bounceAnim\" *ngFor=\"let item of items\"><i class=\"icon-check2\"></i>{{item}}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.items = [];
        this.items = ['Logos', 'Mobile Applications', 'eCommerce Websites', 'Brochure/Informational Websites', 'Progressive Web Applications'];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('aboutAnim', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])('.bounceAnim', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0 })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])('.bounceAnim', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('500ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                            ]))
                        ]))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<section id=\"contact-page\">\n  <div class=\"container\">\n    <p>\n      contact works!\n    </p>\n  </div>\n</section>\n-->\n<section id=\"contact-page\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6 to-animate\">\n\t\t\t\t\t<h3 class=\"section-title\">About</h3>\n\t\t\t\t\t<p>Designer and Developer Professional and Enthusiast with over 20 years experience in the Information Technology field and over 7 years specifically in the Mobile and Web development areas.</p>\n\t\t\t\t\t<!--\n\t\t\t\t\t<p class=\"copy-right\">&copy; 2015 Legal Free Template. <br>All Rights Reserved. <br>\n\t\t\t\t\t\tDesigned by <a href=\"http://freehtml5.co/\" target=\"_blank\">FreeHTML5.co</a>\n\t\t\t\t\t\tDemo Images: <a href=\"http://unsplash.com/\" target=\"_blank\">Unsplash</a>\n\t\t\t\t\t</p>\n\t\t\t\t\t-->\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6 to-animate\">\n\t\t\t\t\t<h3 class=\"section-title\">Address</h3>\n\t\t\t\t\t<ul class=\"contact-info\">\n\t\t\t\t\t\t<li><i class=\"icon-map-marker\"></i>Greater Chicagoland Area</li>\n\t\t\t\t\t\t<li><i class=\"icon-phone\"></i>Please use the email link below:</li>\n\t\t\t\t\t\t<li><i class=\"icon-envelope\"></i><a href=\"mailto:jsworldwebstudio@gmail.com\">jsworldwebstudio@gmail.com</a></li>\n\t\t\t\t\t\t<li><i class=\"icon-globe2\"></i><a href=\"http://www.jsworldwebstudio.com\">www.jsworldwebstudio.com</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<!--\n\t\t\t\t\t<h3 class=\"section-title\">Connect with Me</h3>\n\t\t\t\t\t<ul class=\"social-media\">\n\t\t\t\t\t\t<li><a href=\"#\" class=\"facebook\"><i class=\"icon-facebook\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"twitter\"><i class=\"icon-twitter\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dribbble\"><i class=\"icon-dribbble\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"github\"><i class=\"icon-github-alt\"></i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t-->\n\t\t\t\t</div>\n\t\t\t\t<!--\n\t\t\t\t<div class=\"col-md-4 to-animate\">\n\t\t\t\t\t<h3 class=\"section-title\">Drop a line</h3>\n\t\t\t\t\t<form class=\"contact-form\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"name\" class=\"sr-only\">Name</label>\n\t\t\t\t\t\t\t<input type=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"email\" class=\"sr-only\">Email</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"message\" class=\"sr-only\">Message</label>\n\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"message\" rows=\"7\" placeholder=\"Message\"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input type=\"submit\" id=\"btn-submit\" class=\"btn btn-send-message btn-md\" value=\"Send Message\" disabled>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t-->\n\t\t\t</div>\n\t\t</div>\n\t</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer-area/footer-area.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer-area/footer-area.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  <footer id=\"footer-component\">\n  <div class=\"container\">\n    <p>\n      footer-area works!\n    </p>\n  </div>\n</footer>\n-->\n<footer id=\"footer-component\">\n  <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <div class=\"container\">\n      <!--<a href=\"#\" class=\"navbar-brand\">FOOTER</a>-->\n      <div class=\"row\">\n        <ul class=\"list-inline\">\n          <li class=\"list-inline-item\"><a href=\"#\" class=\"facebook\" title=\"JSWORLD on Facebook\"><i class=\"icon-facebook\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"#\" class=\"twitter\" title=\"JSWORLD on Twitter\"><i class=\"icon-twitter\"></i></a></li>\n          <!--<li class=\"list-inline-item\"><a href=\"#\" class=\"dribbble\" title=\"JSWORLD on Dribble\"><i class=\"icon-dribbble\"></i></a></li>-->\n          <li class=\"list-inline-item\"><a href=\"#\" class=\"github\" title=\"JSWORLD on GitHub\"><i class=\"icon-github-alt\"></i></a></li>\n        </ul>\n        <small class=\"text-center\">&copy; 2017 JSWORLD Web Development Studio</small>\n      </div>\n      <!--\n      <div class=\"row\">\n        <small>&copy; 2017 JSWORLD Web Development Studio</small>\n      </div>\n    -->\n    </div>\n  </nav>\n</footer>\n<!--\n<footer class=\"row\">\n  <div class=\"sociallinks\">\n    <ul class=\"menu\">\n      <li><a href=\"https://twitter.com/nullvariable\" title=\"Doug on Twitter (@nullvariable)\"><i aria-hidden=\"true\" class=\"icon-twitter-1\"></i></a></li>\n      <li><a href=\"https://www.linkedin.com/in/dougcone\" title=\"Doug on LinkedIn\"><i aria-hidden=\"true\" class=\"icon-linkedin-1\"></i></a></li>\n      <li><a href=\"http://www.last.fm/user/nullvariable\" title=\"Doug on Last.fm\"><i aria-hidden=\"true\" class=\"icon-lastfm-squared\"></i></a></li>\n      <li><a href=\"https://www.facebook.com/dougcone\" title=\"Doug on Facebook\"><i aria-hidden=\"true\" class=\"icon-facebook-official\"></i></a></li>\n      <li><a href=\"https://www.instagram.com/nullvariable\" title=\"Doug on Instagram\"><i aria-hidden=\"true\" class=\"icon-instagram\"></i></a></li>\n    </ul>\n    <ul class=\"social-media\">\n      <li><a href=\"#\" class=\"facebook\"><i class=\"icon-facebook\"></i></a></li>\n      <li><a href=\"#\" class=\"twitter\"><i class=\"icon-twitter\"></i></a></li>\n      <li><a href=\"#\" class=\"dribbble\"><i class=\"icon-dribbble\"></i></a></li>\n      <li><a href=\"#\" class=\"github\"><i class=\"icon-github-alt\"></i></a></li>\n    </ul>\n    <small>&copy; 2017 JSWORLD Web Development Studio</small>\n  </div>\n</footer>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/components/footer-area/footer-area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterAreaComponent = /** @class */ (function () {
    function FooterAreaComponent() {
    }
    FooterAreaComponent.prototype.ngOnInit = function () {
    };
    FooterAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-footer-area',
            template: __webpack_require__("../../../../../src/app/components/footer-area/footer-area.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer-area/footer-area.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterAreaComponent);
    return FooterAreaComponent;
}());

//# sourceMappingURL=footer-area.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/fun-page/fun-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/fun-page/fun-page.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"fun-page\">\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1 class=\"text-center\">Use the Fun Page to Browse Movies</h1>\n      <p>\n        This page is included to provide a closer look into movies that may interest you and to show the versatility of applications that can be developed for you. Specifically, this pages communicates with an external movie database to show the information seen on this page and show information on movies you search for individually.\n      </p>\n      <!--<p><a href=\"#\" class=\"btn btn-danger btn-lg\">Learn More</a></p>-->\n    </div>\n    <app-movies></app-movies>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/fun-page/fun-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FunPageComponent = /** @class */ (function () {
    function FunPageComponent() {
    }
    FunPageComponent.prototype.ngOnInit = function () {
    };
    FunPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-fun-page',
            template: __webpack_require__("../../../../../src/app/components/fun-page/fun-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/fun-page/fun-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FunPageComponent);
    return FunPageComponent;
}());

//# sourceMappingURL=fun-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<section id=\"home-page\">\n  <div class=\"container\">\n    <div style=\"text-align:center\">\n      <h1>\n        Welcome to JSWORLD Web Development Studio!\n      </h1>\n      <img width=\"300\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">\n      <h3>\n          I am a UI/UX Designer & Developer. I can build websites and/or mobile applications customized to the specific needs of your business.\n        </h3>\n    </div>\n    <h2>Here are some links to help you better understand the services I offer: </h2>\n    <ul>\n      <li>\n        <h2><a routerLink=\"/about\">About</a></h2>\n      </li>\n      <li>\n          <h2><a routerLink=\"/services\">Services</a></h2>\n      </li>\n      <li>\n          <h2><a routerLink=\"/fun_page\">Fun Page</a></h2>\n      </li>\n    </ul>\n  </div>\n</section>\n-->\n<!-- SHOWCASE SLIDER -->\n<section id=\"home-page\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"10000\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item carousel-image-1 active\">\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n          <!--<div class=\"carousel-caption d-none d-sm-block text-right\">-->\n            <h1 class=\"display-3\">JSWORLD</h1>\n            <p class=\"lead\">Hi, my name is James Slaughter and I’m a UI/UX Designer and Developer of Mobile and Web applications, and this is my website for JSWORLD Web Development Studio. Click the button below to get more details about the services I offer.</p>\n            <a routerLink=\"/services\" class=\"btn btn-danger btn-lg\">Services Offered</a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"carousel-item carousel-image-2\">\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n          <!--<div class=\"carousel-caption d-none d-sm-block\">-->\n            <h1 class=\"display-3\">MY STORY</h1>\n            <p class=\"lead\">I have over 20 years experience in the Information Technology field and over 7 years specifically in the Mobile and Web development areas. Click the button below to view my background page.</p>\n            <a routerLink=\"/about\" class=\"btn btn-danger btn-lg\">Explore My Journey</a>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"carousel-item carousel-image-3\">\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n          <!--<div class=\"carousel-caption d-none d-sm-block text-right\">-->\n            <h1 class=\"display-3\">WORKING TOGETHER</h1>\n            <p class=\"lead\">Do you have an idea for a mobile application? Are you working on a startup business and need a mobile and web presence? Or just need a website? If you answered “Yes” to any of those questions, click the button below and let’s discuss how your ideas can grow into real world applications!</p>\n            <a routerLink=\"/contact\" class=\"btn btn-danger btn-lg\">Let's Talk</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Previous and Next Controls -->\n    <a href=\"#myCarousel\" data-slide=\"prev\" class=\"carousel-control-prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n    <a href=\"#myCarousel\" data-slide=\"next\" class=\"carousel-control-next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a>\n  </div>\n</section>\n      \n<!--\n\n<div class=\"carousel-item carousel-image-2\">\n    <div class=\"container\">\n      <div class=\"carousel-caption d-none d-sm-block mb-5\">\n        <h1 class=\"display-3\">Heading Two</h1>\n        <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et fringilla nibh. Aliquam tellus eros, luctus vel libero sed, dictum.</p>\n        <a routerLink=\"/about\" class=\"btn btn-danger btn-lg\">Lear More about Me</a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"carousel-item carousel-image-3\">\n    <div class=\"container\">\n      <div class=\"carousel-caption d-none d-sm-block text-right mb-5\">\n        <h1 class=\"display-3\">Heading Three</h1>\n        <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et fringilla nibh. Aliquam tellus eros, luctus vel libero sed, dictum.</p>\n        <a routerLink=\"/contact\" class=\"btn btn-danger btn-lg\">Let's Talk</a>\n      </div>\n    </div>\n  </div>\n</div>\n-->"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function HomeComponent() {
        this.title = 'app';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/movie/movie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<p>\n  movie works!\n</p>\n<div *ngIf=\"movie\">\n    <div class=\"card ml-3 mr-3 mb-3\">\n      <img *ngIf=\"movie.poster_path\" src=\"http://image.tmdb.org/t/p/w185/{{movie.poster_path}}\" alt=\"Popular Movie #{{i+1}}\" class=\"card-img-top\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">{{movie.title}}</h4>\n        <span class=\"card-text\">\n          <h6>Release Date:</h6>\n          <h5>{{movie.release_date}}</h5>\n        </span>\n        <a routerLink=\"/movie/{{movie.id}}\" class=\"btn btn-danger btn-block\">View Details</a>\n      </div>\n    </div>\n</div>\n-->\n<section id=\"movie-detail-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <h2>{{movie?.title}}</h2>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <!--<img src=\"http://image.tmdb.org/t/p/w500/{{movie.poster_path}}\" alt=\"Movie Detail Image\" class=\"img-fluid\">-->\n        <img *ngIf=\"movie?.imdb_id\" src=\"http://image.tmdb.org/t/p/w500/{{movie.poster_path}}\" alt=\"Movie Detail Image\" class=\"img-fluid\">\n      </div>\n      <div class=\"col-md-7\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\">Genres: <span *ngFor=\"let genre of movie?.genres\">{{genre.name}} </span></li>\n          <li class=\"list-group-item\">Release Date: {{movie?.release_date}}</li>\n          <li class=\"list-group-item\">Synopsis: {{movie?.overview}}</li>\n        </ul>\n        <br>\n        <a *ngIf=\"movie?.homepage\" href=\"{{movie?.homepage}}\" target=\"_blank\" class=\"btn btn-danger\">Visit Movie Website</a>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/movie/movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieComponent = /** @class */ (function () {
    function MovieComponent(router, _movieService) {
        var _this = this;
        this.router = router;
        this._movieService = _movieService;
        //movie: Object;
        this.movie = {};
        this.router.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this._movieService.getMovie(this.id).subscribe(function (movie) {
            _this.movie = movie;
            //console.log(movie);
        });
        /*
        this._movieService.getMovie(this.id).subscribe(res => {
          this.movie = res.results;
          console.log(res.results);
        });
        */
    }
    MovieComponent.prototype.ngOnInit = function () {
    };
    MovieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-movie',
            template: __webpack_require__("../../../../../src/app/components/movie/movie.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/movie/movie.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_movie_service__["a" /* MovieService */]) === "function" && _b || Object])
    ], MovieComponent);
    return MovieComponent;
    var _a, _b;
}());

//# sourceMappingURL=movie.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/movies/movies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movies/movies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!--<h2>Find A Movie</h2>-->\n  <div class=\"col-md-12\">\n    <h2>Find A Movie</h2>\n  </div>\n  <div class=\"col-md-12\">\n    <p>Search for a movie using the form below</p>\n  </div>\n  <div class=\"col-md-12\">\n    <form  novalidate class=\"form-inline\" (ngSubmit)=\"searchMovies()\" #f=\"ngForm\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchStr\" name=\"searchStr\">\n      <!--<a href=\"#\" class=\"btn btn-danger\"><i class=\"icon-search\"></i></a>-->\n      <input type=\"submit\" class=\"btn btn-danger\" value=\"Find It\">\n    </form>\n  </div>\n</div>\n<span *ngIf=\"searchRes\">\n  <div class=\"row\">\n    <h2>Search Results</h2>\n  </div>\n  <!--Dispplay Search Results-->\n  <div class=\"card-deck mb-3\">\n    <div *ngFor=\"let movie of searchRes;let i=index\">\n      <div *ngIf=\"i < 15\">\n        <div class=\"card ml-3 mr-3 mb-3\">\n          <img *ngIf=\"movie.poster_path\" src=\"http://image.tmdb.org/t/p/w185/{{movie.poster_path}}\" alt=\"Search Display Movie #{{i+1}}\" class=\"card-img-top\">\n          <!--<img src=\"http://lorempixel.com/300/300/sports/\" alt=\"Movie 1\" class=\"card-img-top\">-->\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">{{movie.title}}</h4>\n            <span class=\"card-text\">\n              <h6>Release Date:</h6>\n              <h5>{{movie.release_date}}</h5>\n            </span>\n            <!--<h5 class=\"card-text\">Release Date:<br>{{movie.release_date}}</h5>-->\n            <a routerLink=\"/movie/{{movie.id}}\" class=\"btn btn-danger btn-block\">View Details</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</span>\n<div class=\"row\">\n  <h2>Popular Movies</h2>\n</div>\n<!--Dispplay Popular Movies-->\n<div class=\"card-deck mb-3\">\n  <div *ngFor=\"let movie of popularList;let i=index\">\n    <div *ngIf=\"i < 5\">\n      <div class=\"card ml-3 mr-3 mb-3\">\n        <img *ngIf=\"movie.poster_path\" src=\"http://image.tmdb.org/t/p/w185/{{movie.poster_path}}\" alt=\"Popular Movie #{{i+1}}\" class=\"card-img-top\">\n        <!--<img src=\"http://lorempixel.com/300/300/sports/\" alt=\"Movie 1\" class=\"card-img-top\">-->\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{movie.title}}</h4>\n          <span class=\"card-text\">\n            <h6>Release Date:</h6>\n            <h5>{{movie.release_date}}</h5>\n          </span>\n          <!--<h5 class=\"card-text\">Release Date:<br>{{movie.release_date}}</h5>-->\n          <a routerLink=\"/movie/{{movie.id}}\" class=\"btn btn-danger btn-block\">View Details</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Now Display Movie In Theaters-->\n<div class=\"row\">\n  <h2>Latest Movies In Theaters</h2>\n</div>\n<div class=\"card-deck mb-3\">\n  <div *ngFor=\"let movie of theatersList;let i=index\">\n    <div *ngIf=\"i < 5\">\n      <div class=\"card ml-3 mr-3 mb-3\">\n        <img *ngIf=\"movie.poster_path\" src=\"http://image.tmdb.org/t/p/w185/{{movie.poster_path}}\" alt=\"Movies In Theater #{{i+1}}\" class=\"card-img-top\">\n        <!--<img src=\"http://lorempixel.com/300/300/sports/\" alt=\"Movie 1\" class=\"card-img-top\">-->\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{movie.title}}</h4>\n          <span class=\"card-text\">\n            <h6>Release Date:</h6>\n            <h5>{{movie.release_date}}</h5>\n          </span>\n          <!--<h5 class=\"card-text\">Release Date:<br>{{movie.release_date}}</h5>-->\n          <a routerLink=\"/movie/{{movie.id}}\" class=\"btn btn-danger btn-block\">View Details</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/movies/movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(_movieService) {
        var _this = this;
        this._movieService = _movieService;
        this._movieService.getPopular().subscribe(function (res) {
            _this.popularList = res.results;
            //console.log(res.results);
        });
        this._movieService.getInTheaters().subscribe(function (res) {
            _this.theatersList = res.results;
            //console.log(res.results);
        });
    }
    MoviesComponent.prototype.ngOnInit = function () {
    };
    MoviesComponent.prototype.searchMovies = function () {
        var _this = this;
        if (this.searchStr) {
            this._movieService.searchMovies(this.searchStr).subscribe(function (res) {
                _this.searchRes = res.results;
                //console.log(this.searchStr);
            });
        }
    };
    MoviesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-movies',
            template: __webpack_require__("../../../../../src/app/components/movies/movies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */]) === "function" && _a || Object])
    ], MoviesComponent);
    return MoviesComponent;
    var _a;
}());

//# sourceMappingURL=movies.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav-area/nav-area.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav-area/nav-area.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">JSWOLRD</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Services</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Fun Page</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Contact</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n-->\n<header id=\"nav-component\">\n  <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <div class=\"container\">\n      <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <a href=\"#\" class=\"navbar-brand\">JSWOLRD</a>\n      <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active-link\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/services\" routerLinkActive=\"active-link\">Services</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/fun_page\" routerLinkActive=\"active-link\">Fun Page</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active-link\">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/components/nav-area/nav-area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavAreaComponent = /** @class */ (function () {
    function NavAreaComponent() {
    }
    NavAreaComponent.prototype.ngOnInit = function () {
    };
    NavAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-nav-area',
            template: __webpack_require__("../../../../../src/app/components/nav-area/nav-area.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav-area/nav-area.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavAreaComponent);
    return NavAreaComponent;
}());

//# sourceMappingURL=nav-area.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<section id=\"services-page\">\n  <div class=\"container\">\n    <p>\n      services works!\n    </p>\n  </div>\n</section>\n-->\n<section id=\"services-page\" data-section=\"services\">\n\t\t<div class=\"fh5co-services\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12 section-heading text-center\" @servicesHeadingAnim>\n\t\t\t\t\t\t<h2 class=\"to-animate\">Services</h2>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-8 services-left-margin subtext\">\n\t\t\t\t\t\t\t\t<h3 class=\"to-animate\">Welcome to the website for JSWORLD Web Development Studio!  Below are some of the services that I offer.</h3>\n\t\t\t\t\t\t\t\t<span class=\"to-animate line-dash\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" @servicesBodyAnim>\n\t\t\t\t\t<div class=\"col-md-4 column1\">\n\t\t\t\t\t\t<div class=\"box-services\">\n\t\t\t\t\t\t\t<i class=\"icon-shield to-animate-2\"></i>\n\t\t\t\t\t\t\t<div class=\"fh5co-post\">\n\t\t\t\t\t\t\t\t<h3>Mobile Design</h3>\n\t\t\t\t\t\t\t\t<p class=\"short-text\">Full design of mobile application using leading-edge software.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"box-services\">\n\t\t\t\t\t\t\t<i class=\"icon-shield to-animate-2\"></i>\n\t\t\t\t\t\t\t<div class=\"fh5co-post\">\n\t\t\t\t\t\t\t\t<h3>Application Prototyping</h3>\n\t\t\t\t\t\t\t\t<p>A working high-level model will be created for your mobile application or website. This is used to reduce questions and increase your confidence with the finished product.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4 column2\">\n\t\t\t\t\t\t<div class=\"box-services\">\n\t\t\t\t\t\t\t<i class=\"icon-shield to-animate-2\"></i>\n\t\t\t\t\t\t\t<div class=\"fh5co-post\">\n\t\t\t\t\t\t\t\t<h3>Web Design</h3>\n\t\t\t\t\t\t\t\t<p>Full design of eCommerce, brochure or informational website using leading-edge software.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"box-services\">\n\t\t\t\t\t\t\t<i class=\"icon-shield to-animate-2\"></i>\n\t\t\t\t\t\t\t<div class=\"fh5co-post\">\n\t\t\t\t\t\t\t\t<h3>Complete Application Development</h3>\n\t\t\t\t\t\t\t\t<p>Full Development of Logos, Mobile Apps and Websites using leading-edge software and application development frameworks (Sketch, Ionic v3 and Angular v2+ specifically). If you need existing maintenance or upgrades using other technologies, that can be discussed as well.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4 column3\">\n\t\t\t\t\t\t<div class=\"box-services\">\n\t\t\t\t\t\t\t<i class=\"icon-shield to-animate-2\"></i>\n\t\t\t\t\t\t\t<div class=\"fh5co-post\">\n\t\t\t\t\t\t\t\t<h3>Logo Design</h3>\n\t\t\t\t\t\t\t\t<p>Need a custom logo to distinguish your brand? This is done using a highly-rated graphics software application.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"box-services\">\n\t\t\t\t\t\t\t<i class=\"icon-shield to-animate-2\"></i>\n\t\t\t\t\t\t\t<div class=\"fh5co-post\">\n\t\t\t\t\t\t\t\t<h3>Project Satisfaction</h3>\n\t\t\t\t\t\t\t\t<p>Your finished project will work as agreed upon and as you expect it to work. We’ll continue to work together through the project deployment phase.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--<div class=\"call-to-action text-center to-animate\"><a href=\"#\" class=\"btn btn-learn\">Learn More</a></div>-->\n\t\t\t</div>\n\t\t</div>\n\t</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("../../../../../src/app/components/services/services.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/services/services.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('servicesHeadingAnim', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])('.to-animate', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(150px)' })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])('.to-animate', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('400ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0)' }))
                        ]))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('servicesBodyAnim', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])('.box-services', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateX(-50px)' })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])('.box-services', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('500ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('800ms 1.0s ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateX(0)' }))
                        ]))
                    ])
                ])
                /*
                trigger('servicesBodyAnim',[
                  transition('* => *', [
                    query('.column1 .fh5co-post', style({ opacity: 0, transform: 'translateY(150px)'})),
                    query('.column1 .fh5co-post', stagger('400ms',[
                      animate('400ms 0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
                    ])),
                    query('.column2 .fh5co-post', style({ opacity: 0, transform: 'translateY(150px)'})),
                    query('.column2 .fh5co-post', stagger('400ms',[
                      animate('400ms 1.0s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
                    ])),
                    query('.column3 .fh5co-post', style({ opacity: 0, transform: 'translateY(150px)'})),
                    query('.column3 .fh5co-post', stagger('400ms',[
                      animate('400ms 1.5s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
                    ])),
                    query('.column1 .icon-shield', style({ opacity: 0, transform: 'translateY(150px)'})),
                    query('.column1 .icon-shield', stagger('400ms',[
                      animate('400ms 0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
                    ])),
                    query('.column2 .icon-shield', style({ opacity: 0, transform: 'translateY(150px)'})),
                    query('.column2 .icon-shield', stagger('400ms',[
                      animate('400ms 1.0s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
                    ])),
                    query('.column3 .icon-shield', style({ opacity: 0, transform: 'translateY(150px)'})),
                    query('.column3 .icon-shield', stagger('400ms',[
                      animate('400ms 1.5s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
                    ]))
                  ])
                ]),
                */
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());

//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/movie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieService = /** @class */ (function () {
    function MovieService(_jsonp) {
        this._jsonp = _jsonp;
        this.apikey = '81afbda1d68d879477495f66a71bde7f';
        //console.log('MovieService Initialized...');
        var now = __WEBPACK_IMPORTED_MODULE_3_moment__();
        this.now_display = now.format('YYYY-MM-DD');
        this.one_week_past_display = now.subtract(1, 'weeks').format('YYYY-MM-DD');
        this.future_display = now.add(1, 'months').format('YYYY-MM-DD'); //strange, now is changed to 1 week before from prior line of code
        //console.log("Today's Date: ", this.now_display);
        //console.log("One Week before Today's Date is: ", this.one_week_past_display);
        //console.log("One Month from Today's Date is: ", this.future_display);
    }
    MovieService.prototype.getPopular = function () {
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apikey)
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.getInTheaters = function () {
        //return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-09-09&primary_release_date.lte=2017-10-13&api_key='+this.apikey)
        //  .map(res => res.json());
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=' + this.one_week_past_display + '&primary_release_date.lte=' + this.now_display + '&api_key=' + this.apikey)
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.searchMovies = function (searchStr) {
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + searchStr + '&sort_by=popularity.desc&api_key=' + this.apikey)
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.getMovie = function (id) {
        return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.apikey)
            .map(function (res) { return res.json(); });
    };
    MovieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */]) === "function" && _a || Object])
    ], MovieService);
    return MovieService;
    var _a;
}());

//# sourceMappingURL=movie.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
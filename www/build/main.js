webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatmain_chatmain__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chatind_chatind__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__photo_photo__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.prof = function () {
        {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
        }
    };
    HomePage.prototype.chatm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chatmain_chatmain__["a" /* ChatmainPage */]);
    };
    HomePage.prototype.chatid = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chatind_chatind__["a" /* ChatindPage */]);
    };
    HomePage.prototype.pho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__photo_photo__["a" /* PhotoPage */]);
    };
    HomePage.prototype.lgn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Ionic\tinder\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar style="min-height:80px">\n   <ion-grid>\n     <ion-row>\n        <ion-col>         \n            <img src="images/profile.jpeg" style="width:60px;height:60px;border-radius:50%">         \n        </ion-col>\n        <ion-col style="margin-top:10px">\n            <div class="can-toggle" >\n              <div class="can-toggle demo-rebrand-2" >                 \n                    <input id="e" type="checkbox" >                \n                    <label for="e">                \n                      <div class="can-toggle__switch" data-checked="On" data-unchecked="No" style="max-width:150px; max-height:50px"></div>             \n                    </label>\n                  </div>\n                  </div>\n                </ion-col>\n        <ion-col text-right style="margin-top:-5px">\n          <button ion-button icon-only large clear color="dark" (click)="chatm()">\n            <ion-icon name="ios-text"></ion-icon>\n          </button>\n        </ion-col>\n     </ion-row>\n   </ion-grid>    \n   </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div >\n  <p text-center >\n    <img src="images/profile.jpeg" style="min-height:100%; max-width:90%;border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;">  \n  </p>  \n  <h3 text-center>Kiara Advani, 24</h3>\n</div>\n  <div text-center style="bottom:10px;position:fixed; align-content:center">\n    <ion-buttons text-center >\n        <button (click)="prof()" ion-button icon-only  outline color="cusyellow" style="width:50px;height:50px;border-radius:50%">\n            <ion-icon name="md-refresh"></ion-icon>\n          </button>\n          <button ion-button icon-only outline color="danger" style="width:70px;height:70px;border-radius:50%">\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n          <button ion-button icon-only outline color="cuspurple" style="width:50px;height:50px;border-radius:50%" (click)="chatid()">\n                <ion-icon name="md-flash"></ion-icon>\n          </button>\n          <button ion-button icon-only outline color="secondary" (click)="lgn()" style="width:70px;height:70px;border-radius:50%">\n                <ion-icon name="md-heart"></ion-icon>\n          </button>\n          <button ion-button icon-only outline color="primary" style="width:50px;height:50px;border-radius:50%" (click)="pho()">\n               <ion-icon name="md-star"></ion-icon>\n            </button>\n    </ion-buttons>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic\tinder\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_match__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__match_match__["a" /* MatchPage */]);
        modal.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Ionic\tinder\src\pages\profile\profile.html"*/'<ion-header>\n    <ion-navbar style="min-height:80px">\n     <ion-grid>\n       <ion-row>\n          <ion-col>         \n              <img src="images/profile.jpeg" style="width:60px;height:60px;border-radius:50%">         \n          </ion-col>\n          <ion-col style="margin-top:10px">\n              <div class="can-toggle" >\n                <div class="can-toggle demo-rebrand-2" >                 \n                      <input id="e" type="checkbox" >                \n                      <label for="e">                \n                        <div class="can-toggle__switch" data-checked="On" data-unchecked="No" style="max-width:150px; max-height:50px"></div>             \n                      </label>\n                    </div>\n                    </div>\n                  </ion-col>\n          <ion-col text-right style="margin-top:-5px">\n            <button ion-button icon-only large clear color="dark">\n              <ion-icon name="ios-text"></ion-icon>\n            </button>\n          </ion-col>\n       </ion-row>\n     </ion-grid>    \n     </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n      <img src="images/profile.jpeg" style="width:80px;height:80px;border-radius:50%">  \n      \n  </p>\n  <p text-center>\n    Kiara Advani <br>\n   <span style="color:grey"> Actress <br>\n    Film Industry</span>\n  </p>\n  <ion-row text-center>\n    <ion-col>\n        <button ion-button icon-left outline color="cuspurple">\n            <ion-icon style="margin-top:-4px" name="home"></ion-icon>\n           Tinder Plus\n          </button> \n    </ion-col>\n    <ion-col>\n        <button ion-button icon-left outline color="cuspurple">\n            <ion-icon style="margin-top:-4px" name="md-cog"></ion-icon>\n           Settings\n          </button> \n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n        <p text-center>\n            <img src="images/huma.jpg" style="width:80px;height:80px;border-radius:50%">  \n            \n        </p>\n    </ion-col>\n    <ion-col>\n        <p text-center>\n            <img src="images/disha.jpg" style="width:80px;height:80px;border-radius:50%">  \n            \n        </p>\n    </ion-col>\n    <ion-col>\n        <p text-center>\n            <img src="images/madh.jpg" style="width:80px;height:80px;overflow:hidden; border-radius:50%">  \n            \n        </p>\n    </ion-col>\n  </ion-row>\n  <h4 text-center>Share with Friends</h4>\n  <h5 text-center>Find match</h5>\n  <p text-center>\n  <button ion-button full (click)="presentModal()" style="border-radius:40px; background: linear-gradient(to right, #3A1C71 , #D76D77, #FFAF7B);\n  ">Share</button>\n</p>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic\tinder\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchPage = /** @class */ (function () {
    function MatchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MatchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchPage');
    };
    MatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-match',template:/*ion-inline-start:"D:\Ionic\tinder\src\pages\match\match.html"*/'<ion-content padding style="background-color:rgba(0,0,0,0.9)">\n<h1 style="font-size:60px;font-family: \'Sacramento\', cursive;margin-top:50px" text-center>\n  <span style="color:white">It\'s a </span><span style="color:red">Match </span>\n</h1>\n<h6 style="color:white" text-center>You and Huma liked each other </h6>\n<ion-row>\n  <ion-col text-center>\n      <img src="images/disha.jpg" style="border-radius:50%;width:100px;height:100px">\n  </ion-col>\n  <ion-col col-2 text-center>\n      <button ion-button icon-only clear color="danger" style="margin-top:30px"><ion-icon name="md-heart"></ion-icon></button>\n  </ion-col>\n  <ion-col text-center>\n      <img src="images/tiger.jpg" style="border-radius:50%;width:100px;height:100px; ">\n  </ion-col>\n</ion-row>\n<button ion-button full style="margin-top:20px;border-radius:40px; background: linear-gradient(to right, #3A1C71 , #D76D77, #FFAF7B);\n  ">Send Message</button>\n  <button ion-button full style="margin-top:20px; border-radius:40px; background: linear-gradient(to right, rgb(65, 64, 64) , grey, rgb(65, 64, 64));\n  ">Keep Swiping</button>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic\tinder\src\pages\match\match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MatchPage);
    return MatchPage;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatmainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatmainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatmainPage = /** @class */ (function () {
    function ChatmainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatmainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatmainPage');
    };
    ChatmainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatmain',template:/*ion-inline-start:"D:\Ionic\tinder\src\pages\chatmain\chatmain.html"*/'<ion-header>\n    <ion-navbar style="min-height:80px">\n     <ion-grid>\n       <ion-row>\n          <ion-col>         \n              <img src="images/profile.jpeg" style="width:60px;height:60px;border-radius:50%">         \n          </ion-col>\n          <ion-col style="margin-top:10px">\n              <div class="can-toggle" >\n                <div class="can-toggle demo-rebrand-2" >                 \n                      <input id="e" type="checkbox" >                \n                      <label for="e">                \n                        <div class="can-toggle__switch" data-checked="On" data-unchecked="No" style="max-width:150px; max-height:50px"></div>             \n                      </label>\n                    </div>\n                    </div>\n                  </ion-col>\n          <ion-col text-right style="margin-top:-5px">\n            <button ion-button icon-only large clear color="dark" >\n              <ion-icon name="ios-text"></ion-icon>\n            </button>\n          </ion-col>\n       </ion-row>\n     </ion-grid>    \n     </ion-navbar>\n  </ion-header>\n\n<ion-content>\n    <div >\n        <ion-segment [(ngModel)]="chats" style="background: linear-gradient(to right, #3A1C71 , #D76D77, #FFAF7B)">\n          <ion-segment-button value="heart" style="color:white">\n              <ion-icon name="heart"></ion-icon>\n          </ion-segment-button>\n          <ion-segment-button value="chat" style="color:white">\n              <ion-icon name="chatboxes"></ion-icon>\n          </ion-segment-button>\n          <ion-segment-button value="star" style="color:white">\n              <ion-icon name="star"></ion-icon>\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n      \n      <div [ngSwitch]="chats">\n        <ion-list *ngSwitchCase="\'heart\'">\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="images/disha.jpg" style="border-radius:50%">\n            </ion-thumbnail>\n            <h2>Disha</h2> <br>\n            <p>This is text message</p>\n            <ion-badge item-end>2</ion-badge>\n\n          </ion-item>\n          <ion-item>\n              <ion-thumbnail item-start>\n                <img src="images/disha.jpg" style="border-radius:50%">\n              </ion-thumbnail>\n              <h2>Disha</h2>\n              <ion-badge item-end>2</ion-badge>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="images/disha.jpg" style="border-radius:50%">\n                </ion-thumbnail>\n                <h2>Disha</h2>\n                <ion-badge item-end>2</ion-badge>\n              </ion-item>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="images/disha.jpg" style="border-radius:50%">\n                  </ion-thumbnail>\n                  <h2>Disha</h2>\n                  <ion-badge item-end>2</ion-badge>\n                </ion-item>\n                <ion-item>\n                    <ion-thumbnail item-start>\n                      <img src="images/disha.jpg" style="border-radius:50%">\n                    </ion-thumbnail>\n                    <h2>Disha</h2>\n                    <ion-badge item-end>2</ion-badge>\n                  </ion-item>\n         \n        </ion-list>\n      \n        <ion-list *ngSwitchCase="\'chat\'">\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="images/disha.jpg" style="border-radius:50%">\n                </ion-thumbnail>\n                <h2>Disha</h2>\n                <ion-badge item-end>2</ion-badge>\n              </ion-item>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="images/disha.jpg" style="border-radius:50%">\n                  </ion-thumbnail>\n                  <h2>Disha</h2>\n                  <ion-badge item-end>2</ion-badge>\n                </ion-item>\n                <ion-item>\n                    <ion-thumbnail item-start>\n                      <img src="images/disha.jpg" style="border-radius:50%">\n                    </ion-thumbnail>\n                    <h2>Disha</h2>\n                    <ion-badge item-end>2</ion-badge>\n                  </ion-item>\n                  <ion-item>\n                      <ion-thumbnail item-start>\n                        <img src="images/disha.jpg" style="border-radius:50%">\n                      </ion-thumbnail>\n                      <h2>Disha</h2>\n                      <ion-badge item-end>2</ion-badge>\n                    </ion-item>\n                    <ion-item>\n                        <ion-thumbnail item-start>\n                          <img src="images/disha.jpg" style="border-radius:50%">\n                        </ion-thumbnail>\n                        <h2>Disha</h2>\n                        <ion-badge item-end>2</ion-badge>\n                      </ion-item>\n       \n        </ion-list>\n        <ion-list *ngSwitchCase="\'star\'">\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="images/disha.jpg" style="border-radius:50%">\n                </ion-thumbnail>\n                <h2>Disha</h2>\n                <ion-badge item-end>2</ion-badge>\n              </ion-item>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="images/disha.jpg" style="border-radius:50%">\n                  </ion-thumbnail>\n                  <h2>Disha</h2>\n                  <ion-badge item-end>2</ion-badge>\n                </ion-item>\n                <ion-item>\n                    <ion-thumbnail item-start>\n                      <img src="images/disha.jpg" style="border-radius:50%">\n                    </ion-thumbnail>\n                    <h2>Disha</h2>\n                    <ion-badge item-end>2</ion-badge>\n                  </ion-item>\n                  <ion-item>\n                      <ion-thumbnail item-start>\n                        <img src="images/disha.jpg" style="border-radius:50%">\n                      </ion-thumbnail>\n                      <h2>Disha</h2>\n                      <ion-badge item-end>2</ion-badge>\n                    </ion-item>\n                    <ion-item>\n                        <ion-thumbnail item-start>\n                          <img src="images/disha.jpg" style="border-radius:50%">\n                        </ion-thumbnail>\n                        <h2>Disha</h2>\n                        <ion-badge item-end>2</ion-badge>\n                      </ion-item>\n         \n          </ion-list>\n      </div>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic\tinder\src\pages\chatmain\chatmain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChatmainPage);
    return ChatmainPage;
}());

//# sourceMappingURL=chatmain.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatindPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatindPage = /** @class */ (function () {
    function ChatindPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatindPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatindPage');
    };
    ChatindPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatind',template:/*ion-inline-start:"D:\Ionic\tinder\src\pages\chatind\chatind.html"*/'<ion-header>\n\n  <ion-navbar>\n  <ion-row>\n      <ion-col>         \n          <img src="images/tiger.jpg" style="width:60px;height:60px;border-radius:50%">         \n      </ion-col>\n      <ion-col style="margin-top:15px">\n        Tiger\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button icon-only clear>\n            <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-col>\n  </ion-row>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <ion-row style="margin-top:5px">\n    <ion-col col-3>\n      &nbsp;\n    </ion-col>\n    <ion-col col-7 style="background-color:green; min-height:50px;border-radius:10px;" >\n      <p style=" padding:5px; color:white">Hi this is message. </p>\n    </ion-col>\n    <ion-col text-right style="    margin-top: 12px">\n        <img src="images/tiger.jpg" style="width:50px;height:50px;border-radius:50%">\n    </ion-col>\n  </ion-row>\n  <ion-row style="margin-top:5px">\n      <ion-col text-left style="    margin-top: 12px">\n          <img src="images/disha.jpg" style="width:50px;height:50px;border-radius:50%">\n      </ion-col>\n      <ion-col col-7  style="background-color:#d3d3d3; min-height:50px;border-radius:10px;" >\n        <p style="padding:5px; color:black">Hi this is message. Hi this is message.Hi this is message.</p>\n      </ion-col>\n     \n      <ion-col col-3>\n          &nbsp;\n        </ion-col>\n    </ion-row>\n    <ion-row style="margin-top:5px">\n        <ion-col col-3>\n          &nbsp;\n        </ion-col>\n        <ion-col col-7 style="background-color:green; min-height:50px;border-radius:10px;" >\n          <p style=" padding:5px; color:white">Hi this is message. </p>\n        </ion-col>\n        <ion-col text-right style="    margin-top: 12px">\n            <img src="images/tiger.jpg" style="width:50px;height:50px;border-radius:50%">\n        </ion-col>\n      </ion-row>\n      <ion-row style="margin-top:5px">\n          <ion-col text-left style="    margin-top: 12px">\n              <img src="images/disha.jpg" style="width:50px;height:50px;border-radius:50%">\n          </ion-col>\n          <ion-col col-7  style="background-color:#d3d3d3; min-height:50px;border-radius:10px;" >\n            <p style="padding:5px; color:black">Hi this is message. Hi this is message.Hi this is message.</p>\n          </ion-col>\n         \n          <ion-col col-3>\n              &nbsp;\n            </ion-col>\n        </ion-row>\n        <ion-footer>\n            <ion-toolbar>\n              <ion-row>\n              <ion-col col-1>\n                  <p>\n                      <button ion-button icon-right icon-only clear color="dark">                  \n                        <ion-icon name="camera"></ion-icon>\n                      </button>                \n                    </p>\n              </ion-col>\n              <ion-col col-9>\n                  <ion-item style="margin-top:15px; margin-left:18px">                    \n                      <ion-input type="text" value=""></ion-input>\n                    </ion-item>\n              </ion-col>\n              <ion-col col-1>\n                  <p text-right>\n                      <button ion-button icon-right icon-only clear color="dark">                  \n                        <ion-icon name="send"></ion-icon>\n                      </button>                \n                    </p>\n            </ion-col>\n          </ion-row>\n            </ion-toolbar>\n          </ion-footer>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic\tinder\src\pages\chatind\chatind.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChatindPage);
    return ChatindPage;
}());

//# sourceMappingURL=chatind.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhotoPage = /** @class */ (function () {
    function PhotoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PhotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhotoPage');
    };
    PhotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-photo',template:/*ion-inline-start:"D:\Ionic\tinder\src\pages\photo\photo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-row>\n  <ion-col col-8 style="width:100%; max-height:300px">\n      <img src="images/profile.jpeg" style="border-radius:5%;box-shadow: 2px 3px 5px grey;z-index:-1; position: relative;">\n      <p class="imglg" >1</p>\n  </ion-col>\n  <ion-col col-4>\n      <img src="images/profile.jpeg" style="border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;">\n      <p class="imgsm" >2</p>\n      <p class="imgsmb" ><ion-icon style="margin-top:5px" name="cog"></ion-icon></p>\n      <br>\n      <img src="images/profile.jpeg" style="border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;">  \n      <p class="imgsm" >3</p>\n      <p class="imgsmb" ><ion-icon style="margin-top:5px" name="cog"></ion-icon></p>\n  </ion-col>  \n  <ion-col col-4>\n      <img src="images/profile.jpeg" style="border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;"> \n      <p class="imgsm" >4</p>\n      <p class="imgsmb" ><ion-icon style="margin-top:5px" name="cog"></ion-icon></p>\n  </ion-col>\n  <ion-col col-4>\n      <img src="images/profile.jpeg" style="border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;"> \n      <p class="imgsm" >5</p>\n      <p class="imgsmb" ><ion-icon style="margin-top:5px" name="cog"></ion-icon></p>\n  </ion-col>\n  <ion-col col-4>\n      <img src="images/profile.jpeg" style="border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;"> \n      <p class="imgsm">6</p>\n      <p class="imgsmb" ><ion-icon style="margin-top:5px" name="cog"></ion-icon></p>\n  </ion-col>\n</ion-row>\n<ion-item>\n    <ion-toggle checked="false"></ion-toggle>\n    <ion-label>\n      Smart Photos\n    </ion-label>\n    <ion-icon name=\'photos\' item-start></ion-icon>\n  </ion-item>\n  <p text-center padding>\n  <button ion-button full class="butn">Save</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic\tinder\src\pages\photo\photo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PhotoPage);
    return PhotoPage;
}());

//# sourceMappingURL=photo.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Ionic\tinder\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Login Page</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <h4 text-center padding>Discover new people around you</h4>\n  <p text-center >\n    <img src="images/profile.jpeg" style="min-height:100%; max-width:90%;border-radius:5%;box-shadow: 2px 3px 5px grey;">  \n  </p>  \n  <p text-center padding>\n      <button ion-button full class="butn">Login using Facebook</button>\n      </p>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <p text-center>\n        We don\'t post anything to Facebook\n      </p>   \n      <p text-center>By Signing in, you agree with out Terms and Condition and Privacy Policy</p>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"D:\Ionic\tinder\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_match_match__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chatmain_chatmain__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chatind_chatind__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_photo_photo__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(199);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chatmain_chatmain__["a" /* ChatmainPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatind_chatind__["a" /* ChatindPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_photo_photo__["a" /* PhotoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chatmain_chatmain__["a" /* ChatmainPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatind_chatind__["a" /* ChatindPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_photo_photo__["a" /* PhotoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Ionic\tinder\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Ionic\tinder\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map
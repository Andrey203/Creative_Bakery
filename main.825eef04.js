parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=window.$;e(".burger-menu-wrapper").click(function(){e(".header__sidebar").hasClass("show")?(e(".header__sidebar").removeClass("show"),e(".header__nav-wrapper").removeClass("show"),e(".burger-menu").removeClass("burger-hide"),e(".burger-menu-line").removeClass("line-hide"),e(".burger-menu-close").removeClass("close-show"),e(".burger-menu-close-line").removeClass("close-line-show")):(e(".header__sidebar").addClass("show"),e(".header__nav-wrapper").addClass("show"),e(".burger-menu").addClass("burger-hide"),e(".burger-menu-line").addClass("line-hide"),e(".burger-menu-close").addClass("close-show"),e(".burger-menu-close-line").addClass("close-line-show"))}),e(".nav__item").click(function(){e(".header__sidebar").hasClass("show")&&(e(".header__sidebar").removeClass("show"),e(".header__nav-wrapper").removeClass("show"),e(".burger-menu").removeClass("burger-hide"),e(".burger-menu-line").removeClass("line-hide"),e(".burger-menu-close").removeClass("close-show"),e(".burger-menu-close-line").removeClass("close-line-show"))}),setInterval(function(){var s=0,a=e(".header__content").css("width"),r=parseInt(a),i=Math.round(parseInt(e(".header-carousel__list").css("margin-left")));switch(0===i&&(s=1),i>-r-4&&i<4-r&&(s=2),i>2*-r-4&&i<2*-r+4&&(s=3),s){case 1:e(".header-carousel__list").css("margin-left","-100%"),e(".header__switch-item--active").removeClass("header__switch-item--active").next().addClass("header__switch-item--active");break;case 2:e(".header-carousel__list").css("margin-left","-200%"),e(".header__switch-item--active").removeClass("header__switch-item--active").next().addClass("header__switch-item--active");break;case 3:e(".header-carousel__list").css("margin-left","0"),e(".header__switch-item--active").removeClass("header__switch-item--active").prev().prev().addClass("header__switch-item--active")}},3e3),e(".header__arrow-next").click(function(){var s=0,a=e(".header__content").css("width"),r=parseInt(a),i=Math.round(parseInt(e(".header-carousel__list").css("margin-left")));switch(0===i&&(s=1),i>-r-4&&i<4-r&&(s=2),i>2*-r-4&&i<2*-r+4&&(s=3),s){case 1:e(".header-carousel__list").css("margin-left","-100%"),e(".header__switch-item--active").removeClass("header__switch-item--active").next().addClass("header__switch-item--active");break;case 2:e(".header-carousel__list").css("margin-left","-200%"),e(".header__switch-item--active").removeClass("header__switch-item--active").next().addClass("header__switch-item--active");break;case 3:e(".header-carousel__list").css("margin-left","0"),e(".header__switch-item--active").removeClass("header__switch-item--active").prev().prev().addClass("header__switch-item--active")}}),e(".header__arrow-prev").click(function(){var s=0,a=e(".header__content").css("width"),r=parseInt(a),i=Math.round(parseInt(e(".header-carousel__list").css("margin-left")));switch(0===i&&(s=1),i>-r-4&&i<4-r&&(s=2),i>2*-r-4&&i<2*-r+4&&(s=3),s){case 1:e(".header-carousel__list").css("margin-left","-200%"),e(".header__switch-item--active").removeClass("header__switch-item--active").next().next().addClass("header__switch-item--active");break;case 2:e(".header-carousel__list").css("margin-left","0"),e(".header__switch-item--active").removeClass("header__switch-item--active").prev().addClass("header__switch-item--active");break;case 3:e(".header-carousel__list").css("margin-left","-100%"),e(".header__switch-item--active").removeClass("header__switch-item--active").prev().addClass("header__switch-item--active")}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.825eef04.js.map
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var es5 = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=86)}({17:function(e,t,r){var n,i,s;i=[],void 0===(s="function"==typeof(n=function(){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);}return r=e,i=[{key:"getFirstMatch",value:function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""}},{key:"getSecondMatch",value:function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""}},{key:"matchAndReturnConst",value:function(e,t,r){if(e.test(t))return r}},{key:"getWindowsVersionName",value:function(e){switch(e){case"NT":return "NT";case"XP":return "XP";case"NT 5.0":return "2000";case"NT 5.1":return "XP";case"NT 5.2":return "2003";case"NT 6.0":return "Vista";case"NT 6.1":return "7";case"NT 6.2":return "8";case"NT 6.3":return "8.1";case"NT 10.0":return "10";default:return}}},{key:"getAndroidVersionName",value:function(e){var t=e.split(".").splice(0,2).map(function(e){return parseInt(e,10)||0});if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":void 0}},{key:"getVersionPrecision",value:function(e){return e.split(".").length}},{key:"compareVersions",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),o=Math.max(i,s),a=0,u=e.map([t,r],function(t){var r=o-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});for(n&&(a=o-Math.min(i,s)),o-=1;o>=a;){if(u[0][o]>u[1][o])return 1;if(u[0][o]===u[1][o]){if(o===a)return 0;o-=1;}else if(u[0][o]<u[1][o])return -1}}},{key:"map",value:function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n}}],(n=null)&&t(r.prototype,n),i&&t(r,i),e;var r,n,i;}();e.exports=r;})?n.apply(t,i):n)||(e.exports=s);},86:function(e,t,r){var n,i,s;i=[t,r(87)],void 0===(s="function"==typeof(n=function(r,n){function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}var s;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,n=(s=n)&&s.__esModule?s:{default:s};var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);}return t=e,s=[{key:"getParser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("string"!=typeof e)throw new Error("UserAgent should be a string");return new n.default(e,t)}},{key:"parse",value:function(e){return new n.default(e).getResult()}}],(r=null)&&i(t.prototype,r),s&&i(t,s),e;var t,r,s;}();r.default=o,e.exports=t.default;})?n.apply(t,i):n)||(e.exports=s);},87:function(e,t,r){var n,i,s;i=[t,r(88),r(89),r(90),r(91),r(17)],void 0===(s="function"==typeof(n=function(r,n,i,s,o,a){function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return (c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,n=u(n),i=u(i),s=u(s),o=u(o);var f=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),null==t||""===t)throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},!0!==r&&this.parse();}return t=e,(r=[{key:"getUA",value:function(){return this._ua}},{key:"test",value:function(e){return e.test(this._ua)}},{key:"parseBrowser",value:function(){var e=this;this.parsedResult.browser={};var t=n.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser}},{key:"getBrowser",value:function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}},{key:"getBrowserName",value:function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}},{key:"getBrowserVersion",value:function(){return this.getBrowser().version}},{key:"getOS",value:function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}},{key:"parseOS",value:function(){var e=this;this.parsedResult.os={};var t=i.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os}},{key:"getOSName",value:function(e){var t=this.getOS(),r=t.name;return e?String(r).toLowerCase()||"":r||""}},{key:"getOSVersion",value:function(){return this.getOS().version}},{key:"getPlatform",value:function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}},{key:"getPlatformType",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.getPlatform(),r=t.type;return e?String(r).toLowerCase()||"":r||""}},{key:"parsePlatform",value:function(){var e=this;this.parsedResult.platform={};var t=s.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform}},{key:"getEngine",value:function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}},{key:"getEngineName",value:function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}},{key:"parseEngine",value:function(){var e=this;this.parsedResult.engine={};var t=o.default.find(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t)});throw new Error("Browser's test function is not valid")});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine}},{key:"parse",value:function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}},{key:"getResult",value:function(){return Object.assign({},this.parsedResult)}},{key:"satisfies",value:function(e){var t=this,r={},n=0,i={},s=0,o=Object.keys(e);if(o.forEach(function(t){var o=e[t];"string"==typeof o?(i[t]=o,s+=1):"object"===c(o)&&(r[t]=o,n+=1);}),n>0){var a=Object.keys(r),u=a.find(function(e){return t.isOS(e)});if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var f=a.find(function(e){return t.isPlatform(e)});if(f){var l=this.satisfies(r[f]);if(void 0!==l)return l}}if(s>0){var v=Object.keys(i),p=v.find(function(e){return t.isBrowser(e)});if(void 0!==p)return this.compareVersion(i[p])}}},{key:"isBrowser",value:function(e){return this.getBrowserName(!0)===String(e).toLowerCase()}},{key:"compareVersion",value:function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return ">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf((0, a.compareVersions)(i,r,n))>-1}},{key:"isOS",value:function(e){return this.getOSName(!0)===String(e).toLowerCase()}},{key:"isPlatform",value:function(e){return this.getPlatformType(!0)===String(e).toLowerCase()}},{key:"isEngine",value:function(e){return this.getEngineName(!0)===String(e).toLowerCase()}},{key:"is",value:function(e){return this.isBrowser(e)||this.isOS(e)||this.isPlatform(e)}},{key:"some",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.some(function(t){return e.is(t)})}}])&&d(t.prototype,r),e;var t,r;}();r.default=f,e.exports=t.default;})?n.apply(t,i):n)||(e.exports=s);},88:function(e,t,r){var n,i,s;i=[t,r(17)],void 0===(s="function"==typeof(n=function(r,n){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=/version\/(\d+(\.?_?\d+)+)/i,s=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=(0, n.getFirstMatch)(/googlebot\/(\d+(\.\d+))/i,e)||(0, n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=(0, n.getFirstMatch)(i,e)||(0, n.getFirstMatch)(/(?:opera)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=(0, n.getFirstMatch)(/(?:opr|opios)[\s\/](\S+)/i,e)||(0, n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=(0, n.getFirstMatch)(i,e)||(0, n.getFirstMatch)(/(?:SamsungBrowser)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=(0, n.getFirstMatch)(i,e)||(0, n.getFirstMatch)(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=(0, n.getFirstMatch)(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i,e)||(0, n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=(0, n.getFirstMatch)(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i,e)||(0, n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=(0, n.getFirstMatch)(/(?:swing)[\s\/](\d+(?:\.\d+)+)/i,e)||(0, n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=(0, n.getFirstMatch)(i,e)||(0, n.getFirstMatch)(/(?:coast)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=(0, n.getFirstMatch)(i,e)||(0, n.getFirstMatch)(/(?:yabrowser)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=(0, n.getFirstMatch)(i,e)||(0, n.getFirstMatch)(/(?:ucbrowser)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=(0, n.getFirstMatch)(i,e)||(0, n.getFirstMatch)(/(?:Maxthon|mxios)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=(0, n.getFirstMatch)(i,e)||(0, n.getFirstMatch)(/(?:epiphany)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=(0, n.getFirstMatch)(i,e)||(0, n.getFirstMatch)(/(?:puffin)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=(0, n.getFirstMatch)(i,e)||(0, n.getFirstMatch)(/(?:sleipnir)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=(0, n.getFirstMatch)(i,e)||(0, n.getFirstMatch)(/(?:k-meleon)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=(0, n.getFirstMatch)(/(?:micromessenger)[\s\/](\d+(\.?_?\d+)+)/i,e)||(0, n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=(0, n.getFirstMatch)(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=(0, n.getSecondMatch)(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=(0, n.getFirstMatch)(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=(0, n.getFirstMatch)(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=(0, n.getFirstMatch)(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=(0, n.getFirstMatch)(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=(0, n.getFirstMatch)(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=(0, n.getFirstMatch)(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=(0, n.getFirstMatch)(i,e)||(0, n.getFirstMatch)(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=(0, n.getFirstMatch)(i,e)||(0, n.getFirstMatch)(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=(0, n.getFirstMatch)(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=(0, n.getFirstMatch)(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||(0, n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=(0, n.getFirstMatch)(/(?:qupzilla)[\s\/](\d+(\.?_?\d+)+)/i,e)||(0, n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=(0, n.getFirstMatch)(/(?:firefox|iceweasel|fxios)[\s\/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=(0, n.getFirstMatch)(/(?:chromium)[\s\/](\d+(\.?_?\d+)+)/i,e)||(0, n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=(0, n.getFirstMatch)(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=(0, n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=(0, n.getFirstMatch)(i,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){return {name:(0, n.getFirstMatch)(/^(.*)\/(.*) /,e),version:(0, n.getSecondMatch)(/^(.*)\/(.*) /,e)}}}];r.default=s,e.exports=t.default;})?n.apply(t,i):n)||(e.exports=s);},89:function(e,t,r){var n,i,s;i=[t,r(17)],void 0===(s="function"==typeof(n=function(r,n){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=[{test:[/windows phone/i],describe:function(e){var t=(0, n.getFirstMatch)(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return {name:"Windows Phone",version:t}}},{test:[/windows/i],describe:function(e){var t=(0, n.getFirstMatch)(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=(0, n.getWindowsVersionName)(t);return {name:"Windows",version:t,versionName:r}}},{test:[/macintosh/i],describe:function(e){var t=(0, n.getFirstMatch)(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,".");return {name:"macOS",version:t}}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=(0, n.getFirstMatch)(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return {name:"iOS",version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=(0, n.getFirstMatch)(/android[\s\/-](\d+(\.\d+)*)/i,e),r=(0, n.getAndroidVersionName)(t),i={name:"Android",version:t};return r&&(i.versionName=r),i}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=(0, n.getFirstMatch)(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:"WebOS"};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=(0, n.getFirstMatch)(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||(0, n.getFirstMatch)(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||(0, n.getFirstMatch)(/\bbb(\d+)/i,e);return {name:"BlackBerry",version:t}}},{test:[/bada/i],describe:function(e){var t=(0, n.getFirstMatch)(/bada\/(\d+(\.\d+)*)/i,e);return {name:"Bada",version:t}}},{test:[/tizen/i],describe:function(e){var t=(0, n.getFirstMatch)(/tizen[\/\s](\d+(\.\d+)*)/i,e);return {name:"Tizen",version:t}}},{test:[/linux/i],describe:function(){return {name:"Linux"}}},{test:[/CrOS/],describe:function(){return {name:"Chrome OS"}}}];r.default=i,e.exports=t.default;})?n.apply(t,i):n)||(e.exports=s);},90:function(e,t,r){var n,i,s;i=[t,r(17)],void 0===(s="function"==typeof(n=function(r,n){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i={tablet:"tablet",mobile:"mobile",desktop:"desktop"},s=[{test:[/googlebot/i],describe:function(){return {type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=(0, n.getFirstMatch)(/(can-l01)/i,e)&&"Nova",r={type:i.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return {type:i.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return {type:i.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return {type:i.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return {type:i.tablet,vendor:"Amazon"}}},{test:[/tablet/i],describe:function(){return {type:i.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=(0, n.getFirstMatch)(/(ipod|iphone)/i,e);return {type:i.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return {type:i.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return {type:i.mobile}}},{test:function(e){return "blackberry"===e.getBrowserName(!0)},describe:function(){return {type:i.mobile,vendor:"BlackBerry"}}},{test:function(e){return "bada"===e.getBrowserName(!0)},describe:function(){return {type:i.mobile}}},{test:function(e){return "windows phone"===e.getBrowserName()},describe:function(){return {type:i.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return "android"===e.getOSName(!0)&&t>=3},describe:function(){return {type:i.tablet}}},{test:function(e){return "android"===e.getOSName(!0)},describe:function(){return {type:i.mobile}}},{test:function(e){return "macos"===e.getOSName(!0)},describe:function(){return {type:i.desktop,vendor:"Apple"}}},{test:function(e){return "windows"===e.getOSName(!0)},describe:function(){return {type:i.desktop}}},{test:function(e){return "linux"===e.getOSName(!0)},describe:function(){return {type:i.desktop}}}];r.default=s,e.exports=t.default;})?n.apply(t,i):n)||(e.exports=s);},91:function(e,t,r){var n,i,s;i=[t,r(17)],void 0===(s="function"==typeof(n=function(r,n){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=[{test:function(e){return "microsoft edge"===e.getBrowserName(!0)},describe:function(e){var t=(0, n.getFirstMatch)(/edge\/(\d+(\.?_?\d+)+)/i,e);return {name:"EdgeHTML",version:t}}},{test:[/trident/i],describe:function(e){var t={name:"Trident"},r=(0, n.getFirstMatch)(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:"Presto"},r=(0, n.getFirstMatch)(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:"Gecko"},r=(0, n.getFirstMatch)(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return {name:"Blink"}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:"WebKit"},r=(0, n.getFirstMatch)(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];r.default=i,e.exports=t.default;})?n.apply(t,i):n)||(e.exports=s);}})});
});

var bowser = unwrapExports(es5);
var es5_1 = es5.bowser;

const detector = typeof window !== 'undefined' ? {
  ua: window.navigator.userAgent.toLowerCase(),
  base: bowser.getParser(window.navigator.userAgent),
  window: window,
  // https://stackoverflow.com/questions/58019463/how-to-detect-device-name-in-safari-on-ios-13-while-it-doesnt-show-the-correct
  isSpoofedIpad: (/iPad/.test(navigator.platform) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && !window.MSStream
} : {
  ua: '',
  base: {
    getOSName: () => 'node',
    getOSVersion: () => 1,
    getBrowserName: () => 'node',
    getBrowserVersion: () => 1,
    getPlatform: () => ({
      type: 'node',
      vendor: 'node'
    })
  },
  window: {
    innerWidth: 1440,
    innerHeight: 900,
    navigator: {
      vendor: 'node'
    }
  },
  isSpoofedIpad: false
};

class OS {
  constructor() {
    _defineProperty(this, "supportedBots", ['facebookexternalhit', 'skypeuripreview', 'baiduspider', 'linkedinbot', 'ia_archiver', 'duckduckbot', 'twitterbot', 'googlebot', 'yandexbot', 'bingbot', 'facebot', 'tumblr', 'slurp', 'google (+https://developers.google.com/+/web/snippet/)', 'https://developers.google.com/+/web/snippet/']);

    this.name = detector.isSpoofedIpad ? 'ios' : detector.base.getOSName().toLowerCase();
    this.ios = this.name === 'ios';
    this.android = this.name === 'android';
    this.windowsPhone = this.name === 'windows phone';
    this.blackBerry = this.name === 'blackberry';
    this.mac = this.name === 'macos';
    this.windows = this.name === 'windows';
    this.linux = this.name === 'linux';
    this.chromeos = this.name === 'chrome os';
    this.node = this.name === 'node';
  }

  get bot() {
    return Boolean(this.supportedBots.filter(bot => detector.ua.indexOf(bot.toLowerCase()) !== -1).length);
  }

  get version() {
    return detector.base.getOSVersion() || 0;
  }

  get majorVersion() {
    return parseInt(this.version.replace(/[^0-9.]/g, ''), 10);
  }

}

let os = new OS();

class Browser {
  constructor() {
    this.name = detector.ua.includes('edg/') // https://github.com/lancedikson/bowser/issues/416
    ? 'microsoft edge' : detector.base.getBrowserName().toLowerCase();
    this.vendor = detector.window.navigator.vendor ? detector.window.navigator.vendor.toLowerCase() : '';
    this.chrome = this.name === 'chrome';
    this.firefox = this.name === 'firefox';
    this.safari = this.name === 'safari';
    this.edge = this.name === 'microsoft edge';
    this.ie = this.name === 'internet explorer';
    this.opera = this.name === 'opera';
    this.node = this.name === 'node';
    this.instagram = /instagram/i.test(detector.ua);
    this.pinterest = /pinterest/i.test(detector.ua);
    this.facebook = /fban|fbav/i.test(detector.ua);
    this.linkedIn = /linkedin/i.test(detector.ua);
    this.snapchat = /snapchat/i.test(detector.ua);
    this.whatsApp = /whatsapp/i.test(detector.ua);
    this.twitter = /twitter/i.test(detector.ua);
    this.weChat = /wechat|micromessenger/i.test(detector.ua);
    this.tikTok = /musical_ly/i.test(detector.ua);
    this.inApp = this.instagram || this.pinterest || this.facebook || this.linkedIn || this.snapchat || this.whatsApp || this.twitter || this.weChat || this.tikTok || os.ios && os.majorVersion >= 11 && this.safari && typeof detector.window.navigator.mediaDevices === 'undefined';
  }

  get version() {
    return detector.base.getBrowserVersion() || 0;
  }

  get majorVersion() {
    return parseInt(this.version.replace(/[^0-9.]/g, ''), 10);
  }

}

let browser = new Browser();

class Device {
  constructor() {
    this.platform = detector.isSpoofedIpad ? {
      type: 'tablet',
      vendor: 'Apple',
      model: 'iPad'
    } : detector.base.getPlatform();
    this.type = (this.platform.type || '').toLowerCase();
    this.model = (this.platform.model || '').toLowerCase();
    this.phone = this.type === 'mobile';
    this.tablet = this.type === 'tablet';
    this.mobile = this.phone || this.tablet;
    this.desktop = !this.mobile;
    this.iphone = this.model === 'iphone';
    this.ipad = this.model === 'ipad';
    this.ipod = this.model === 'ipod';
    this.pixelRatio = detector.window.devicePixelRatio;
    this.node = this.type === 'node';
    this.browser = !this.node;
  }

  get orientation() {
    if (typeof detector.window.screen === 'object') {
      const orientationType = detector.window.screen.msOrientation || (detector.window.screen.orientation || detector.window.screen.mozOrientation || {}).type;

      if (typeof orientationType === 'string') {
        return orientationType.split('-', 1)[0];
      }
    }

    if (typeof detector.window.matchMedia === 'function') {
      return detector.window.matchMedia('(orientation: portrait)').matches === true ? 'PORTRAIT' : 'LANDSCAPE';
    }

    const w = Math.max(document.documentElement.clientWidth, detector.window.innerWidth || 0);
    const h = Math.max(document.documentElement.clientHeight, detector.window.innerHeight || 0);
    return w < h ? 'PORTRAIT' : 'LANDSCAPE';
  }

  get portrait() {
    return this.orientation === 'PORTRAIT';
  }

  get landscape() {
    return this.orientation === 'LANDSCAPE';
  }

}

let device = new Device();
const detect = {
  os,
  browser,
  device,
  detector
};

exports.detector = detector;
exports.os = os;
exports.browser = browser;
exports.device = device;
exports.default = detect;

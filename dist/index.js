'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bowser = require('bowser');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var bowser__default = /*#__PURE__*/_interopDefaultLegacy(bowser);

var detector = typeof window !== 'undefined'
    ? {
        ua: window.navigator.userAgent.toLowerCase(),
        base: bowser__default['default'].getParser(window.navigator.userAgent),
        window: window,
        isSpoofedIpad: (/iPad/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
            !window.MSStream,
    }
    : {
        ua: '',
        base: {
            getOSName: function () { return 'node'; },
            getOSVersion: function () { return '1'; },
            getBrowserName: function () { return 'node'; },
            getBrowserVersion: function () { return '1'; },
            getPlatform: function () { return ({ type: 'node', vendor: 'node' }); },
        },
        window: {
            devicePixelRatio: 1,
            innerWidth: 1440,
            innerHeight: 900,
            navigator: {
                vendor: 'node',
                mediaDevices: null,
            },
            screen: null,
            matchMedia: null,
        },
        isSpoofedIpad: false,
    };
var OS = (function () {
    function OS() {
        this.supportedBots = [
            'facebookexternalhit',
            'skypeuripreview',
            'baiduspider',
            'linkedinbot',
            'ia_archiver',
            'duckduckbot',
            'twitterbot',
            'googlebot',
            'yandexbot',
            'bingbot',
            'facebot',
            'tumblr',
            'slurp',
            'google (+https://developers.google.com/+/web/snippet/)',
            'https://developers.google.com/+/web/snippet/',
        ];
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
    Object.defineProperty(OS.prototype, "bot", {
        get: function () {
            return Boolean(this.supportedBots.filter(function (bot) { return detector.ua.indexOf(bot.toLowerCase()) !== -1; }).length);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OS.prototype, "version", {
        get: function () {
            return detector.base.getOSVersion() || '0';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OS.prototype, "majorVersion", {
        get: function () {
            return parseInt(this.version.replace(/[^0-9.]/g, ''), 10);
        },
        enumerable: false,
        configurable: true
    });
    return OS;
}());
var Browser = (function () {
    function Browser() {
        this.name = detector.ua.includes('edg/')
            ? 'microsoft-edge'
            : detector.base.getBrowserName().toLowerCase().replace(' ', '-');
        this.vendor = detector.window.navigator.vendor ? detector.window.navigator.vendor.toLowerCase() : '';
        this.chrome = this.name === 'chrome';
        this.firefox = this.name === 'firefox';
        this.safari = this.name === 'safari';
        this.edge = this.name === 'microsoft-edge';
        this.ie = this.name === 'internet-explorer';
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
        this.inApp =
            this.instagram ||
                this.pinterest ||
                this.facebook ||
                this.linkedIn ||
                this.snapchat ||
                this.whatsApp ||
                this.twitter ||
                this.weChat ||
                this.tikTok;
    }
    Object.defineProperty(Browser.prototype, "version", {
        get: function () {
            return detector.base.getBrowserVersion() || '0';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Browser.prototype, "majorVersion", {
        get: function () {
            return parseInt(this.version.replace(/[^0-9.]/g, ''), 10);
        },
        enumerable: false,
        configurable: true
    });
    return Browser;
}());
var Device = (function () {
    function Device() {
        this.platform = detector.isSpoofedIpad
            ? { type: 'tablet', vendor: 'Apple', model: 'iPad' }
            : detector.base.getPlatform();
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
        this.touch = 'ontouchstart' in detector.window || detector.window.navigator.maxTouchPoints > 0;
    }
    Object.defineProperty(Device.prototype, "orientation", {
        get: function () {
            if (window.orientation !== undefined) {
                return Math.abs(+window.orientation) === 90 ? 'landscape' : 'portrait';
            }
            if (typeof detector.window.matchMedia === 'function') {
                return detector.window.matchMedia('(orientation: portrait)').matches === true ? 'portrait' : 'landscape';
            }
            if (typeof detector.window.screen === 'object') {
                var orientationType = (detector.window.screen.orientation || {}).type;
                if (typeof orientationType === 'string') {
                    return orientationType.split('-', 1)[0];
                }
            }
            var w = Math.max(document.documentElement.clientWidth, detector.window.innerWidth || 0);
            var h = Math.max(document.documentElement.clientHeight, detector.window.innerHeight || 0);
            return w < h ? 'portrait' : 'landscape';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "portrait", {
        get: function () {
            return this.orientation === 'portrait';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "landscape", {
        get: function () {
            return this.orientation === 'landscape';
        },
        enumerable: false,
        configurable: true
    });
    return Device;
}());
var os = new OS();
var browser = new Browser();
var device = new Device();
var Detect = (function () {
    function Detect() {
        this.os = os;
        this.browser = browser;
        this.device = device;
        this.detector = detector;
    }
    return Detect;
}());
var index = new Detect();

exports.browser = browser;
exports['default'] = index;
exports.detector = detector;
exports.device = device;
exports.os = os;
//# sourceMappingURL=index.js.map

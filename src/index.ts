import bowser from 'bowser';

export const detector =
  typeof window !== 'undefined'
    ? {
        ua: window.navigator.userAgent.toLowerCase(),
        base: bowser.getParser(window.navigator.userAgent),
        window: window,
        // https://stackoverflow.com/questions/58019463/how-to-detect-device-name-in-safari-on-ios-13-while-it-doesnt-show-the-correct
        isSpoofedIpad:
          (/iPad/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
          !window.MSStream,
      }
    : {
        ua: '',
        base: {
          getOSName: () => 'node',
          getOSVersion: () => '1',
          getBrowserName: () => 'node',
          getBrowserVersion: () => '1',
          getPlatform: () => ({ type: 'node', vendor: 'node' }),
        },
        window: {
          devicePixelRatio: 1,
          innerWidth: 1440,
          innerHeight: 900,
          navigator: {
            vendor: 'node',
            mediaDevices: null as MediaDevices,
          },
          screen: null as Screen,
          matchMedia: null as MediaQueryList,
        },
        isSpoofedIpad: false,
      };

class OS {
  name: string;
  ios: boolean;
  android: boolean;
  windowsPhone: boolean;
  blackBerry: boolean;
  mac: boolean;
  windows: boolean;
  linux: boolean;
  chromeos: boolean;
  node: boolean;

  supportedBots = [
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
  constructor() {
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
    return Boolean(this.supportedBots.filter((bot) => detector.ua.indexOf(bot.toLowerCase()) !== -1).length);
  }
  get version() {
    return detector.base.getOSVersion() || '0';
  }
  get majorVersion() {
    return parseInt(this.version.replace(/[^0-9.]/g, ''), 10);
  }
}

class Browser {
  name: string;
  vendor: string;
  chrome: boolean;
  firefox: boolean;
  safari: boolean;
  edge: boolean;
  ie: boolean;
  opera: boolean;
  node: boolean;
  facebook: boolean;
  linkedIn: boolean;
  snapchat: boolean;
  whatsApp: boolean;
  twitter: boolean;
  weChat: boolean;
  tikTok: boolean;
  instagram: boolean;
  pinterest: boolean;
  inApp: boolean;

  constructor() {
    this.name = detector.ua.includes('edg/') // https://github.com/lancedikson/bowser/issues/416
      ? 'microsoft edge'
      : detector.base.getBrowserName().toLowerCase();
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
  get version() {
    return detector.base.getBrowserVersion() || '0';
  }
  get majorVersion() {
    return parseInt(this.version.replace(/[^0-9.]/g, ''), 10);
  }
}

class Device {
  platform: bowser.Parser.PlatformDetails;
  type: string;
  model: string;
  phone: boolean;
  tablet: boolean;
  mobile: boolean;
  desktop: boolean;
  iphone: boolean;
  ipad: boolean;
  ipod: boolean;
  pixelRatio: number;
  node: boolean;
  browser: boolean;

  constructor() {
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
  }
  get orientation() {
    if (window.orientation !== undefined) {
      return Math.abs(+window.orientation) === 90 ? 'landscape' : 'portrait';
    }
    if (typeof detector.window.matchMedia === 'function') {
      return detector.window.matchMedia('(orientation: portrait)').matches === true ? 'portrait' : 'landscape';
    }
    if (typeof detector.window.screen === 'object') {
      const orientationType = (detector.window.screen.orientation || {}).type;
      if (typeof orientationType === 'string') {
        return orientationType.split('-', 1)[0];
      }
    }
    const w = Math.max(document.documentElement.clientWidth, detector.window.innerWidth || 0);
    const h = Math.max(document.documentElement.clientHeight, detector.window.innerHeight || 0);
    return w < h ? 'portrait' : 'landscape';
  }
  get portrait() {
    return this.orientation === 'portrait';
  }
  get landscape() {
    return this.orientation === 'landscape';
  }
}

export const os = new OS();
export const browser = new Browser();
export const device = new Device();

class Detect {
  os = new OS();
  browser = new Browser();
  device = new Device();
  detector = detector;
}

export default new Detect();

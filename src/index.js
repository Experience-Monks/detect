import bowser from 'bowser'

export const detector =
  typeof window !== 'undefined'
    ? {
        ua: window.navigator.userAgent.toLowerCase(),
        base: bowser.getParser(window.navigator.userAgent),
        window: window,
        // https://stackoverflow.com/questions/58019463/how-to-detect-device-name-in-safari-on-ios-13-while-it-doesnt-show-the-correct
        isSpoofedIpad:
          (/iPad/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
          !window.MSStream
      }
    : {
        ua: '',
        base: {
          getOSName: () => 'node',
          getOSVersion: () => 1,
          getBrowserName: () => 'node',
          getBrowserVersion: () => 1,
          getPlatform: () => ({ type: 'node', vendor: 'node' })
        },
        window: {
          innerWidth: 1440,
          innerHeight: 900,
          navigator: {
            vendor: 'node'
          }
        },
        isSpoofedIpad: false
      }

class OS {
  supportedBots = [
    'facebookexternalhit',
    'linkedinbot',
    'google (+https://developers.google.com/+/web/snippet/)',
    'facebot',
    'https://developers.google.com/+/web/snippet/',
    'twitterbot',
    'tumblr',
    'googlebot'
  ]
  constructor() {
    this.name = detector.isSpoofedIpad ? 'ios' : detector.base.getOSName().toLowerCase()
    this.ios = this.name === 'ios'
    this.android = this.name === 'android'
    this.windowsPhone = this.name === 'windows phone'
    this.blackBerry = this.name === 'blackberry'
    this.mac = this.name === 'macos'
    this.windows = this.name === 'windows'
    this.linux = this.name === 'linux'
    this.chromeos = this.name === 'chrome os'
    this.node = this.name === 'node'
  }
  get bot() {
    return Boolean(this.supportedBots.filter((bot) => detector.ua.indexOf(bot.toLowerCase()) !== -1).length)
  }
  get version() {
    return detector.base.getOSVersion() || 0
  }
  get majorVersion() {
    return parseInt(this.version, 10)
  }
}
export let os = new OS()

class Browser {
  constructor() {
    this.name = detector.base.getBrowserName().toLowerCase()
    this.vendor = detector.window.navigator.vendor ? detector.window.navigator.vendor.toLowerCase() : ''
    this.chrome = this.name === 'chrome'
    this.firefox = this.name === 'firefox'
    this.safari = this.name === 'safari'
    this.edge = this.name === 'microsoft edge'
    this.ie = this.name === 'internet explorer'
    this.opera = this.name === 'opera'
    this.node = this.name === 'node'
    this.facebook = /fban|fbav/i.test(detector.ua)
    this.twitter = /twitter/i.test(detector.ua)
    this.instagram = /instagram/i.test(detector.ua)
    this.pinterest = /pinterest/i.test(detector.ua)
    this.weChat = /wechat|micromessenger/i.test(detector.ua)
    this.tikTok = /musical_ly/i.test(detector.ua)
    this.inApp =
      this.facebook ||
      this.twitter ||
      this.instagram ||
      this.pinterest ||
      this.weChat ||
      this.tikTok ||
      (os.ios && os.majorVersion >= 11 && this.safari && typeof detector.window.navigator.mediaDevices === 'undefined')
  }
  get version() {
    return detector.base.getOSVersion() || 0
  }
}
export let browser = new Browser()

class Device {
  constructor() {
    this.platform = detector.isSpoofedIpad
      ? { type: 'tablet', vendor: 'Apple', model: 'iPad' }
      : detector.base.getPlatform()
    this.type = (this.platform.type || '').toLowerCase()
    this.model = (this.platform.model || '').toLowerCase()
    this.phone = this.type === 'mobile'
    this.tablet = this.type === 'tablet'
    this.mobile = this.phone || this.tablet
    this.desktop = !this.mobile
    this.iphone = this.model === 'iphone'
    this.ipad = this.model === 'ipad'
    this.ipod = this.model === 'ipod'
    this.pixelRatio = detector.window.devicePixelRatio
    this.node = this.type === 'node'
    this.browser = !this.node
  }
  get orientation() {
    if (typeof detector.window.screen === 'object') {
      const orientationType =
        detector.window.screen.msOrientation ||
        (detector.window.screen.orientation || detector.window.screen.mozOrientation || {}).type
      if (typeof orientationType === 'string') {
        return orientationType.split('-', 1)[0]
      }
    }
    if (typeof detector.window.matchMedia === 'function') {
      return detector.window.matchMedia('(orientation: portrait)').matches === true ? 'PORTRAIT' : 'LANDSCAPE'
    }
    const w = Math.max(document.documentElement.clientWidth, detector.window.innerWidth || 0)
    const h = Math.max(document.documentElement.clientHeight, detector.window.innerHeight || 0)
    return w < h ? 'PORTRAIT' : 'LANDSCAPE'
  }
  get portrait() {
    return this.orientation === 'PORTRAIT'
  }
  get landscape() {
    return this.orientation === 'LANDSCAPE'
  }
}
export let device = new Device()

const detect = { os, browser, device, detector }

export function refresh() {
  browser = new Browser()
  device = new Device()
  os = new OS()
  detect.browser = browser
  detect.device = device
  detect.os = os
}

export default detect

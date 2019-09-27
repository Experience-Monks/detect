import os from './os';
import browser from './browser';
import detector from './detector';

/**
 * Contains methods and utils to test browsers embedded in mobile applications
 *
 * @class InAppBrowser
 */
class InAppBrowser {
  constructor() {
    this.isFacebook = /fban|fbav/.test(detector.ua);
    this.isTwitter = /twitter/.test(detector.ua);
    this.isInstagram = /instagram/.test(detector.ua);
    this.isPinterest = /pinterest/.test(detector.ua);
  }

  /**
   * Is the browser embedded in an application
   *
   * @returns {Boolean} True | False
   * @memberof InAppBrowser
   */
  isInAppBrowser() {
    let isInAppBrowser = this.isFacebook || this.isTwitter || this.isInstagram || this.isPinterest;
    if (!isInAppBrowser) {
      isInAppBrowser =
        os.isiOS &&
        os.getMajorVersion() >= 11 &&
        browser.isSafari &&
        typeof detector.window.navigator.mediaDevices === 'undefined';
    }
    return isInAppBrowser;
  }

  /**
   * Returns in-app browser's version
   *
   * @returns {Number} 45
   * @memberof InAppBrowser
   */
  getVersion() {
    if (os.isiOS) return os.getMajorVersion();
    if (os.isAndroid) return browser.getMajorVersion();
    return 9999;
  }
}

export default new InAppBrowser();

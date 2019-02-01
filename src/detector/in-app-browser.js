import os from './os';
import browser from './browser';
import detector from './detector';

function InAppBrowser() {
  this.isFacebook = /fban|fbav/.test(detector.ua);
  this.isTwitter = /twitter/.test(detector.ua);
  this.isInstagram = /instagram/.test(detector.ua);
  this.isPinterest = /pinterest/.test(detector.ua);

  this.isInAppBrowser = function () {
    let isInAppBrowser = this.isFacebook || this.isTwitter || this.isInstagram || this.isPinterest;

    if (!isInAppBrowser) {
      isInAppBrowser =
        os.isiOS &&
        os.getOSMajorVersion() >= 11 &&
        browser.isSafari &&
        typeof detector.window.navigator.mediaDevices === 'undefined';
    }

    return isInAppBrowser;
  }

  this.getInAppBrowserVersion = function () {
    if (os.isiOS) return os.getOSMajorVersion();
    if (os.isAndroid) return browser.getBrowserMajorVersion();
    return 9999;
  }
}

export default new InAppBrowser();

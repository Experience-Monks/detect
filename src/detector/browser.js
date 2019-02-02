import detector from './detector';

/**
 * Contains methods and utils to test everything related to the user's browser
 *
 * @class Browser
 */
class Browser {
  constructor() {
    this._parsedBrowserName = detector.base.getBrowserName();

    this.isChrome = this._parsedBrowserName === 'Chrome';
    this.isFirefox = this._parsedBrowserName === 'Firefox';
    this.isSafari = this._parsedBrowserName === 'Safari';
    this.isEdge = this._parsedBrowserName === 'Microsoft Edge';
    this.isIE = this._parsedBrowserName === 'Internet Explorer';
    this.isOpera = this._parsedBrowserName === 'Opera';
  }

  /**
   * Returns the browser's name
   *
   * @returns {String} 'chrome', 'ie', 'firefox', 'safari', 'edge', 'opera', etc
   * @memberof Browser
   */
  getName() {
    if (this.isEdge) return 'edge';
    if (this.isIE) return 'ie';
    return this._parsedBrowserName.toLowerCase();
  }

  /**
   * Returns the browser's version
   *
   * @returns {Number} 11.0.1
   * @memberof Browser
   */
  getVersion() {
    return detector.base.getBrowserVersion();
  }

  /**
   * Returns the browser's major version
   *
   * @returns {Number} 43
   * @memberof Browser
   */
  getMajorVersion() {
    return parseInt(this.getBrowserVersion(), 10);
  }

  /**
   * Returns the browser's vendor
   *
   * @returns {String} Google Inc
   * @memberof Browser
   */
  getVendor() {
    return detector.window.navigator.vendor ? detector.window.navigator.vendor.toLowerCase() : '';
  }
}

export default new Browser();

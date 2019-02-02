import detector from './detector';

/**
 * Contains methods and utils to test user's Operative System
 *
 * @class OS
 */
class OS {
  constructor() {
    this._parsedOSName = detector.base.getOSName();

    this.isiOS = this._parsedOSName === 'iOS';
    this.isAndroid = this._parsedOSName === 'Android';
    this.isWindowsPhone = this._parsedOSName === 'Windows Phone';
    this.isBlackberry = this._parsedOSName === 'BlackBerry';
    this.isMac = this._parsedOSName === 'macOS';
    this.isWindows = this._parsedOSName === 'Windows';
    this.isLinux = this._parsedOSName === 'Linux';
    this.isChromeOS = this._parsedOSName === 'Chrome OS';
  }

  /**
   * Returns the Operative System name
   *
   * @returns {String} 'ios', 'android', 'windowsphone', 'blackberry', 'macos', 'chromeos', 'windows', etc
   * @memberof OS
   */
  getName() {
    return this._parsedOSName
      .split(' ')
      .join('')
      .toLowerCase();
  }

  /**
   * Returns the Operative System version
   *
   * @returns {Number} 13.2.1
   * @memberof OS
   */
  getVersion() {
    return detector.base.getOSVersion();
  }

  /**
   * Returns the Operative System major version
   *
   * @returns {Number} 13
   * @memberof OS
   */
  getMajorVersion() {
    return parseInt(detector.base.getOSVersion(), 10);
  }
}

export default new OS();

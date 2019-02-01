import detector from './detector';

function Browser() {
  this.isChrome = detector.base.chrome === true;
  this.isFirefox = detector.base.firefox === true;
  this.isSafari = detector.base.safari === true;
  this.isEdge = detector.base.msedge === true;
  this.isIE = detector.base.msie === true;
  this.isOpera = detector.base.opera === true;

  this.getBrowserName = function () {
    if (this.isChrome) return 'chrome';
    if (this.isFirefox) return 'firefox';
    if (this.isSafari) return 'safari';
    if (this.isEdge) return 'edge';
    if (this.isIE) return 'ie';
    if (this.isOpera) return 'opera';
    return '';
  }

  this.getBrowserVersion = function () {
    return detector.base.version;
  }

  this.getBrowserMajorVersion = function () {
    return parseInt(detector.base.version, 10);
  }

  this.getVendor = function () {
    return detector.window.navigator.vendor ? detector.window.navigator.vendor.toLowerCase() : '';
  }
}

export default new Browser();



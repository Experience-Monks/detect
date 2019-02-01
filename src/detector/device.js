import detector from './detector';

const PORTRAIT = 'portrait';
const LANDSCAPE = 'landscape';

function Device() {
  this.isPhone = detector.base.mobile === true;
  this.isTablet = detector.base.tablet === true;
  this.isMobile = this.isPhone || this.isTablet;
  this.isDesktop = !this.isMobile;

  this.isiPhone = detector.base.isiPhone === true;
  this.isiPad = detector.base.isiPad === true;
  this.isiPod = detector.base.isiPod === true;

  this.getDeviceType = function () {
    if (this.isPhone) return 'phone';
    if (this.isTablet) return 'tablet';
    if (this.isDesktop) return 'desktop';
    return '';
  }

  this.getDevicePixelRatio = function () {
    return detector.window.devicePixelRatio;
  }

  this.getOrientation = function () {
    if (typeof window.screen === 'object') {
      const orientationType =
        window.screen.msOrientation || (window.screen.orientation || window.screen.mozOrientation || {}).type;

      if (typeof orientationType === 'string') {
        return orientationType.split('-', 1)[0];
      }
    }

    if (typeof window.matchMedia === 'function') {
      return window.matchMedia('(orientation: portrait)').matches === true ? PORTRAIT : LANDSCAPE;
    }

    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return w < h ? PORTRAIT : LANDSCAPE;
  }

  this.isPortrait = function () { return this.getOrientation() === PORTRAIT; }

  this.isLandscape = function () { return this.getOrientation() === LANDSCAPE; }
}

export default new Device();

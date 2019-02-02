import detector from './detector';

const PORTRAIT = 'portrait';
const LANDSCAPE = 'landscape';

/**
 * Contains methods and utils to test everything related to the user's device
 *
 * @class Device
 */
class Device {
  constructor() {
    const platform = detector.base.getPlatform();

    if (!platform['type']) platform['type'] = '';
    if (!platform['model']) platform['model'] = '';

    this.isPhone = platform.type == 'mobile';
    this.isTablet = platform.type == 'tablet';
    this.isMobile = this.isPhone || this.isTablet;
    this.isDesktop = !this.isMobile;
    this.isiPhone = platform.model === 'iPhone';
    this.isiPad = platform.model === 'iPad';
    this.isiPod = platform.model === 'iPod';
  }

  /**
   * Returns the device's type
   *
   * @returns {String} 'phone', 'desktop' or 'tablet'
   * @memberof Device
   */
  getType() {
    if (this.isPhone) return 'phone';
    if (this.isTablet) return 'tablet';
    if (this.isDesktop) return 'desktop';
    return '';
  }

  /**
   * Returns device's pixel ratio
   *
   * @returns {Number} 2
   * @memberof Device
   */
  getPixelRatio() {
    return detector.window.devicePixelRatio;
  }

  /**
   * Returns device's current orientation
   *
   * @returns {String} 'portrait' or 'landscape'
   * @memberof Device
   */
  getOrientation() {
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

  /**
   * Is portrait the current device's orientation
   *
   * @returns {Boolean} True | False
   * @memberof Device
   */
  isPortrait() {
    return this.getOrientation() === PORTRAIT;
  }

  /**
   * Is landscape the current device's orientation
   *
   * @returns {Boolean} True | False
   * @memberof Device
   */
  isLandscape() {
    return this.getOrientation() === LANDSCAPE;
  }
}

export default new Device();

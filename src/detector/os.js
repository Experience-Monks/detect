import detector from "./detector";

function OS() {
  this.isiOS = detector.base.ios === true;
  this.isAndroid = detector.base.android === true;
  this.isFirefoxOS = detector.base.firefoxos === true;
  this.isWindowsPhone = detector.base.windowsphone === true;
  this.isBlackberry = detector.base.blackberry === true;
  this.isMac = detector.base.mac === true;
  this.isWindows = detector.base.windows === true;
  this.isLinux = detector.base.linux === true;
  this.isChromeOS = detector.base.chromeos === true;

  this.getOSName = function () {
    if (this.isiOS) return 'ios';
    if (this.isAndroid) return 'android';
    if (this.isFirefoxOS) return 'firefoxos';
    if (this.isWindowsPhone) return 'windowsphone';
    if (this.isBlackberry) return 'blackberry';
    if (this.isMac) return 'mac';
    if (this.isWindows) return 'windows';
    if (this.isLinux) return 'linux';
    if (this.isChromeOS) return 'chromeos';
    return '';
  }

  this.getOSVersion = function () {
    return detector.base.osversion;
  }

  this.getOSMajorVersion = function () {
    return parseInt(detector.base.osversion, 10);
  }
}

export default new OS();

'use strict';

import { bots, device, os, browser, inAppBrowser } from '../src';

describe('Make sure all the old API exports is covered', () => {

  test('Bots output', () => {

    expect(bots.isBot()).toBeDefined();
  });

  test('Device output', () => {

    expect(device.isPhone).toBeDefined();
    expect(device.isTablet).toBeDefined();
    expect(device.isMobile).toBeDefined();
    expect(device.isDesktop).toBeDefined();
    expect(device.isiPhone).toBeDefined();
    expect(device.isiPad).toBeDefined();
    expect(device.isiPod).toBeDefined();
    expect(device.getOrientation).toBeDefined();
    expect(device.isPortrait).toBeDefined();
    expect(device.isLandscape).toBeDefined();
  });

  test('OS output', () => {

    expect(os.isiOS).toBeDefined();
    expect(os.isAndroid).toBeDefined();
    expect(os.isWindowsPhone).toBeDefined();
    expect(os.isBlackberry).toBeDefined();
    expect(os.isMac).toBeDefined();
    expect(os.isWindows).toBeDefined();
    expect(os.isLinux).toBeDefined();
    expect(os.isChromeOS).toBeDefined();
    expect(os.getName).toBeDefined();
    expect(os.getVersion).toBeDefined();
    expect(os.getMajorVersion).toBeDefined();
  });

  test('Browser output', () => {

    expect(browser.isChrome).toBeDefined();
    expect(browser.isFirefox).toBeDefined();
    expect(browser.isSafari).toBeDefined();
    expect(browser.isEdge).toBeDefined();
    expect(browser.isIE).toBeDefined();
    expect(browser.isOpera).toBeDefined();
    expect(browser.getName).toBeDefined();
    expect(browser.getVersion).toBeDefined();
    expect(browser.getMajorVersion).toBeDefined();
  });

  test('InAppBrowser output', () => {

    expect(inAppBrowser.isFacebook).toBeDefined();
    expect(inAppBrowser.isTwitter).toBeDefined();
    expect(inAppBrowser.isInstagram).toBeDefined();
    expect(inAppBrowser.isPinterest).toBeDefined();
    expect(inAppBrowser.isInAppBrowser).toBeDefined();
    expect(inAppBrowser.getVersion).toBeDefined();
  });
});

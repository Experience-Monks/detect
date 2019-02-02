import detector from './detector/detector';
import bots from './detector/bots';
import browser from './detector/browser';
import os from './detector/os';
import device from './detector/device';
import inAppBrowser from './detector/in-app-browser';

export default {
  bots,
  browser,
  os,
  device,
  inAppBrowser,
  detector
};

export { bots, browser, os, device, inAppBrowser, detector };

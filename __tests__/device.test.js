'use strict';

import { detector, device, refresh } from '../src';

describe('Device detector tests', () => {

  test('Test devicePixelRatio returns the same value than the browser has', () => {

    const devicePixelRatio = 2;

    detector.window.devicePixelRatio = devicePixelRatio;

    refresh();

    expect(device.pixelRatio).toBe(devicePixelRatio);
  });

  // TODO: Test getOrientation
});

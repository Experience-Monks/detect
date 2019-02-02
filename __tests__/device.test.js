'use strict';

import { detector, device } from '../src';

describe('Device detector tests', () => {

  test('Test devicePixelRatio returns the same value than the browser has', () => {

    const devicePixelRatio = 2;

    detector.window = {
      devicePixelRatio
    }

    expect(device.getPixelRatio()).toBe(devicePixelRatio);
  });

  // TODO: Test getOrientation
});

'use strict';

import { inAppBrowser } from '../src';

describe('In App Browser detector tests', () => {

  test('Test facebook in app browser', () => {
    expect(inAppBrowser.isFacebook).toBeFalsy();
  });

  // TODO: Test getOrientation
});

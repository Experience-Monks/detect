'use strict';

import { browser } from '../src';

describe('In App Browser detector tests', () => {

  test('Test facebook in app browser', () => {
    expect(browser.facebook).toBeFalsy();
  });

  // TODO: Test getOrientation
});

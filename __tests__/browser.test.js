'use strict';

import { detector, browser, refresh } from '../src';

describe('Browser detector tests', () => {

  test('Test vendor parsing to lowercase', () => {

    const vendorName = 'THIS IS A TEST';

    detector.window = {
      navigator: {
        vendor: vendorName
      }
    }

    refresh();

    expect(browser.vendor).toBe(vendorName.toLocaleLowerCase());
  });
});

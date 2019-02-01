'use strict';

import { detector, browser } from '../src';

describe('Browser detector tests', () => {

  test('Test vendor parsing to lowercase', () => {

    const vendorName = 'THIS IS A TEST';

    detector.window = {
      navigator: {
        vendor: vendorName
      }
    }

    expect(browser.getVendor()).toBe(vendorName.toLocaleLowerCase());
  });
});

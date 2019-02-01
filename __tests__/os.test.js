'use strict';

import { detector, os } from '../src';

describe('OS detector tests', () => {

  test('Test variable isiOS exists', () => {

    expect(os['isiOS'] != undefined).toBeTruthy();
  });
});

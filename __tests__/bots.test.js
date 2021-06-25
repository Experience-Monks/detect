'use strict';

import { detector, os, refresh } from '../src';

describe('Bots detector tests', () => {

  test('Test bots against a default bot', () => {

    detector.ua = 'facebookexternalhit';

    refresh();

    expect(os.bot).toBeTruthy();
  });

  test('Test bots against a not valid bot', () => {

    detector.ua = 'example';

    refresh();

    expect(os.bot).toBeFalsy();
  });

  test('Test bots sending a new list of bots', () => {

    detector.ua = 'donso';

    refresh();

    os.supportedBots = [
      'table',
      'donso',
      'truck'
    ]

    expect(os.bot).toBeTruthy();
  });

  test('Test bots sending a new list of bots and user agent is invalid', () => {

    detector.ua = 'another';

    refresh();

    os.supportedBots = [
      'table',
      'donso',
      'truck'
    ]

    expect(os.bot).toBeFalsy();
  });
});

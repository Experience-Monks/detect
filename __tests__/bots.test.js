'use strict';

import { detector, bots } from '../src';

describe('Bots detector tests', () => {

  test('Test bots against a default bot', () => {

    detector.ua = 'facebookexternalhit';

    expect(bots.isBot()).toBeTruthy();
  });

  test('Test bots against a not valid bot', () => {

    detector.ua = 'example';

    expect(bots.isBot()).toBeFalsy();
  });

  test('Test bots sending a new list of bots', () => {

    detector.ua = 'donso';

    const supportedBots = [
      'table',
      'donso',
      'truck'
    ]

    expect(bots.isBot(supportedBots)).toBeTruthy();
  });

  test('Test bots sending a new list of bots and user agent is invalid', () => {

    detector.ua = 'another';

    const supportedBots = [
      'table',
      'donso',
      'truck'
    ]

    expect(bots.isBot(supportedBots)).toBeFalsy();
  });
});

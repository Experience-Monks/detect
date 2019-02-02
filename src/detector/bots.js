import detector from './detector';

const SUPPORTED_BOTS = [
  'facebookexternalhit',
  'linkedinbot',
  'google (+https://developers.google.com/+/web/snippet/)',
  'facebot',
  'https://developers.google.com/+/web/snippet/',
  'twitterbot',
  'tumblr',
  'googlebot'
];

/**
 * Is the browser a bot
 *
 * @param {Array<string>} supportedBots Custom array of bots, ['googlebot', 'linkedinbot']
 * @returns {Boolean} True | False
 */
function isBot(supportedBots) {
  if (!supportedBots) supportedBots = SUPPORTED_BOTS;
  return Boolean(supportedBots.filter(bot => detector.ua.indexOf(bot.toLowerCase()) !== -1).length);
}

export default {
  isBot
};

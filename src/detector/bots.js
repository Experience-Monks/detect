import detector from './detector';

const BOTS = [
  'facebookexternalhit',
  'linkedinbot',
  'google (+https://developers.google.com/+/web/snippet/)',
  'facebot',
  'https://developers.google.com/+/web/snippet/',
  'twitterbot',
  'tumblr',
  'googlebot'
];

function isBot(supportedBots) {
  if (!supportedBots) supportedBots = BOTS;
  return Boolean(supportedBots.filter(bot => detector.ua.indexOf(bot.toLowerCase()) !== -1).length);
}

export default {
  isBot
}

import bowser from 'bowser';

let _window = window;
let _ua = window.navigator.userAgent.toLowerCase();
const _browser = bowser.getParser(window.navigator.userAgent);

export default {
  base: _browser,
  window: _window,
  ua: _ua
};

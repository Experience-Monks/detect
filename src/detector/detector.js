import _bowser from 'bowser';

let _window = window;
let _ua = window.navigator.userAgent.toLowerCase();

export default {
  base: _bowser,
  window: _window,
  ua: _ua
};

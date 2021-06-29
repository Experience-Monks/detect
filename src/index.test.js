'use strict';

const UA = {
  Chrome91Win10:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36',
  Chrome91macOS:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36',
  Chrome91Linux:
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36',
  Safari14macOS:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.1',
  Firefox89Win10: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
  Firefox89Linux: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0',
  Edge91Win10:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4501.0 Safari/537.36 Edg/91.0.866.0',
  Opera77Win10:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 OPR/77.0.4054.90.',
  InternetExplorer11: 'Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko',
  SamsungGalaxyS9:
    'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36',
  SonyXperiaXZ:
    'Mozilla/5.0 (Linux; Android 7.1.1; G8231 Build/41.2.A.0.219; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/59.0.3071.125 Mobile Safari/537.36',
  HTCOneM9:
    'Mozilla/5.0 (Linux; Android 6.0; HTC One M9 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.3',
  SamsungGalaxyTabS3:
    'Mozilla/5.0 (Linux; Android 7.0; SM-T827R4 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.116 Safari/537.36',
  iPhoneXRSafari:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1',
  iPhoneXSChrome:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.105 Mobile/15E148 Safari/605.1',
  iPhoneXSMaxFirefox:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/13.2b11866 Mobile/16A366 Safari/605.1.15',
  Chromecast:
    'Mozilla/5.0 (CrKey armv7l 1.5.16041) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.0 Safari/537.36',
  GoogleBot: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  BingBot: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
  YahooBot: 'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)',
  DuckDuckBot: 'DuckDuckBot/1.0; (+http://duckduckgo.com/duckduckbot.html)',
  BaiduBot: 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)',
  YandexBot: 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)',
  FaceBot: 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
  AlexaBot: 'ia_archiver (+http://www.alexa.com/site/help/webmasters; crawler@alexa.com)',
  LinkedinBot: 'LinkedInBot/1.0 (compatible; Mozilla/5.0; Jakarta Commons-HttpClient/3.1 +http://www.linkedin.com)',
  SkypeBot: 'Mozilla/5.0 (Windows NT 6.1; WOW64) SkypeUriPreview Preview/0.5',
  TwitterBot: 'Mozilla/5.0 (compatible; Twitterbot/1.0)',
  TumblrBot: 'Tumblr/14.0.835.186',
  FacebookApp:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,8;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/]',
  InstagramApp:
    'Mozilla/5.0 (Linux; Android 9; SM-A102U Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.136 Mobile Safari/537.36 Instagram 155.0.0.37.107 Android (28/9; 320dpi; 720x1468; samsung; SM-A102U; a10e; exynos7885; en_US; 239490550)',
  WhatsappApp: 'WhatsApp/2.2100.4 N',
  TikTokApp:
    'Mozilla/5.0 (Linux; Android 10; LIO-N29 Build/HUAWEILIO-N29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Mobile Safari/537.36 trill_2021605040 JsSdk/1.0 NetType/WIFI Channel/googleplay AppName/musical_ly app_version/16.5.4 ByteLocale/en ByteFullLocale/en Region/AE AppSkin/white',
  WechatApp:
    'Mozilla/5.0 (Linux; Android 10; Redmi Note 9 Pro Build/QKQ1.191215.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.62 XWEB/2691 MMWEBSDK/201101 Mobile Safari/537.36 MMWEBID/6217 MicroMessenger/7.0.21.1783(0x27001543) Process/tools WeChat/arm64 Weixin GPVersion/1 NetType/WIFI Language/zh_HK ABI/arm64',
  PinterestApp:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 12_5_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/604.1 [Pinterest/iOS]',
  SnapchatApp:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Snapchat/11.33.0.35 (like Safari/604.1)',
  LinkedInApp:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [LinkedInApp]',
  TwitterAppAndroid:
    'Mozilla/5.0 (Linux; Android 11; SM-G998U Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.101 Mobile Safari/537.36 TwitterAndroid',
  TwitterAppiPhone:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/18D52 Twitter for iPhone',
};

let uaGetter;
beforeEach(() => {
  jest.resetModules();
  uaGetter = jest.spyOn(window.navigator, 'userAgent', 'get');
  uaGetter.mockReturnValue(UA.Chrome91Win10);
});

describe('OS detection', () => {
  test('should expose results', () => {
    const { os } = require('../src');
    expect(os.name).toBeDefined();
    expect(os.ios).toBeDefined();
    expect(os.android).toBeDefined();
    expect(os.windowsPhone).toBeDefined();
    expect(os.blackBerry).toBeDefined();
    expect(os.mac).toBeDefined();
    expect(os.windows).toBeDefined();
    expect(os.linux).toBeDefined();
    expect(os.chromeos).toBeDefined();
    expect(os.node).toBeDefined();
    expect(os.bot).toBeDefined();
    expect(os.version).toBeDefined();
    expect(os.majorVersion).toBeDefined();
  });
  test('should detect OS name', () => {
    uaGetter.mockReturnValue(UA.Chrome91Win10);
    expect(require('../src').os.name).toBe('windows');
    expect(require('../src').os.android).toBe(false);
    expect(require('../src').os.windows).toBe(true);
    expect(require('../src').os.linux).toBe(false);
    expect(require('../src').os.mac).toBe(false);
    expect(require('../src').os.ios).toBe(false);
    expect(require('../src').os.bot).toBe(false);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.Chrome91macOS);
    expect(require('../src').os.name).toBe('macos');
    expect(require('../src').os.android).toBe(false);
    expect(require('../src').os.windows).toBe(false);
    expect(require('../src').os.linux).toBe(false);
    expect(require('../src').os.mac).toBe(true);
    expect(require('../src').os.ios).toBe(false);
    expect(require('../src').os.bot).toBe(false);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.Chrome91Linux);
    expect(require('../src').os.name).toBe('linux');
    expect(require('../src').os.android).toBe(false);
    expect(require('../src').os.windows).toBe(false);
    expect(require('../src').os.linux).toBe(true);
    expect(require('../src').os.mac).toBe(false);
    expect(require('../src').os.ios).toBe(false);
    expect(require('../src').os.bot).toBe(false);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.iPhoneXRSafari);
    expect(require('../src').os.name).toBe('ios');
    expect(require('../src').os.android).toBe(false);
    expect(require('../src').os.windows).toBe(false);
    expect(require('../src').os.linux).toBe(false);
    expect(require('../src').os.mac).toBe(false);
    expect(require('../src').os.ios).toBe(true);
    expect(require('../src').os.bot).toBe(false);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.SamsungGalaxyS9);
    expect(require('../src').os.name).toBe('android');
    expect(require('../src').os.android).toBe(true);
    expect(require('../src').os.windows).toBe(false);
    expect(require('../src').os.linux).toBe(false);
    expect(require('../src').os.mac).toBe(false);
    expect(require('../src').os.ios).toBe(false);
    expect(require('../src').os.bot).toBe(false);
  });

  test('should detect OS version', () => {
    uaGetter.mockReturnValue(UA.Chrome91Win10);
    expect(require('../src').os.version).toBe('NT 10.0');
    expect(require('../src').os.majorVersion).toBe(10);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.Chrome91macOS);
    expect(require('../src').os.version).toBe('10.15.7');
    expect(require('../src').os.majorVersion).toBe(10);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.iPhoneXRSafari);
    expect(require('../src').os.version).toBe('12.0');
    expect(require('../src').os.majorVersion).toBe(12);
  });

  test('should detect Bots', () => {
    uaGetter.mockReturnValue(UA.GoogleBot);
    expect(require('../src').os.bot).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.BingBot);
    expect(require('../src').os.bot).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.YahooBot);
    expect(require('../src').os.bot).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.DuckDuckBot);
    expect(require('../src').os.bot).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.BaiduBot);
    expect(require('../src').os.bot).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.YandexBot);
    expect(require('../src').os.bot).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.FaceBot);
    expect(require('../src').os.bot).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.AlexaBot);
    expect(require('../src').os.bot).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.LinkedinBot);
    expect(require('../src').os.bot).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.SkypeBot);
    expect(require('../src').os.bot).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.TwitterBot);
    expect(require('../src').os.bot).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.TumblrBot);
    expect(require('../src').os.bot).toBe(true);
  });
});

describe('Browser detection', () => {
  test('should expose results', () => {
    const { browser } = require('../src');
    expect(browser.name).toBeDefined();
    expect(browser.vendor).toBeDefined();
    expect(browser.chrome).toBeDefined();
    expect(browser.firefox).toBeDefined();
    expect(browser.safari).toBeDefined();
    expect(browser.opera).toBeDefined();
    expect(browser.edge).toBeDefined();
    expect(browser.ie).toBeDefined();
    expect(browser.node).toBeDefined();
    expect(browser.instagram).toBeDefined();
    expect(browser.pinterest).toBeDefined();
    expect(browser.facebook).toBeDefined();
    expect(browser.linkedIn).toBeDefined();
    expect(browser.snapchat).toBeDefined();
    expect(browser.whatsApp).toBeDefined();
    expect(browser.twitter).toBeDefined();
    expect(browser.weChat).toBeDefined();
    expect(browser.tikTok).toBeDefined();
    expect(browser.inApp).toBeDefined();
    expect(browser.version).toBeDefined();
    expect(browser.majorVersion).toBeDefined();
  });

  test('should detect browser name', () => {
    uaGetter.mockReturnValue(UA.Chrome91Win10);
    expect(require('../src').browser.name).toBe('chrome');
    expect(require('../src').browser.chrome).toBe(true);
    expect(require('../src').browser.firefox).toBe(false);
    expect(require('../src').browser.safari).toBe(false);
    expect(require('../src').browser.opera).toBe(false);
    expect(require('../src').browser.edge).toBe(false);
    expect(require('../src').browser.ie).toBe(false);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.Firefox89Win10);
    expect(require('../src').browser.name).toBe('firefox');
    expect(require('../src').browser.chrome).toBe(false);
    expect(require('../src').browser.firefox).toBe(true);
    expect(require('../src').browser.safari).toBe(false);
    expect(require('../src').browser.opera).toBe(false);
    expect(require('../src').browser.edge).toBe(false);
    expect(require('../src').browser.ie).toBe(false);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.Safari14macOS);
    expect(require('../src').browser.name).toBe('safari');
    expect(require('../src').browser.chrome).toBe(false);
    expect(require('../src').browser.firefox).toBe(false);
    expect(require('../src').browser.safari).toBe(true);
    expect(require('../src').browser.opera).toBe(false);
    expect(require('../src').browser.edge).toBe(false);
    expect(require('../src').browser.ie).toBe(false);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.Opera77Win10);
    expect(require('../src').browser.name).toBe('opera');
    expect(require('../src').browser.chrome).toBe(false);
    expect(require('../src').browser.firefox).toBe(false);
    expect(require('../src').browser.safari).toBe(false);
    expect(require('../src').browser.opera).toBe(true);
    expect(require('../src').browser.edge).toBe(false);
    expect(require('../src').browser.ie).toBe(false);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.Edge91Win10);
    expect(require('../src').browser.name).toBe('microsoft edge');
    expect(require('../src').browser.chrome).toBe(false);
    expect(require('../src').browser.firefox).toBe(false);
    expect(require('../src').browser.safari).toBe(false);
    expect(require('../src').browser.opera).toBe(false);
    expect(require('../src').browser.edge).toBe(true);
    expect(require('../src').browser.ie).toBe(false);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.InternetExplorer11);
    expect(require('../src').browser.name).toBe('internet explorer');
    expect(require('../src').browser.chrome).toBe(false);
    expect(require('../src').browser.firefox).toBe(false);
    expect(require('../src').browser.safari).toBe(false);
    expect(require('../src').browser.opera).toBe(false);
    expect(require('../src').browser.edge).toBe(false);
    expect(require('../src').browser.ie).toBe(true);
  });

  test('should detect browser version', () => {
    uaGetter.mockReturnValue(UA.Chrome91Win10);
    expect(require('../src').browser.version).toBe('91.0.4472.77');
    expect(require('../src').browser.majorVersion).toBe(91);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.Safari14macOS);
    expect(require('../src').browser.version).toBe('14.0.3');
    expect(require('../src').browser.majorVersion).toBe(14);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.Firefox89Win10);
    expect(require('../src').browser.version).toBe('89.0');
    expect(require('../src').browser.majorVersion).toBe(89);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.Edge91Win10);
    expect(require('../src').browser.version).toBe('91.0.4501.0');
    expect(require('../src').browser.majorVersion).toBe(91);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.InternetExplorer11);
    expect(require('../src').browser.version).toBe('11');
    expect(require('../src').browser.majorVersion).toBe(11);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.iPhoneXRSafari);
    expect(require('../src').browser.version).toBe('12.0');
    expect(require('../src').browser.majorVersion).toBe(12);
  });

  test('should detect in-app browsers', () => {
    uaGetter.mockReturnValue(UA.FacebookApp);
    expect(require('../src').browser.facebook).toBe(true);
    expect(require('../src').browser.inApp).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.InstagramApp);
    expect(require('../src').browser.instagram).toBe(true);
    expect(require('../src').browser.inApp).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.WhatsappApp);
    expect(require('../src').browser.whatsApp).toBe(true);
    expect(require('../src').browser.inApp).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.TikTokApp);
    expect(require('../src').browser.tikTok).toBe(true);
    expect(require('../src').browser.inApp).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.WechatApp);
    expect(require('../src').browser.weChat).toBe(true);
    expect(require('../src').browser.inApp).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.PinterestApp);
    expect(require('../src').browser.pinterest).toBe(true);
    expect(require('../src').browser.inApp).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.SnapchatApp);
    expect(require('../src').browser.snapchat).toBe(true);
    expect(require('../src').browser.inApp).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.LinkedInApp);
    expect(require('../src').browser.linkedIn).toBe(true);
    expect(require('../src').browser.inApp).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.TwitterAppAndroid);
    expect(require('../src').browser.twitter).toBe(true);
    expect(require('../src').browser.inApp).toBe(true);
    jest.resetModules();
    uaGetter.mockReturnValue(UA.TwitterAppiPhone);
    expect(require('../src').browser.twitter).toBe(true);
    expect(require('../src').browser.inApp).toBe(true);
  });
});

describe('Device detection', () => {
  test('should expose results', () => {
    const { device } = require('../src');
    expect(device.platform).toBeDefined();
    expect(device.type).toBeDefined();
    expect(device.model).toBeDefined();
    expect(device.phone).toBeDefined();
    expect(device.tablet).toBeDefined();
    expect(device.mobile).toBeDefined();
    expect(device.desktop).toBeDefined();
    expect(device.iphone).toBeDefined();
    expect(device.ipad).toBeDefined();
    expect(device.ipod).toBeDefined();
    expect(device.pixelRatio).toBeDefined();
    expect(device.node).toBeDefined();
    expect(device.browser).toBeDefined();
    expect(device.orientation).toBeDefined();
    expect(device.portrait).toBeDefined();
    expect(device.landscape).toBeDefined();
  });
});

import bowser from 'bowser';
export declare const detector: {
    ua: string;
    base: bowser.Parser.Parser;
    window: Window & typeof globalThis;
    isSpoofedIpad: boolean;
} | {
    ua: string;
    base: {
        getOSName: () => string;
        getOSVersion: () => string;
        getBrowserName: () => string;
        getBrowserVersion: () => string;
        getPlatform: () => {
            type: string;
            vendor: string;
        };
    };
    window: {
        devicePixelRatio: number;
        innerWidth: number;
        innerHeight: number;
        navigator: {
            vendor: string;
            mediaDevices: MediaDevices;
        };
        screen: Screen;
        matchMedia: MediaQueryList;
    };
    isSpoofedIpad: boolean;
};
declare class OS {
    name: string;
    ios: boolean;
    android: boolean;
    windowsPhone: boolean;
    blackBerry: boolean;
    mac: boolean;
    windows: boolean;
    linux: boolean;
    chromeos: boolean;
    node: boolean;
    supportedBots: string[];
    constructor();
    get bot(): boolean;
    get version(): string;
    get majorVersion(): number;
}
declare class Browser {
    name: string;
    vendor: string;
    chrome: boolean;
    firefox: boolean;
    safari: boolean;
    edge: boolean;
    ie: boolean;
    opera: boolean;
    node: boolean;
    facebook: boolean;
    linkedIn: boolean;
    snapchat: boolean;
    whatsApp: boolean;
    twitter: boolean;
    weChat: boolean;
    tikTok: boolean;
    instagram: boolean;
    pinterest: boolean;
    inApp: boolean;
    constructor();
    get version(): string;
    get majorVersion(): number;
}
declare class Device {
    platform: bowser.Parser.PlatformDetails;
    type: string;
    model: string;
    phone: boolean;
    tablet: boolean;
    mobile: boolean;
    desktop: boolean;
    iphone: boolean;
    ipad: boolean;
    ipod: boolean;
    pixelRatio: number;
    node: boolean;
    browser: boolean;
    constructor();
    get orientation(): string;
    get portrait(): boolean;
    get landscape(): boolean;
}
export declare const os: OS;
export declare const browser: Browser;
export declare const device: Device;
declare class Detect {
    os: OS;
    browser: Browser;
    device: Device;
    detector: {
        ua: string;
        base: bowser.Parser.Parser;
        window: Window & typeof globalThis;
        isSpoofedIpad: boolean;
    } | {
        ua: string;
        base: {
            getOSName: () => string;
            getOSVersion: () => string;
            getBrowserName: () => string;
            getBrowserVersion: () => string;
            getPlatform: () => {
                type: string;
                vendor: string;
            };
        };
        window: {
            devicePixelRatio: number;
            innerWidth: number;
            innerHeight: number;
            navigator: {
                vendor: string;
                mediaDevices: MediaDevices;
            };
            screen: Screen;
            matchMedia: MediaQueryList;
        };
        isSpoofedIpad: boolean;
    };
}
declare const _default: Detect;
export default _default;

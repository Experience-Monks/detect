# detect

User Agent refined detect, it's using bowser as a base detector.

## Why do we need another detector?
This detector has some important features that we use at Jam3 like Device Orientation, in App Browser Detection, etc.

## Installation

```
npm install @jam3/detect
```

## Importing

```
import detect from '@jam3/detect';
import {bots, browser} from '@jam3/detect';
```

## Usage

1. Know the OS Major Version

```
import {os} from '@jam3/detect';

console.log(os.getOSMajorVersion());
```

2. Get device orientation

```
import {device} from '@jam3/detect';

console.log(device.isPortrait());
console.log(device.isLandscape());
```


## TODO
1. Unify API, there are some boolean and methods called `is[noun]`, we should have a clear convention between methods and variables.

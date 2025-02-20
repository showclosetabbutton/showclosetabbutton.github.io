---
layout: post
title:  "How to develop a extension for firefox mobile?"
date:   2025-02-18 15:18:59 +0800
tags: 
 - development
---
## {{ page.title }}

### Develop a extension for firefox mobile steps
1. (on Desktop) [Download nodejs](https://nodejs.org/en/download/current) and install it.
2. (on Desktop) Install **web-ext** command via `npm install --global web-ext`
3. (on Phone) You cannot install [Firefox for Android Nightly](https://play.google.com/store/apps/details?id=org.mozilla.fenix) directly from the Google Play Store. Make sure that the version of **Firefox for Android Nightly** is consistent with that of **Desktop Firefox**, otherwise you will not see the debug message. Go to [apk mirror](https://www.apkmirror.com/apk/mozilla/firefox-fenix/firefox-fenix-134-0a1-release/firefox-nightly-for-developers-134-0a1-22-android-apk-download/download/?key=d0c57b1179cea780448e42c36b447f67edcb9ac5) to query the corresponding Desktop firefox and firefox nightly for android version download and install.
4. (on Phone) Open **firefox for android nightly**, open **settings**, and checked **remote debugging via USB**. Then **Desktop Firefox** can connect to **Mobile Firefox**.
5. (on Phone) Enable **remote debugging mode** on Android phone (Google Pixel), open **Settings / About phone / Click on the version number seven times**, return to the previous page, click **System / Developer options / Checked USB debugging**. 
6. (on Desktop) [Download adb](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) and unzip it.
7. (between Desktop and Phone) Use USB cable to connect computer and mobile phone.
8. (on Desktop) Open the command prompt and change directory to the adb folder and execute the command `adb devices` to obtain the device ID.
9. (on Desktop) Go to the extension folder and run the command: `web-ext run -t firefox-android --adb-device <YOUR-DEVICE-ID> --firefox-apk org.mozilla.fenix`
10. (on Phone) It will launch **Firefox for Android Nightly** on your phone and install your extension.

### How to install the apk downloaded by apkmirror on the mobile phone?
1. Search for **apkmirror** in the Google Play Store.
2. Find **apkmirror installer (official)** and install it. Browse to the **apkm** file you just downloaded and install it.

### Problem
#### Problem1
web-ext run -t firefox-android --adb-device <DEVICE_ID> --firefox-apk org.mozilla.fenix
FailError: Failure: 'device unauthorized.
This adb server's $ADB_VENDOR_KEYS is not set
Try 'adb kill-server' if that seems wrong.

#### Solusion
1. Make sure the USB debugging mode is turned on on your device.
2. Remove the old authorization and re-authorize.
- `adb kill-server`
- `adb start-server`
- Reconnect your device to your computer.
- If an authorization prompt pops up on your device, click Allow or Trust this Computer.
3. Check adb devices status

### Reference
- [developing-extensions-for-firefox-for-android](https://extensionworkshop.com/documentation/develop/developing-extensions-for-firefox-for-android/)
- [debug android firefox addon overview](https://www.youtube.com/watch?v=akJzDIjvoDo)
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/)

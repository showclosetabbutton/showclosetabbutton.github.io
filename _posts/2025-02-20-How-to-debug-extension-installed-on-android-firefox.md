---
layout: post
title:  "How to debug extension installed on Android Firefox?"
date:   2025-02-18 15:18:59 +0800
tags: 
 - development
---
## {{ page.title }}
###  (on Desktop)

1.Run the `web-ext run -t firefox-android --adb-device <YOUR-DEVICE-ID> --firefox-apk org.mozilla.fenix` command to start android firefox and install the package.

2.Open Desktop Firefox and go to **about:debugging**.

3.Click **setup**.

4.Click the **enable usb devices** button of connect a device.

5.You will see your Android phone on the left. Click the **connect** button on the right side of the phone.
<div class="image-container">
  <img src="/images/blog/desktop-firefox-refresh-devices.png" alt="desktop-firefox-refresh-devices screenshot">
</div>

6.Click your Android phone on the left.

7.Find the package you want to debug in temporary extension.

8.Click the **inspect** button.

9.Then you can debug in the console window.


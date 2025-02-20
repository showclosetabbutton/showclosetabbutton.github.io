---
layout: post
title:  "How to debug websites on android firefox?"
date:   2025-02-18 15:18:59 +0800
tags: 
 - site
---
## {{ page.title }}
### website debugging steps on android (Google Pixel) firefox

1.Turn on the develop mode on your Android phone. **Settings / about phone / Build number** Keep clicking until you become a developer.

2.Go to **Settings / System / Developer options** and enable USB debugging.

3.Connect your phone to your PC.

4.Download adb tools and execute adb devices to confirm whether the device is captured.

5.Open android firefox, go to **Settings** and enable **remote debugging via USB**.

6.Open PC firefox and go to [about:debugging](about:debugging).

7.Press the refresh devices button if no device is found.

8.Press the **connect** button to connect the device, then press the device.
<div class="image-container">
  <img src="/images/blog/desktop-firefox-refresh-devices.png" alt="desktop-firefox-refresh-devices screenshot">
</div>

9.Select the website you want to debug and click the inspect button.
<div class="image-container">
  <img src="/images/blog/desktop-firefox-inspect.png" alt="desktop firefox inspect screenshot">
</div>

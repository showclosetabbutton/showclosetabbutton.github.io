---
layout: post
title:  "Upload your firefox extension"
date:   2025-02-18 15:18:59 +0800
tags: 
 - development
---
## {{ page.title }}

### Log in to the Firefox addon website
1. Firefox addon has a website dedicated to uploading [Firefox addon](https://addons.mozilla.org/en-US/developers/), which requires **two-stage verification**. A **qrcode** will be given on the verification page.
2. If you are browsing this page on an Android phone, you can download the [Google Authenticator APP](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&pli=1).
3. There is a link on the website to convert the qrcode into a private key. Copy the **private key**.
4. Then open **Google authenticator**, click the **plus sign**, click enter to set the key, and you can choose a **verification code** name.
5. Paste your **verification code** onto the **private key** you just copied, and a **six-digit number** will be generated. Copy the number.
6. Enter the **verification code** in the box on the web page to enter the website where the firefox addon is uploaded.

### Upload Firefox addon
1. Make sure your extension has been tested on **Desktop Firefox or Android Firefox or both**.
2. Go to your extension package folder to package all the data into **extension.zip** and rename the zip file to **xpi**.
3. You are asked to check whether this extension is suitable for **Desktop Firefox or Android Firefox or both**.
4. Fill in the basic information of the Firefox extension.
5. After the upload is completed, it needs to be manually reviewed and it will take some time before it can be seen on the firefox addon website.

### Reference
- [secure-firefox-account-two-step-authentication](https://support.mozilla.org/hsb/kb/secure-firefox-account-two-step-authentication)
- [submitting-an-add-on](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/)
- [Firefox Add-on Developer Hub](https://addons.mozilla.org/en-US/developers/)
- [Firefox Browser ADD-ONS](https://addons.mozilla.org/en-US/android/)

---
layout: post
title:  "How to embed YouTube Shorts?"
date:   2025-02-26 15:18:59 +0800
tags: 
 - site
permalink: /blog/:path
---
## {{ page.title }}

1. Get the URL of the embedded video, for example: `https://www.youtube.com/shorts/ML22aRbaoQU`
2. Add it to your website

```
<iframe width="315" height="560" src="https://www.youtube.com/embed/<video-id>" title="YouTube video player" frameborder="0&quot;" allowfullscreen=""></iframe>
```
3. Replace **\<video-id\>** with your video id and it will become:

```
<iframe width="315" height="560" src="https://www.youtube.com/embed/ML22aRbaoQU" title="YouTube video player" frameborder="0&quot;" allowfullscreen=""></iframe>
```

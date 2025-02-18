---
layout: post
title:  "How to use Jekyll on Windows 11"
date:   2025-02-18 15:18:59 +0800
tags: 
 - seo
 - jekyll
---
## {{ page.title }}

### Install Jekyll on Windows 11
1. Download [Ruby+Devkit 3.4.2-1 (x86)](https://rubyinstaller.org/downloads/)
2. Install it and press **<ENTER>** for each option
3. Open Command Prompt **as an administrator**
4. `cd c:\Ruby34`
5. `gem install jekyll bundler`
6. `gem update --system 3.6.4`

### Building a Jekyll Site
1. `jekyll new my-site`
2. `cd my-site`
3. `bundle exec jekyll serve --verbose` #Press ctrl+c to stop
4. Visit **http://localhost:4000** in the browser, edit the web page, and then press **ctrl+r** in the browser to view the result.

### Simple example of a jekyll website
#### _layouts/default.html
```html
<!DOCTYPE html>
<html>
 <body>
 {{ content }}
 </body>
</html>
```

#### index.md
```md
---
title: My page
layout: default
---

# {{ page.title }}
```

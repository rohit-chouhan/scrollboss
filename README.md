
<p align="center">
  <img src="https://i.postimg.cc/VNxNLJbp/iusIL3Uo.gif"/><br>
   <img width="600" src="https://ps.w.org/advanced-scrollbar/assets/banner-772x250.png?rev=2481267"/><br>
Beautiful Scrollbar customizer for Bootstrap &amp; HTML5 Page<br>
  </p>
  
 ### Installation
 Include the CDN inside your head tag.
powered by <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/JsDelivr_Logo.svg/1200px-JsDelivr_Logo.svg.png"/>
  ```html
<script src="https://cdn.jsdelivr.net/gh/rohit-chouhan/scrollboss/scrollboss.js"></script>
```
or
  ```html
<script src="https://cdn.jsdelivr.net/npm/scrollboss/scrollboss.js"></script>
```

### Compatible Browser
|<img width="80" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png">|<img width="80" src="https://i.redd.it/elm050ng2kv41.jpg">|<img width="80" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Firefox_logo%2C_2017.png">|<img width="80" src="https://logos-download.com/wp-content/uploads/2016/03/Opera_logo_icon.png">|<img width="80" src="http://guiadeinternet.com/files/2011/11/Internet_Explorer_9.png">|
|-|-|-|-|-|
|<p align="center">![](https://img.shields.io/badge/-Yes-green)</p>|<p align="center">![](https://img.shields.io/badge/-Yes-green)</p>|<p align="center">![](https://img.shields.io/badge/-Yes-green)</p>|<p align="center">![](https://img.shields.io/badge/-Yes-green)</p>|<p align="center">![](https://img.shields.io/badge/-No-red)</p>

## Usage

|Object|Descpription|
|------|------|
color| to apply `bootstrap` and custom hex color on bar
background| to apply `bootstrap` and custom hex color on bar track
width| to apply width size of bar in pixel
radius| used to radius apply on bar or track
shadow | shadow size of bar track

## Method
```javascript
scrollboss.apply({
  color:"<bar_color>", //primary, danger, success, #e8009b(custom hex)
  background:"<track_color>", //primary, danger, success, #e8009b(custom hex)
  width:10, //bar width (in px) 
  radius:50, //bar radius
  shadow:5, //track shadow
});
```


## Complete Code Example
Live Try => https://jsfiddle.net/8o7hgct9/
```html
<html>
    <head>
        <title>
            The ScrollBoss
        </title>
        <script src="https://cdn.jsdelivr.net/gh/rohit-chouhan/scrollboss/scrollboss.js"></script>
        <script>
            scrollboss.apply({
                color:"primary",
                background:"success",
                width:10,
                radius:50,
                shadow:5,
            });
        </script>
    </head>
    <body>
        <h2>Hello</h2><br><br><br><br><br><br><br><br>
        <h2>Developer</h2><br><br><br><br><br><br><br><br>
        <h2>I</h2><br><br><br><br><br><br><br><br>
        <h2>Am</h2><br><br><br><br><br><br><br><br>
        <h2>ScrollBoss</h2><br><br><br><br><br><br><br><br>
    </body>
</html>
```

Developed by <a href="https://rohitchouhan.com">Rohit Chouhan</a>

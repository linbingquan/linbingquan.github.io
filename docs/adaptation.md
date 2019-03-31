# 前端适配 (Screen Adaptation)

### rem 适配

```js
/* 屏幕适配 */
( function ( document, window ) {
  var baseFontSize = 10; // *10 为了方便计算
  var baseWidth = 320; // 移动端设计稿宽
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var set = function () {
    var clientWidth = document.documentElement.clientWidth || window.innerWidth;
    var rem = 10;
    if ( clientWidth != baseWidth ) {
      rem = Math.floor( clientWidth / baseWidth * baseFontSize );
    }
    document.querySelector( 'html' ).style.fontSize = rem + 'px';
  }
  set();
  window.addEventListener( resizeEvt, set );
} ( document, window ) );
```

### @media 查询 适配

```css
/* 适配的分辨率 Start */
/* 必需适配的分辨率 */
@media screen and (max-width: 1920px) { }
@media screen and (max-width: 1440px) { }
@media screen and (max-width: 1366px) { }
@media screen and (max-width: 750px) { }

/* 6寸 */
@media screen and (max-width: 480px) { }
/* IPhone 6/7/8 Plus*/
@media screen and (max-width: 414px) { }
/* googel N4 */
@media screen and (max-width: 384px) { }
/* IPhone 6/7/8 */
@media screen and (max-width: 375px) { }
/* googel N5 */
@media screen and (max-width: 360px) { }
/* IPhone 4 | IPhone 5/SE */
@media screen and (max-width: 320px) { }
/* End 适配的分辨率 */
```

[前端常用单位](https://www.cnblogs.com/dannyxie/p/6640903.html)
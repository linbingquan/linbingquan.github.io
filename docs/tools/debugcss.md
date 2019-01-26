# CSS 实用的 Debug 技巧

可以一目了然不同层级之间的关系，可以很快看出不同浏览器的怪异行为

```css
*:not(path):not(g) {
  outline: dotted 1px #2195f3 !important;
}
```

[JianShu](https://www.jianshu.com/p/f4214443bd76)
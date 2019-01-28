# 手机调试工具 

[VConsole](https://github.com/Tencent/vConsole) 是一个轻量、可拓展、针对手机网页的前端开发者调试面板

[Eruda](https://github.com/liriliri/eruda) 是一个专为手机网页前端设计的调试面板，类似 DevTools 的迷你版

```js
/**
* 加载script文件
* @param url
* @param callback
*/
const loadScript = (url, callback) => {
    const script = document.createElement('script');
    script.src = url;
    // 加载之后立即执行
    script.onload = () => callback && callback();
    document.body.appendChild(script);
}

if (/eruda=true/.test(window.location)) {
    // eruda 调试工具
    loadScript( 'https://cdn.jsdelivr.net/npm/eruda',
        () => { eruda.init(); } );
} else {
    // VConsole 调试工具
    loadScript( 'https://cdn.jsdelivr.net/npm/vconsole',
        () => { new VConsole(); } );
}
```

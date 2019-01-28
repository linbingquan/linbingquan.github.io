# 手机调试工具 

适用于无法调用浏览器开发者工具

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

---
sidebar: false
---

# 最新文章

[密码验证](/password.md) 2019.01.24

[前端适配](/media.md) 2018.12.06

[前端规范CSS](/StandardCSS.md) 2018.11.26

[Unity3D教程](/unity3d.md) 2018.10.23

---

### Tools

[CSS Debug 技巧](/tools/debugcss.md) 2019.01.26

[手机调试工具](/tools/debugMobile.md) 2019.01.28

<template>
    <div class="pv-container">
        <span id="busuanzi_container_page_pv">总阅读量 <span id="busuanzi_value_page_pv"></span> 次</span>
        <span id="busuanzi_container_site_pv">总访问量 <span id="busuanzi_value_site_pv"></span> 次</span>
        <span id="busuanzi_container_site_uv">总访客数 <span id="busuanzi_value_site_uv"></span> 次</span>
    </div>
</template>

<script>
export default {
  mounted () {
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

    loadScript('https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js');
  }
}
</script>

<style scoped>
    .pv-container { position: fixed; bottom: 5px; left: 5px; text-align: left; color: #bdbdbd; font-size: 12px; }
    #busuanzi_container_page_pv, #busuanzi_container_site_uv { display: none !important; }
    @media screen and (max-width: 750px) { .pv-container { display: none; } }
</style>
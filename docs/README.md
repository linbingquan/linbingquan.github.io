---
sidebar: false
title: 首页
---

### 最新文章

2020.07.19 [配色方案](/colors.md)

2020.05.24 [WebGL 所见即所得](/three/three-blender.md)

2019.05.11 [React生命周期](/react/react-lifecycle.md)

2019.03.31 [算法](/algorithm.md)

2019.02.09 [前端规范JavaScript](/StandardJS.md)

2019.02.04 [TypeScript配置](/typescript/web_config.md)

2019.01.29 [Unity3D实例](/unity3d/examples/unity3d_ball.md)

2019.01.29 [前端正则验证](/regexp.md)

2018.12.06 [前端适配](/adaptation.md)

2018.11.26 [前端规范CSS](/StandardCSS.md)

2018.10.23 [Unity3D教程](/unity3d.md)

---

### Tools

2019.02.02 [Shell 脚本](/tools/shell.md)

2019.01.28 [手机调试工具](/tools/debugMobile.md)

2019.01.26 [CSS Debug 技巧](/tools/debugcss.md)

<template>
    <div class="bing-footer">
        <div>&copy; 2019 林炳权</div>
        <div>
            <a href="https://github.com/linbingquan" title="GitHub"><span>GitHub</span></a> | 
            <span id="busuanzi_container_page_pv">总阅读量 <span id="busuanzi_value_page_pv"></span> 次</span>
            <span id="busuanzi_container_site_pv">总访问量 <span id="busuanzi_value_site_pv"></span></span>
            <span id="busuanzi_container_site_uv">总访客数 <span id="busuanzi_value_site_uv"></span> 次</span>
        </div>
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

        this.$refs.busuanzi = script; // destroyed

        document.body.appendChild(script);
    }

    loadScript('https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js');
  },
  destroyed () {
      this.$refs.busuanzi.remove();
  }
}
</script>

<style scoped>
    .bing-footer { margin-top: 100px; text-align: center; color: #bdbdbd; font-size: 12px; }
    #busuanzi_container_page_pv, #busuanzi_container_site_uv { display: none !important; }
    @media screen and (max-width: 750px) { .pv-container { display: none; } }
</style>
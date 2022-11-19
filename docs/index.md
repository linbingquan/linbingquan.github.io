---
title: 首页
---

[个人简历](/resume/linbingquan)

<div>
    <div class="bing-footer">
        <div>&copy; 2022 林炳权</div>
        <div>
            <a href="https://github.com/linbingquan" title="GitHub"><span>GitHub</span></a> |
            <span id="busuanzi_container_page_pv">总阅读量 <span id="busuanzi_value_page_pv"></span> 次</span>
            <span id="busuanzi_container_site_pv">总访问量 <span id="busuanzi_value_site_pv"></span> 次</span>
            <span id="busuanzi_container_site_uv">总访客数 <span id="busuanzi_value_site_uv"></span> 次</span>
        </div>
    </div>
</div>

<script setup lang="ts">
import { onMounted, onUnmounted  } from "vue"

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
    // 组件卸载后删除脚本
    onUnmounted(() => script.remove());
}

onMounted(() => loadScript('https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'))
</script>

<style scoped>
    #busuanzi_container_page_pv, #busuanzi_container_site_uv { display: none !important; }
    .bing-footer { margin-top: 100px; text-align: center; color: #bdbdbd; font-size: 12px; }
</style>
